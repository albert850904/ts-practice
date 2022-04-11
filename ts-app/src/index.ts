const hello = "world";

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

// create object
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Kairu",
  age: 25,
  getMessage() {
    return "Hello" + user.name;
  },
};

const user2: UserInterface = {
  name: "Isabel",
  getMessage() {
    return "Hello" + user2.name;
  },
};

// unions
let errorMessage: string | null = null;

// alias
type ID = string;
type PopularTag = string;
type maybeExistTag = PopularTag | null; // union, either popularTag 或是 null
const popularTags: PopularTag[] = ["a", "b"];

console.log(getFullName("Kairu", "Cheng"));

// void
const doSomething = (): void => {
  console.log("do something");
};

// never
const doNever = (): never => {
  console.log("never");
  throw new Error("error");
};

// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny; // 我們可以assign any 給任何人
let s2: string = vUnknown as string; // 不確定的值不能assign 給確定的type,

// as 是type assertion，把unknown 轉換成string了
let pageNumber: string = "1";
let numericageNumber: number = pageNumber as unknown as number;

// DOM Element
const someElement = document.querySelector(".foo") as HTMLInputElement; // 把他從generic Element 轉換成 html input element
console.log(someElement.value);

// Listener
someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

// Classes
interface UserInterfaceV2 {
  // 代表class 必須要實作此function
  getFullName(): string;
}

class User implements UserInterfaceV2 {
  private firstName: string; // 外部不能access到
  protected lastName: string;
  readonly unchangeableName: string;
  static readonly maxAge = 120;

  // 建立User instance時，可以從外部提供parameter
  constructor(firstName: string, lastName: string) {
    // 把外部傳進來的值，設定給class 內部的property
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableName = firstName + " " + lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// init user classes
const user1 = new User("kairu", "cheng");
console.log(user1.getFullName());

// inheritence
class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const admin1 = new Admin("admin", "1");
console.log(admin1);

// Generic
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const userG: UserInterface = {
  name: "kairu",
  getMessage() {
    return "Hello mother fucker, " + user.name;
  },
};

const result = addId<UserInterface>(userG);
console.log(result);

// generic interface
interface GenericUserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const userGen: GenericUserInterface<{ meta: string }, string> = {
  name: "Isabel",
  data: {
    meta: "beautiful",
  },
  meta: "female",
};

const userGen2: GenericUserInterface<string[], boolean> = {
  name: "Keth",
  data: ["1", "2", "3"],
  meta: false,
};

// ts enum
// const statuses = {
//   notStarted: 0,
//   inProgress: 1,
//   done: 2
// }

enum StatusEnum {
  NotStarted = "notStarted",
  Inprogress = "inProgress",
  Done = "done",
}

interface TaskInterface {
  id: string;
  status: StatusEnum;
}
