// Async Await:
// function abcd(){
//   fetch('https://randomuser.me/api')
// .then(function(raw){
//       return raw.json();
//   })
// .then(function(data){
//       console.log(data);
//   })
// }
// abcd();
async function abcd1() {
    let raw = await fetch('https://randomuser.me/api/');
    let data1 = await raw.json;
    console.log(data1);
}
abcd1();
export {};
