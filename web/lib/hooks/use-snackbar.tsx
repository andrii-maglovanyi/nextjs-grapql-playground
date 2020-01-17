import { createContext, useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";
import Snackbar from "components/snackbar";

type Message = {
  index: number;
  text: string;
  type: "error" | "success";
};

type Props = {
  children?: React.ReactNode;
};

const Context: {
  addMessage: (text: string, type: "error" | "success") => void;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
  removeMessage: (index: number) => void;
} = {
  addMessage: (text, type) => {},
  onError: message => {},
  onSuccess: message => {},
  removeMessage: index => {}
};

const SnackbarContext = createContext(Context);

const SnackbarProvider = ({ children }: Props) => {
  let index = 1;
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback(
    (text, type) => {
      setMessages(messages => [
        ...messages,
        {
          index: index++,
          text,
          type
        }
      ]);
    },
    [setMessages]
  );

  const removeMessage = useCallback(
    index => {
      setMessages(messages =>
        messages.filter(message => message.index !== index)
      );
    },
    [setMessages]
  );

  const snackbarRoot = typeof window !== "undefined" ? document.body : null;

  const renderMessages = () =>
    snackbarRoot
      ? createPortal(
          <>
            {messages.map(message => (
              <Snackbar
                {...message}
                key={message.index}
                onHide={removeMessage}
              />
            ))}
          </>,
          snackbarRoot
        )
      : null;

  return (
    <SnackbarContext.Provider
      value={{
        addMessage,
        onError: (message: string) => addMessage(message, "error"),
        onSuccess: (message: string) => addMessage(message, "success"),
        removeMessage
      }}
    >
      {children}
      {renderMessages()}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export { SnackbarContext, useSnackbar };
export default SnackbarProvider;
