type Person = Readonly<{
  id: number;
  age: number;
}>;

type Tree = Readonly<{
  age: number;
}>;

let person: Person = { id: 1, age: 20 };
let tree: Tree = { age: 1000 };

tree = person;
