import { useState } from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { ApolloPageContext } from "next-with-apollo";
import Markdown from "markdown-to-jsx";

import withLayout from "lib/hocs/with-layout";
import withApollo from "lib/hocs/with-apollo";

import { Empty, Error, Spinner } from "components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1024px;
  width: 90%;
`;

const Quiz = styled.div`
  background-color: var(--primary-background-color);
  padding: 2rem;
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
        question
        answer1
        answer2
        answer3
        answer4
      }
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

const Page = withLayout(({ loading, error, data }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();

  if (loading) return <Spinner />;
  if (error) return <Error>{error.message}</Error>;

  const [checkAnswer, { data: check }] = useMutation(CHECK_ANSWER);

  const onSelectAnswer = (num: number) => {
    setSelectedAnswer(num);
    checkAnswer({
      variables: {
        id: data.topic.id,
        num
      }
    });
  };

  const isCorrectAnswer = (num: number) =>
    check && selectedAnswer === num
      ? check.checkAnswer.result
        ? "truthy"
        : "falsy"
      : "";

  return data.topic ? (
    <Wrapper>
      <h1>{data.topic.name}</h1>
      <Markdown>{data.topic.description}</Markdown>
      {data.topic.quiz ? (
        <Quiz>
          <Question>{data.topic.quiz.question}</Question>
          {[1, 2, 3, 4].map(num => (
            <Answer
              className={isCorrectAnswer(num)}
              key={num}
              onClick={() => onSelectAnswer(num)}
            >
              {data.topic.quiz[`answer${num}`]}
            </Answer>
          ))}
        </Quiz>
      ) : null}
    </Wrapper>
  ) : (
    <Empty>You are drunk, go home</Empty>
  );
});

Page.getInitialProps = async ({
  apolloClient: client,
  query
}: ApolloPageContext) =>
  client.query({
    query: GET_TOPIC,
    variables: { id: query.id }
  });

export default withApollo(Page);
