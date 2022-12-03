import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import { applyMiddleware,  legacy_createStore as createStore, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from "./services/reducers";


const userList = [
  {id:1, name: 'Oleg Tinkof'},
  {id:2, name: 'Vasya Vakulenko'},
  {id:3, name: 'Petya Ahtung'},
  {id:4, name: 'Sasha Smirnof'},
  {id:5, name: 'Egor Petrucho'}
]

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App userList={userList} />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
