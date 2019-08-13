import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  startSlot: ["slot"],
});

/**
 * Handlers
 */
const INITIAL_STATE = [];

const start = (state = INITIAL_STATE, action) => [
  ...state,
  { slot: action.slot }
];

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.START_SLOT]: start,
});
