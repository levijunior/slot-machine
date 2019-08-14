import { createActions, createReducer } from "reduxsauce"

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  spinSlot: ["spin"],
  getPrize: ["slots"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  slots: [],
  spin: false,
  prize: false
};

const spin = (state = INITIAL_STATE, action) => ({ 
  ...state, 
  spin: action.spin,
  prize: !action.spin 
})
const prize = (state = INITIAL_STATE, action) => ({ 
  ...state,
  slots: action.slots,
  spin: false,
  prize: false
})


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SPIN_SLOT]: spin,
  [Types.GET_PRIZE]: prize
});
