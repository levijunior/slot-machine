import { createActions, createReducer } from "reduxsauce"

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  spinSlot: ["spin"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  slots: [],
  spin: false,
};

const spin = (state = INITIAL_STATE, action) => ({ ...state, spin: action.spin })


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SPIN_SLOT]: spin,
});
