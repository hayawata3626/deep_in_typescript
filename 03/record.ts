type Person = Readonly<{
  id: number;
  address: string;
  name: string;
}>;

type NumberPerson = Record<keyof Person, number>;

// NumberPerson {
//   id: menubar
//   address: number
//   name: number
// }
