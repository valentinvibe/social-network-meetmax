import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const userList = [
  {id:1, name: 'Oleg Tinkof'},
  {id:2, name: 'Vasya Vakulenko'},
  {id:3, name: 'Petya Ahtung'},
  {id:4, name: 'Sasha Smirnof'},
  {id:5, name: 'Egor Petrucho'}
]

const messagesArray = [
  {id:1, messages: [
    {isOwner:true, text: 'Что,  Мансур,  не жарко теперь тебе?', timeStamp: '22:51'},
    {isOwner:false, text: 'Спрашиваю, не жарко ему теперь?', timeStamp: '22:51'},
    {isOwner:false, text: 'Какой полк?', timeStamp: '22:51'},
    {isOwner:true, text: 'Тысяча тридцать четвертый.', timeStamp: '22:51'},
    {isOwner:true, text: 'Вези дальше. Тут тысяча двадцать шестой.', timeStamp: '22:51'}
  ]},
  {id:2, messages: [
    {isOwner:true, text: 'Какая санрота?', timeStamp: '21:15'},
    {isOwner:false, text: 'Тысяча тридцать шестая.', timeStamp: '21:15'},
    {isOwner:false, text: 'Значит, наша! Принимай тяжелораненого!', timeStamp: '21:15'},
    {isOwner:true, text: 'Сколько фрицев в котле?', timeStamp: '21:15'},
    {isOwner:false, text: 'Тысяч сорок.', timeStamp: '21:15'}
  ]},
  {id:3, messages: [
    {isOwner:false, text: 'Чем же он отравился?', timeStamp: '21:17'},
    {isOwner:true, text: 'А вон, видишь, что-то из тех бутылей выпил.', timeStamp: '21:17'},
    {isOwner:false, text: 'Ну что, Мансур, как дела?', timeStamp: '21:14'},
    {isOwner:true, text: 'Фашисты прорвали оборону.', timeStamp: '21:24'},
    {isOwner:false, text: 'Так а что мы с тобой сидим?!', timeStamp: '21:47'}
  ]},
  {id:4, messages: [
    {isOwner:false, text: 'Куда их?', timeStamp: '21:17'},
    {isOwner:true, text: 'В Гумрак', timeStamp: '21:17'},
    {isOwner:false, text: 'Комсорг, а не против, если еще по сто?', timeStamp: '21:14'},
    {isOwner:true, text: 'Можно', timeStamp: '21:24'},
    {isOwner:false, text: 'Где брали-то?', timeStamp: '21:47'}
  ]},
  {id:5, messages: [
    {isOwner:false, text: 'Спортсмен?', timeStamp: '21:17'},
    {isOwner:true, text: 'Ага!', timeStamp: '21:17'},
    {isOwner:false, text: 'Во-первых, не "ага", а "так точно"...', timeStamp: '21:14'},
    {isOwner:true, text: 'Виноват,  товарищ  капитан.', timeStamp: '21:24'},
    {isOwner:false, text: 'Во-вторых, какой вид спорта?', timeStamp: '21:47'}
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
