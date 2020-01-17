import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin: 1rem 0;
  position: relative;
  box-sizing: border-box;

  label,
  input {
    transition: all 0.2s;
  }

  input {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #999;
    box-sizing: border-box;
    color: white;
    margin: 0.5rem 0;
    outline: 0;
    padding: 0.5rem;
    width: 100%;

    &::-webkit-input-placeholder {
      opacity: 0;
      transition: inherit;
    }

    &:focus {
      border-bottom-color: var(--active-color);

      &::-webkit-input-placeholder {
        opacity: 1;
      }

      & + label {
        color: var(--active-color);
      }
    }

    &:placeholder-shown + label {
      max-width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:not(:placeholder-shown) + label,
    &:focus + label {
      transform: translate(0, -1.25rem) scale(0.75);
      cursor: pointer;
    }
  }

  label {
    box-sizing: border-box;
    color: var(--white);
    left: 0;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    position: absolute;
    text-align: left;
    top: 0;
    transform-origin: left bottom;
  }
`;

export interface Props {
  label?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  value: string;
}

const Input: React.FC<Props> = ({ placeholder, label, ...props }) => {
  const title = label || placeholder;

  return (
    <Wrapper>
      <input
        id={props.name}
        {...props}
        placeholder={label ? placeholder : " "}
      />
      <label htmlFor={props.name}>{title}</label>
    </Wrapper>
  );
};

export default Input;
