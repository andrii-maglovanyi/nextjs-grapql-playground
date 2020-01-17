import { useEffect } from "react";
import styled from "styled-components";

export type Type = "error" | "success";

const SnackbarComponent = styled.div`
  background-color: var(--primary-black);
  bottom: 2px;
  color: var(--primary-white);
  font-size: 0.7rem;
  line-height: 1.5rem;
  padding-left: 1rem;
  position: fixed;
  visibility: hidden;
  width: 100%;
  z-index: 1000;

  .icon {
    margin-right: 1rem;
    color: ${(props: { type: Type }) => `var(--${props.type}-color)`};
  }

  &:after {
    animation: snackbar-progress 5s linear infinite;
    background-color: ${(props: { type: Type }) =>
      `var(--${props.type}-color)`};
    background-image: repeating-linear-gradient(
      -45deg,
      var(--primary-black),
      var(--primary-black) 5px,
      transparent 5px,
      transparent 10px
    );
    bottom: -4px;
    content: " ";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &.show {
    animation: snackbar-show var(--primary-animation-duration)
        var(--primary-cubic-bezier-animation),
      snackbar-hide var(--primary-animation-duration) 5s;
    visibility: visible;
  }

  &.error {
    border-bottom-color: var(--error-color);
  }

  &.success {
    border-bottom-color: var(--success-color);
  }

  @keyframes snackbar-progress {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100px 0px;
    }
  }

  @keyframes snackbar-show {
    from {
      bottom: -1rem;
    }
    to {
      bottom: 2px;
    }
  }

  @keyframes snackbar-hide {
    from {
      bottom: 2px;
    }
    to {
      bottom: -1rem;
    }
  }
`;

type Props = {
  index: number;
  onHide: (id: number) => void;
  text: string;
  type: Type;
};

const Snackbar: React.FC<Props> = ({ index, onHide, text, type }) => {
  const iconsMap = {
    error: "fire",
    info: "info-circled",
    success: "ok",
    warning: "warning-empty"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onHide(index);
    }, 5200);

    return () => {
      clearTimeout(timer);
    };
  }, [index, onHide]);

  return (
    <SnackbarComponent
      key={index}
      type={type}
      {...(text ? { className: `show ${type}` } : {})}
    >
      <i className={`icon icon-${iconsMap[type]}`}></i>
      {text}
    </SnackbarComponent>
  );
};

export default Snackbar;
