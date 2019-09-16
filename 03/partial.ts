type Person = Readonly<{
  id: number
  name: string
}>

type PartialPerson = Partial<Person>

// const person: Person = { id: 1 } // Error
const person2: PartialPerson = { id: 2 } // OK
