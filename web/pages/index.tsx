import { useContext, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

import withLayout from "lib/hocs/with-layout";
import { Code, Empty, Error, Spinner } from "components";

import cn from "lib/utils/class-names";

import { Store } from "store";

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  padding: 30px 0 50px 0;
  position: relative;
  width: 90%;

  &:before {
    background: repeating-linear-gradient(
      -40deg,
      transparent,
      transparent 2px,
      var(--gray) 0,
      var(--gray) 6px
    );
    content: " ";
    position: absolute;
    width: 4px;
    height: 100%;
    top: 0;
    left: calc(50% - 2px);
  }

  .branch {
    position: relative;
    margin-bottom: 80px;

    label,
    input[type="radio"] {
      display: block;
      width: 24px;
      height: 24px;
      left: calc(50% - 12px);
      margin: 0;
      position: absolute;
      top: 38px;
      z-index: 2;
    }

    label {
      color: white;
      z-index: 3;
    }

    input[type="radio"] {
      opacity: 0;
      z-index: 10;
      cursor: pointer;
    }

    label:after {
      content: attr(data-degree);
      border-radius: 50%;
      height: 100%;
      width: 100%;
      position: absolute;
      margin-right: 12px;
      text-align: center;
      font-size: 0.7rem;
      line-height: 24px;
    }

    input[type="radio"]:checked + label:after {
      background: #333;
      box-shadow: 0 0 0 4px #fff;
    }
  }

  .leave {
    background: #f9f9f9;
    border-radius: var(--primary-border-radius);
    box-sizing: border-box;
    padding: 1rem;
  }

  .group {
    .topic-section {
      box-sizing: border-box;
      margin-top: 20px;
      border-radius: var(--primary-border-radius);
      background: white;
      margin-left: 50%;
      box-shadow: -2px 2px 0 0 #ccc;
      padding: 1rem;
      position: relative;
      width: calc(50% - 40px);
      transform: translateX(40px);

      &.complete {
        border: 1px solid var(--active-color);
        box-shadow: -2px 2px 0 0 var(--active-color);
      }

      &:first-child {
        margin-top: 0;

        &:before {
          content: " ";
          position: absolute;
          height: 3px;
          z-index: -1;
          background: repeating-linear-gradient(
            -90deg,
            transparent,
            transparent 2px,
            var(--gray) 0,
            var(--gray) 5px
          );
          width: 40px;
          top: 48px;
          left: -40px;
        }
      }

      &:hover {
        .show-on-hover {
          display: block;
        }
      }
    }
  }

  .subject-section {
    position: absolute;
    width: calc(50% - 40px);
    border-radius: var(--primary-border-radius);
    background: #f9f9f9;
    box-shadow: 2px 2px 0 0 #ccc;
    padding: 1rem;
    box-sizing: border-box;
    transform: translateX(0px);

    &:before {
      content: " ";
      position: absolute;
      height: 3px;
      z-index: -1;
      background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        var(--gray) 0,
        var(--gray) 5px
      );
      width: 40px;
      top: 48px;
      left: 100%;
    }
  }

  .hidden {
    display: none;
  }

  .section {
    height: auto;
    overflow: scroll;

    &.collapsed {
      max-height: 0;
      transition: max-height 0.3s ease-in;
    }

    &.expanded {
      max-height: 80vh;
      transition: max-height 0.3s ease-out;
    }
  }
`;

const Head = styled.h2`
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
`;

const LessonButton = styled.a`
  border: 1px solid #ccc;
  border-radius: var(--primary-border-radius);
  color: var(--secondary-black-color);
  cursor: pointer;
  display: none;
  float: right;
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
  text-decoration: none;
  text-transform: initial;

  &:hover {
    color: white;
    background-color: var(--active-color);
    border-color: var(--active-color);
  }
`;

type Topic = {
  id: string;
  name: string;
  description: string;
};

type Subject = {
  id: string;
  name: string;
  description: string;
  degree: number;
  topics: Array<Topic>;
};

const GET_SUBJECTS = gql`
  query {
    subjects {
      id
      degree
      description
      name
      type
      topics {
        id
        description
        name
      }
    }
  }
`;

const Index = withLayout(() => {
  const { state } = useContext(Store);
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  const isComplete = (topic: Topic) =>
    state.progress?.some(({ id }) => topic.id === id);

  const [expandedItems, setExpendedItems] = useState<Array<string>>([]);
  if (loading) return <Spinner />;
  if (error) return <Error>{error.message}</Error>;

  const isVisible = (id: string) =>
    expandedItems.includes(id) ? "expanded" : "collapsed";
  const toggleItem = (id: string) =>
    expandedItems.includes(id)
      ? setExpendedItems([...expandedItems.filter((item) => item !== id)])
      : setExpendedItems([...expandedItems, id]);

  const renderContentBlock = (item: Topic | Subject) => (
    <div className="content">
      <Head onClick={() => toggleItem(item.id + item.name)}>
        {item.name}
        <Link href={`/p/${item.id}`}>
          <LessonButton
            className="show-on-hover"
            onClick={(e) => e.stopPropagation()}
            title={item.name}
          >
            Take a shot
          </LessonButton>
        </Link>
      </Head>
      <div className={"section " + isVisible(item.id + item.name)}>
        <Markdown
          children={item.description}
          options={{
            overrides: {
              code: {
                component: Code,
              },
            },
          }}
        />
      </div>
    </div>
  );

  const renderTopicBlock = (topic: Topic) => (
    <div
      key={topic.id}
      className={cn("topic-section", isComplete(topic) ? "complete" : "")}
    >
      {renderContentBlock(topic)}
    </div>
  );

  const renderSubjectBlock = (subject: Subject) => (
    <li key={subject.id} className="branch">
      <input type="radio" defaultChecked />
      <label data-degree={subject.degree + "°"}></label>
      <div className="subject-section">{renderContentBlock(subject)}</div>
      <div className="group">{subject.topics.map(renderTopicBlock)}</div>
    </li>
  );

  return data?.subjects.length ? (
    <Wrapper>{data.subjects.map(renderSubjectBlock)}</Wrapper>
  ) : (
    <Empty>You are drunk, go home</Empty>
  );
});

export default Index;
