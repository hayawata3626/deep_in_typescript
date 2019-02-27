interface Name {
  first: string;
  second: string
}

var name: Name;
name = {
  first: "John",
  second: "Doe"
}

name = {
  first: "John"
}
// Error : `second` is missing

name = {
  first: "John",
  second: 1337
}
// Error : `second` is the wrong type
