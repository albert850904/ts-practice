"use strict";
exports.__esModule = true;
require("./App.css");
var NewRodo_1 = require("./components/NewRodo");
var Todos_1 = require("./components/Todos");
var todos_context_1 = require("./store/todos-context");
function App() {
    // const todos = [
    //   // Todo 當作是class object使用
    //   new Todo("Learn Something"),
    //   new Todo("Learn Something Else"),
    // ];
    // 如果直接設定為 [] 當作是default狀態，那todos就永遠不能有值
    // useState是generic function，我們要告訴useState這裏面的state會是怎樣
    return (<todos_context_1["default"]>
      <NewRodo_1["default"] />
      <Todos_1["default"] />
    </todos_context_1["default"]>);
}
exports["default"] = App;
