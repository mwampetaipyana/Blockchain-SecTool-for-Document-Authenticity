// store.js
import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
  connectedAccount: '',
  contract: null,
};

const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState(initialState);

export { useGlobalState, getGlobalState, setGlobalState };
