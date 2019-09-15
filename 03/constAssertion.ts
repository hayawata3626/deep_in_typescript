const one = "one"
const two = "two"
const three = "three"

const obj = {
  one,
  two,
  three
}

obj[one] = "two" // OK!
obj[two] = "one" // OK!
obj[three] = "zero" // OK!

const four = "four" as const
const fifth = "fifth" as const

const obj2 = {
  four,
  fifth
}

obj2[four] = "one" // Error!!
obj2[fifth] = "four" // Error!!

