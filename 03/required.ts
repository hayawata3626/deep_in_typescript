type Person = Readonly<{
  id?: number;
  name: string;
}>;

type RequiredPerson = Required<Person>;

const person1: Person = { name: "hoge" }; // OK
const person2: RequiredPerson = { name: "fuga" }; // Error
const person3: RequiredPerson = { id: 1, name: "fuga" }; // OK
