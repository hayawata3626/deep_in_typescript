var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
function iTakePoint2D(point) {
    console.log(point);
}
iTakePoint2D(point2D);
iTakePoint2D(point3D);
// iTakePoint2D({x: 0}) // error
var foo = 123;
foo = '456'; // Error: cannot assign a `string` to a `number`
