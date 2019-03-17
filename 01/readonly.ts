function foo(config: {
  readonly bar: number,
  readonly bas: number
}) {
  console.log(config.bar)
  console.log(config.bas)
}

let config = { bar: 123, bas: 123 };
foo(config);
// You can be sure that `config` isn't changed 🌹


type Person = {
  readonly age: number
  readonly name: string
}

const person: Person = {age: 29, name: "二郎"}
person.age =24 // Error