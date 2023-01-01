import { CHANGE_FORM, RESET_FORM, SET_FORM } from "./actions";
const initialState = { description: "", price: "" };

export default function changeFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_FORM:
      return { ...initialState };
    case SET_FORM:
      return { ...action.payload };
    default:
      return state;
  }
}
