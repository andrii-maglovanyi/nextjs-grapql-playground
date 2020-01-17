import styled from "styled-components";

const Backdrop = styled.div`
  align-items: center;
  background-color: var(--overlay-color);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const ModalComponent = styled.div`
  background-color: var(--modal-background-color);
  border-radius: var(--modal-border-radius);
  box-shadow: 0px 0px var(--modal-border-radius) var(--modal-border-radius)
    var(--modal-background-color);
  box-sizing: border-box;
  color: var(--primary-white);
  font-size: initial;
  line-height: initial;
  padding: 5rem;
  position: fixed;
  text-transform: initial;
  transition: all 0.5s ease-in-out;
  width: 50%;

  &.small {
    max-width: 500px;
    min-width: 400px;
  }

  .icon-cancel {
    cursor: pointer;
    font-size: 1.2rem;
    position: absolute;
    right: 1rem;
    top: 1rem;

    &:hover {
      color: var(--active-color);
      text-shadow: var(--text-shadow-color-white);
    }
  }
`;

type Event = React.MouseEvent<HTMLElement, MouseEvent>;

type Props = {
  children: React.ReactNode;
  isVisible?: boolean;
  onHide: (event: Event) => void;
  type: "small" | "medium" | "big";
};

const Modal: React.FC<Props> = ({
  children,
  isVisible = false,
  onHide,
  type
}) =>
  isVisible ? (
    <Backdrop onClick={onHide}>
      <ModalComponent
        onClick={(event: Event) => event.stopPropagation()}
        style={{ opacity: isVisible ? 1 : 0 }}
        className={type}
      >
        <i className="icon icon-cancel" onClick={onHide}></i>
        {children}
      </ModalComponent>
    </Backdrop>
  ) : null;

export default Modal;
