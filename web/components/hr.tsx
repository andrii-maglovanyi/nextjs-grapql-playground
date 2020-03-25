import styled from "styled-components";

const HrComponent = styled.hr`
  background: var(--primary-white);
  border: none;
  box-sizing: border-box;
  color: var(--primary-black-color);
  height: 1px;
  margin: 1.5rem auto;
  overflow: visible;
  padding: 0;
  text-align: center;
  width: 100px;

  &:after {
    background: var(--primary-white);
    border-radius: 50%;
    content: attr(data-text);
    display: inline-block;
    font-size: 0.7rem;
    height: 2rem;
    line-height: 2rem;
    padding: 0;
    position: relative;
    text-transform: uppercase;
    top: -1rem;
    width: 2rem;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Hr: React.FC<Props> = ({ children }) => (
  <HrComponent data-text={children} />
);

export default Hr;
