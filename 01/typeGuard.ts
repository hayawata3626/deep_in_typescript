type A = {
  x: number
}

type B = {
  y: number
}

function doStuff(q: A | B) {
  if('x' in q){
    console.log(q.x)
  } else {
    console.log(q.y)
  }
}

doStuff({x: 4})
doStuff({y: 6})
doStuff({z: 10}) // Error