interface Foo {
  foo: string
}

function foo(sample: Foo): Foo {
 return sample
}

console.log(foo({foo: "ほげほげ"}))
