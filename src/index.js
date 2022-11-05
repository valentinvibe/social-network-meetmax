import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const userList = [
  {id:1, name: 'Oleg Nariman'},
  {id:2, name: 'Vasya Suleman'},
  {id:3, name: 'Petya Ahtung'},
  {id:4, name: 'Sasha Veter'},
  {id:5, name: 'Egor Petrucho'}
]

const messagesArray = [
  {id:1, messages: [
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '22:51'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '22:51'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '22:51'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '22:51'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '22:51'}
  ]},
  {id:2, messages: [
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:15'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:15'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:15'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:15'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:15'}
  ]},
  {id:3, messages: [
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:17'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:17'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:14'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:24'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:47'}
  ]},
  {id:4, messages: [
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:17'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:17'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:14'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:24'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:47'}
  ]},
  {id:5, messages: [
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:17'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:17'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:14'},
    {isOwner:true, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:24'},
    {isOwner:false, text: 'sdfd sd sdf ds ds d df sdfjkshdfk gksgf jsh fd', timeStamp: '21:47'}
  ]},
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App userList={userList} messagesArray={messagesArray}/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
