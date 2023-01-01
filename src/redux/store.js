import { combineReducers, compose, legacy_createStore } from "redux";
import serviceReducer from "./serviceReducer";
import changeFormReducer from "./changeFormReducer";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
function configureStore() {
  return legacy_createStore(
    combineReducers({
      service: serviceReducer,
      changeForm: changeFormReducer,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
}

export default configureStore;
