/* IF...ELSE */
function test(z) {
   let result;
   if (z > 0) {
     result = 'Positive';
   } else {
     result = 'Negative';
   }
   return result;
 }
console.log(test(-5));
console.log(test(5));

/* Nested If */
let umur = 80;
let status = 'Pensiun';
if (status == 'Pensiun') {
   if (umur >= 80) {
     console.log('Anda Sangat Muda???');
   }
}