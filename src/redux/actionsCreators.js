import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  FILTER_SERVICE,
  CHANGE_FORM,
  RESET_FORM,
  SET_FORM,
  SET_EDITED_ITEM,
  REMOVE_EDITED_ITEM,
} from "./actions";

export function addService(description, price) {
  return { type: ADD_SERVICE, payload: { description, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function setForm(description, price) {
  return { type: SET_FORM, payload: { description, price } };
}

export function changeForm(name, value) {
  return { type: CHANGE_FORM, payload: { name, value } };
}

export function resetForm() {
  return { type: RESET_FORM, payload: {} };
}

export function setServiseEdited(id, description, price) {
  return { type: SET_EDITED_ITEM, payload: { id, description, price } };
}
export function removeServiseEdited() {
  return { type: REMOVE_EDITED_ITEM, payload: {} };
}

export function setFilterService(text) {
  return { type: FILTER_SERVICE, payload: { text } };
}
