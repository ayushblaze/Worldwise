/* eslint-disable */
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch(action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      throw new Error("Unknown Action :(");
  }
}

const FAKE_USER = {
  name: "Ayush",
  email: "ayush@worldwise.com",
  password: "qwerty",
  avatar: "https://i.ibb.co/0js20QcW/channelicon.jpg",
};

function AuthProvider({ children }) {
  const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthProvider");

  return context;
}

export { AuthProvider, useAuth };