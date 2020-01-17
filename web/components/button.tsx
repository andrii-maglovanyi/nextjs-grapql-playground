import styled from "styled-components";

const ButtonComponent = styled.button`
  background-color: var(--primary-white);
  border: 0;
  border-radius: var(--primary-border-radius);
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.8rem;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
  }

  &[aria-busy="true"] {
    animation: button-progress 10s linear infinite;
    background-image: repeating-linear-gradient(
      -45deg,
      var(--gray),
      var(--gray) 10px,
      transparent 10px,
      transparent 20px
    );
    color: initial;
  }

  &:hover {
    background-color: var(--active-color);
    box-shadow: var(--primary-glow);
  }

  @keyframes button-progress {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -300px 0px;
    }
  }
`;

type Props = {
  "aria-busy"?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default Button;
