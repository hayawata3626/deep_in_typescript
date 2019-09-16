type Person = Readonly<{
  id: number
  name: string
}>

type ReadOnlyPerson<T> = Readonly<{
  [P in keyof Person]: Person[P]
}>
