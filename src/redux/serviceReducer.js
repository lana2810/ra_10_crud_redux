import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  SET_EDITED_ITEM,
  REMOVE_EDITED_ITEM,
  FILTER_SERVICE,
} from "./actions";
import { nanoid } from "nanoid";

const initialState = {
  items: [
    { id: nanoid(), description: "task1", price: 1200 },
    { id: nanoid(), description: "task2", price: 2200 },
  ],
  itemEdit: null,
  filter: "",
};

export default function serviceReducer(state = initialState, action) {
  if (action.payload) {
    const { id, description, price } = action.payload;
    switch (action.type) {
      case ADD_SERVICE:
        return {
          ...state,
          items: [
            ...state.items,
            { description, price: Number(price), id: nanoid() },
          ],
        };
      case REMOVE_SERVICE:
        return {
          ...state,
          items: state.items.filter((service) => service.id !== id),
        };
      case SET_EDITED_ITEM:
        return {
          ...state,
          itemEdit: { id, description, price },
        };
      case REMOVE_EDITED_ITEM:
        return {
          ...state,
          itemEdit: null,
        };
      case FILTER_SERVICE:
        const { text } = action.payload;
        return {
          ...state,
          filter: text,
        };
      default:
        return state;
    }
  } else {
    return state;
  }
}
