let a; // ou let a = 5
if (a === 5) {
  const b = 2;
  const aux = a + b;
  console.log(aux); // 7
} else {
  const aux = 6;
  console.log("aux " + aux); // aux 6
}
let b = 3;
const c = b;
console.log(c); // 3
