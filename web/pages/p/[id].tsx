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

import { Store } from "store";

import { Code, Empty, Error, Spinner } from "components";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: auto;
  max-width: 900px;
  width: 90%;
`;

const Topic = styled.div`
  height: auto;
`;

const QuizWrapper = styled.div`
  background-color: var(--primary-background-color);
  padding: 2rem;
  flex-grow: 1;
  position: relative;
`;

const Question = styled.div`
  padding: 1rem 0;
  font-weight: bold;
`;

const Answer = styled.div`
  background-color: white;
  border-radius: var(--primary-border-radius);
  box-shadow: var(--primary-shadow);
  cursor: pointer;
  margin: 1rem 0;
  padding: 1rem;

  &.falsy {
    color: red;
  }

  &.truthy {
    color: green;
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
        id: data.topic.id,
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
      {loading && <Spinner />}
      {error ? <Error>{error.message}</Error> : null}
      {data?.quiz ? (
        <>
          <Question>{data.quiz.question}</Question>
          {[1, 2, 3, 4].map((num) => (
            <Answer
              className={isCorrectAnswer(num)}
              key={num}
              onClick={() => onSelectAnswer(num)}
            >
              {data.quiz[`answer${num}`]}
            </Answer>
          ))}
        </>
      ) : null}
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
