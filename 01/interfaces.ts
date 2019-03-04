interface Point {
  x: number; y:number
}

class Mypoint implements Point {
  x: number; y: number;
}

interface Point2 {
  x: number
  y:number;
  z:number;
}

class MyPoint2 implements Point2{ // ERROR: missing member z
  x: number;
  y: number;
}