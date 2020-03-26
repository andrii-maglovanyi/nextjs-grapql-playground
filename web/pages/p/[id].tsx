import { useEffect, useRef, useState } from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import Prism from "prismjs";

import { ApolloPageContext } from "next-with-apollo";
import Markdown from "markdown-to-jsx";

import withLayout from "lib/hocs/with-layout";
import withApollo from "lib/hocs/with-apollo";
import useAuth from "lib/hooks/use-auth";

import { Code, Empty, Error, Spinner } from "components";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const Content = styled.section`
  margin: auto;
  max-width: 900px;
  width: 90%;
`;

const Topic = styled(Content)`
  height: auto;
`;

const QuizWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  position: relative;
`;

const Question = styled.div`
  padding: 1rem 0;
  font-weight: bold;
`;

const Answers = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Answer = styled.div`
  background-color: white;
  border-radius: var(--primary-border-radius);
  box-shadow: var(--primary-shadow);
  cursor: pointer;
  padding: 1rem;

  span {
    box-sizing: border-box;
    color: inherit;
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    margin-right: 1rem;
    opacity: 0.3;
    text-align: center;
    width: 1.5rem;
  }

  &:hover {
    background-color: var(--inactive-color-light);
  }

  &.falsy {
    background-color: var(--danger-color-light);
    box-shadow: var(--danger-shadow);
    color: var(--danger-color);
  }

  &.truthy {
    background-color: var(--success-color-light);
    box-shadow: var(--success-shadow);
    color: var(--success-color);
  }
`;

const GET_TOPIC = gql`
  query Topic($id: ID!) {
    topic(id: $id) {
      id
      name
      description
      quiz {
        id
      }
    }
  }
`;

const GET_QUIZ = gql`
  query Quiz($id: ID!) {
    quiz(id: $id) {
      question
      answer1
      answer2
      answer3
      answer4
    }
  }
`;

const CHECK_ANSWER = gql`
  mutation CheckAnswer($id: ID!, $num: Int!) {
    checkAnswer(id: $id, num: $num) {
      result
    }
  }
`;

type Props = {
  topicId: number;
};

const Quiz: React.FC<Props> = ({ topicId }) => {
  const [user] = useAuth();
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();

  const [getQuiz, { loading, error, data }] = useLazyQuery(GET_QUIZ);

  useEffect(() => {
    if (user && !user.cached && topicId) {
      getQuiz({
        variables: { id: topicId },
      });
    }
  }, [user, topicId]);

  const [checkAnswer, { data: check }] = useMutation(CHECK_ANSWER);

  const onSelectAnswer = (num: number) => {
    setSelectedAnswer(num);
    checkAnswer({
      variables: {
        id: topicId,
        num,
      },
    });
  };

  const isCorrectAnswer = (num: number) =>
    check && selectedAnswer === num
      ? check.checkAnswer.result
        ? "truthy"
        : "falsy"
      : "";

  return (
    <QuizWrapper>
      <Content>
        {loading && <Spinner />}
        {error ? <Error>{error.message}</Error> : null}
        {data?.quiz ? (
          <>
            <Question>{data.quiz.question}</Question>
            <Answers>
              {[1, 2, 3, 4].map((num) => (
                <Answer
                  className={isCorrectAnswer(num)}
                  data-testid="answer"
                  key={num}
                  onClick={() => onSelectAnswer(num)}
                >
                  <span>{num}</span> {data.quiz[`answer${num}`]}
                </Answer>
              ))}
            </Answers>
          </>
        ) : null}
      </Content>
    </QuizWrapper>
  );
};

const Page = withLayout(({ loading, error, data }) => {
  const topicRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document !== undefined && topicRef.current !== null) {
      Prism.highlightAllUnder(topicRef.current);
    }
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error>{error.message}</Error>;

  return data.topic ? (
    <Wrapper>
      <Topic>
        <h1>{data.topic.name}</h1>
        <div ref={topicRef}>
          <Markdown
            children={data.topic.description}
            options={{
              overrides: {
                code: {
                  component: Code,
                },
              },
            }}
          />
        </div>
      </Topic>
      <Quiz topicId={data.topic.id} />
    </Wrapper>
  ) : (
    <Empty>You are drunk, go home</Empty>
  );
});

Page.getInitialProps = async ({
  apolloClient: client,
  query,
}: ApolloPageContext) =>
  client.query({
    query: GET_TOPIC,
    variables: { id: query.id },
  });

export default withApollo(Page);
