import { useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Store, SET_USER_PROGRESS, SET_USER, User } from "store";

const GET_USER_PROGRESS = gql`
  query {
    progress {
      id
    }
  }
`;

export default (): [User, () => void] => {
  const { dispatch, state } = useContext(Store);
  const [getUserProgress] = useLazyQuery(GET_USER_PROGRESS, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      dispatch({ type: SET_USER_PROGRESS, payload: data?.progress });
    },
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    dispatch({
      type: SET_USER,
      payload: userData ? { ...JSON.parse(userData), cached: true } : null,
    });

    auth.onAuthStateChanged(async (user: auth.FirebaseUser) => {
      let payload = null;
      if (user) {
        const token = await auth.getIdToken();

        payload = {
          email: user.email,
          cached: false,
        };

        getUserProgress();
      }

      dispatch({ type: SET_USER, payload });

      localStorage.setItem(
        "user",
        JSON.stringify({ email: payload?.email || null })
      );
    });
  }, []);

  const signOut = async () => {
    await auth.doSignOut();
    // TODO: Combine two dispatch calls
    dispatch({ type: SET_USER, payload: null });
    dispatch({ type: SET_USER_PROGRESS, payload: [] });
    localStorage.removeItem("user");
  };

  return [state.user, signOut];
};
