interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}

const point2D: Point2D = {x: 0, y: 10}
const point3D: Point3D = {x: 0, y: 10, z: 20}
function iTakePoint2D(point: Point2D) {
  console.log(point)
}

iTakePoint2D(point2D)
iTakePoint2D(point3D)
iTakePoint2D({x: 0}) // error