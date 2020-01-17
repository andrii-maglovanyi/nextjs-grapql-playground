import { useContext, useReducer, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import styled from "styled-components";

import { auth } from "../firebase";
import { AuthContext } from "./header";

import { useSnackbar } from "lib/hooks/use-snackbar";
import { Button, Hr, Input, Modal } from "components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Row = styled.div`
  grid-column-start: span 2;
  margin-top: 1rem;
`;

const Switch = styled.div`
  color: #999;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    color: white;
    text-shadow: 0px 0px 1px #fff;
  }

  &.active {
    color: white;

    &:after {
      content: " ";
      position: absolute;
      width: 4px;
      height: 4px;
      background-color: var(--active-color);
      border-radius: 4px;
      top: 100%;
      left: 50%;
    }
  }
`;

type AuthState = {
  email: string;
  password: string;
};

type AuthStateAction =
  | {
      field: string;
      type: "set";
      value: string;
    }
  | {
      type: "reset";
    };

type FormEvent = React.FormEvent<HTMLFormElement>;

const initialState = {
  email: "",
  password: ""
};

const reducer = (state: AuthState, action: AuthStateAction) => {
  switch (action.type) {
    case "set":
      return {
        ...state,
        [action.field]: action.value
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const SIGN_UP = gql`
  mutation {
    signUp {
      id
    }
  }
`;

const Auth = () => {
  const [busyWith, setBusyWith] = useState<string | null>(null);
  const [action, setAction] = useState<string>("in");
  const [signUp] = useMutation(SIGN_UP);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isShowAuth, hideAuth } = useContext(AuthContext);
  const { onError, onSuccess } = useSnackbar();

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ field: target.name, type: "set", value: target.value });
  };

  const { email, password } = state;

  const onSubmit = async (event: FormEvent, socialBase?: string) => {
    event.preventDefault();

    try {
      setBusyWith(socialBase || action);
      if (socialBase) {
        socialBase === "Github"
          ? await auth.doSignInWithGithub()
          : await auth.doSignInWithGoogle();
      } else if (action === "in") {
        await auth.doSignInWithEmailAndPassword(email, password);
      } else if (action === "up") {
        await auth.doCreateUserWithEmailAndPassword(email, password);
      }

      const unsubscribe = auth.onAuthStateChanged(
        async (user: auth.FirebaseUser) => {
          if (user) {
            await signUp();
            onSuccess(`Welcome ${user.email}`);
            unsubscribe();
          }
        }
      );

      hideAuth();
      dispatch({ type: "reset" });
    } catch (error) {
      onError(error.message);
    } finally {
      setBusyWith(null);
    }
  };

  const renderSignUp = () => (
    <form method="post" onSubmit={onSubmit}>
      <Input
        name="email"
        onChange={onChange}
        placeholder="Email"
        type="email"
        value={email}
      />
      <Input
        name="password"
        onChange={onChange}
        placeholder="Password"
        type="password"
        value={password}
      />
      <div>
        <Button
          aria-busy={busyWith === "up"}
          disabled={!!busyWith}
          type="submit"
        >
          Sign up
        </Button>
      </div>
    </form>
  );

  const renderSignIn = () => {
    return (
      <form onSubmit={onSubmit}>
        <Input
          name="email"
          onChange={onChange}
          placeholder="Email"
          type="email"
          value={email}
        />
        <Input
          name="password"
          onChange={onChange}
          placeholder="Password"
          type="password"
          value={password}
        />
        <Button
          aria-busy={busyWith === "in"}
          disabled={!!busyWith}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    );
  };

  const renderGitHubButton = () => (
    <form onSubmit={(event: FormEvent) => onSubmit(event, "Github")}>
      <Button
        aria-busy={busyWith === "Github"}
        disabled={!!busyWith}
        type="submit"
      >
        <i className="icon icon-github-circled"></i>GitHub
      </Button>
    </form>
  );

  const renderGoogleButton = () => (
    <form onSubmit={(event: FormEvent) => onSubmit(event, "Google")}>
      <Button
        aria-busy={busyWith === "Google"}
        disabled={!!busyWith}
        type="submit"
      >
        <i className="icon icon-google"></i>Google
      </Button>
    </form>
  );

  return (
    <Modal isVisible={isShowAuth} onHide={hideAuth} type="small">
      <Grid>
        <div>
          <Switch
            {...(action === "in" ? { className: "active" } : {})}
            onClick={() => setAction("in")}
          >
            Sign in
          </Switch>
        </div>
        <div>
          <Switch
            {...(action === "up" ? { className: "active" } : {})}
            onClick={() => setAction("up")}
          >
            Sign up
          </Switch>
        </div>
        <Row>{action === "in" ? renderSignIn() : renderSignUp()}</Row>
        <Row>
          <Hr>Or</Hr>
        </Row>
        <Row>
          {renderGitHubButton()}
          {renderGoogleButton()}
        </Row>
      </Grid>
    </Modal>
  );
};

export default Auth;
