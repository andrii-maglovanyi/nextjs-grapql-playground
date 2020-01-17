import { createContext, useReducer } from "react";
import { NextPage } from "next";

export const SET_USER = "auth/SET_USER";
export const SET_USER_PROGRESS = "auth/SET_USER_PROGRESS";

export type Progress = Array<{ id: string }>;
export type User = { email: string | null } | null;

type State = { progress: Progress; user: User };
type SetProgressAction = { type: "auth/SET_USER_PROGRESS"; payload: Progress };
type SetUserAction = { type: "auth/SET_USER"; payload: User };
type Action = SetProgressAction | SetUserAction;

const initialState = {
  user: null,
  progress: []
};

export const context: { state: State; dispatch: React.Dispatch<Action> } = {
  state: initialState,
  dispatch: () => {}
};

const Store = createContext(context);

const applySetUserProgress = (state: State, action: SetProgressAction) => ({
  ...state,
  progress: action.payload
});

const applySetAuthUser = (state: State, action: SetUserAction) => ({
  ...state,
  user: action.payload
});

const StateProvider: NextPage = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    (state, action) => {
      switch (action.type) {
        case SET_USER: {
          return applySetAuthUser(state, action);
        }
        case SET_USER_PROGRESS: {
          return applySetUserProgress(state, action);
        }
        default:
          return state;
      }
    },
    initialState
  );

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StateProvider };
