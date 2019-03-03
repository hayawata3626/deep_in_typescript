function reverse<T>(items: T[]): T[] {
  let toreturn = [];
  for(let i = items.length -1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn;
}

let sample = [1, 2, 3];
let reversed = reverse(sample);
console.log(reversed);

reversed[0] = '1'; // Error!
reversed = ['1', '2']; // Error!

reversed[0] = 1 // Okay
reversed = [1, 2] // Okay