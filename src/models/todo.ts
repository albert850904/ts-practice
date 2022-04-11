// 描寫 todo 長怎樣
// 可以是Class同時也可以是Type
// 簡而言之就是名為Todo的Type，而他是一個class object
class Todo {
  // 一般JS就不會有這裡的東西
  id: string;
  text: string;

  // 確保兩個type可以接到值
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
