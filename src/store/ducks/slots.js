import { createActions, createReducer } from "reduxsauce"
import { getPrizeValue } from '../../helpers'

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
  slots: [],
  spin: action.spin,
  prize: !action.spin 
})
const prize = (state = INITIAL_STATE, action) => ({ 
  ...state,
  slots: action.slots,
  spin: false,
  prize: false,
  value: getPrizeValue(action.slots)
})


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.SPIN_SLOT]: spin,
  [Types.GET_PRIZE]: prize
});
