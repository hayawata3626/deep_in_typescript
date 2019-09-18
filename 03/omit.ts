type Person = Readonly<{
  id: number;
  address: string;
  name: string;
}>;

type OmitPerson = Omit<Person, "id">;
const omitPerson1: OmitPerson = { id: 1, name: "hoge", address: "Tokyo" }; // Error
const omitPerson2: OmitPerson = { name: "hoge", address: "Tokyo" }; // OK
