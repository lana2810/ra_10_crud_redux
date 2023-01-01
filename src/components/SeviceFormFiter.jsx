import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterService } from "../redux/actionsCreators";

function ServiceFormFilter() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const { value } = target;
    setText(value);
    dispatch(setFilterService(value));
  };
  return (
    <div>
      <label htmlFor="filter">Поиск</label>
      <input id="filter" name="filter" onChange={handleChange} value={text} />
    </div>
  );
}

export default ServiceFormFilter;
