type Person = Readonly<{
  id: number
  name: string
  address: string
}>

type IsPerson<T> = T extends Person ? true : false
type a = IsPerson<{ id: 1, name: "joy", address: "Tokyo" }> // true
type b = IsPerson<"monster"> // false
