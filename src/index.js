import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore ,applyMiddleware,combineReducers} from "redux";

import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import CounterReducer from "./components/store/reducers/appMainReducer";



const rootReducer = combineReducers({
  counter: CounterReducer
})
//The created store
const store = createStore(rootReducer,applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
