import React, { createContext, useReducer, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const INITIAL_STATE = {
  motoboys: [],
  loading: false,
  error: null,
};

export const MotoboyContext = createContext(INITIAL_STATE);

const MotoboyReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOTOBOYS_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_MOTOBOYS_SUCCESS":
      return {
        ...state,
        motoboys: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_MOTOBOYS_FAILURE":
      return {
        ...state,
        motoboys: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_MOTOBOY":
      return {
        ...state,
        motoboys: [...state.motoboys, action.payload],
      };
    case "REMOVE_MOTOBOY":
      return {
        ...state,
        motoboys: state.motoboys.filter((motoboy) => motoboy._id !== action.payload),
      };
    default:
      return state;
  }
};

export const MotoboyContextProvider = ({ children }) => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/motoboy"); // Substitua com a URL correta para a sua API

  const [state, dispatch] = useReducer(MotoboyReducer, INITIAL_STATE);

  useEffect(() => {
    if (data) {
      dispatch({ type: "FETCH_MOTOBOYS_SUCCESS", payload: data });
    }
    if (error) {
      dispatch({ type: "FETCH_MOTOBOYS_FAILURE", payload: error });
    }
  }, [data, error]);

  // Funções para adicionar e remover motoboys
  const addMotoboy = (motoboy) => {
    dispatch({ type: "ADD_MOTOBOY", payload: motoboy });
  };

  const removeMotoboy = (motoboyId) => {
    dispatch({ type: "REMOVE_MOTOBOY", payload: motoboyId });
  };

  // Salvar motoboys no localStorage ao adicionar ou remover um motoboy
  useEffect(() => {
    localStorage.setItem("motoboys", JSON.stringify(state.motoboys));
  }, [state.motoboys]);

  return (
    <MotoboyContext.Provider
      value={{
        motoboys: state.motoboys,
        loading: state.loading || loading,
        error: state.error || error,
        dispatch,
        addMotoboy,
        removeMotoboy,
      }}
    >
      {children}
    </MotoboyContext.Provider>
  );
};