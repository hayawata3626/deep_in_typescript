type Person = Readonly<{
  id: number;
  address: string;
  name: string;
}>;

type NameOfPerson = Pick<Person, "name">;

const nameOfPerson1: NameOfPerson = { id: 1, name: "hoge", address: "Tokyo" }; // Error
const nameOfPerson2: NameOfPerson = { name: "hoge" }; // OK

type AddressAndName = Pick<Person, "address" | "name">;
const addressAndName1: AddressAndName = {
  id: 1,
  name: "hoge",
  address: " Tokyo"
}; // Error
const addressAndName2: AddressAndName = { name: "hoge", address: " Tokyo" }; // OK
