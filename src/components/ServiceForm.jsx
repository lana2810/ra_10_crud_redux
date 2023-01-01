import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeForm,
  resetForm,
  addService,
  removeServiseEdited,
} from "../redux/actionsCreators";

function ServiceForm() {
  const { description, price } = useSelector((state) => state.changeForm);
  const { itemEdit } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(changeForm(name, value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(description, price));
    dispatch(resetForm());
    dispatch(removeServiseEdited());
  };
  const handleReset = () => {
    if (itemEdit) {
      dispatch(addService(itemEdit.description, itemEdit.price));
    }
    dispatch(resetForm());
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="description" onChange={handleChange} value={description} />
      <input name="price" onChange={handleChange} value={price} />
      <button type="submit">Save</button>
      <button type="reset" onClick={handleReset}>
        Cancel
      </button>
    </form>
  );
}

export default ServiceForm;
