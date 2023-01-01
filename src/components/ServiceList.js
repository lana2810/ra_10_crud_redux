import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeService,
  setForm,
  setServiseEdited,
} from "../redux/actionsCreators";

function ServiceList() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.service);
  console.log(filter);
  const hadleRemove = (id) => {
    dispatch(removeService(id));
  };

  const hadleEdit = (id, description, price) => {
    dispatch(setServiseEdited(id, description, price));
    dispatch(removeService(id));
    dispatch(setForm(description, price));
  };
  const filteredItems =
    filter.length === 0
      ? items
      : items.filter((item) => item.description.includes(filter));
  return (
    <ul>
      {filteredItems.map((it) => (
        <li key={it.id}>
          {it.description} {it.price}
          <button onClick={() => hadleEdit(it.id, it.description, it.price)}>
            &#9998;
          </button>
          <button onClick={() => hadleRemove(it.id)}>&#10008;</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
