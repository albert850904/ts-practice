"use strict";
exports.__esModule = true;
// 描寫 todo 長怎樣
// 可以是Class同時也可以是Type
// 簡而言之就是名為Todo的Type，而他是一個class object
var Todo = /** @class */ (function () {
    // 確保兩個type可以接到值
    function Todo(todoText) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
    return Todo;
}());
exports["default"] = Todo;
