// let boxes = document.querySelectorAll(".box");

// let targetNumber = [3,5]

// let tarNumber = 0;
// let count = 0;
// let boxCnt = -1;
// let task = setInterval(()=>{
//     count++
//     boxCnt++
//     news(count);
//     if(boxCnt == boxes.length){
//         boxCnt = 0
//     }
//     boxes[boxCnt].classList.add("active")
//     setTimeout(() => {
//         if(count <= targetNumber[tarNumber] && count != targetNumber[tarNumber]){
//             boxes[boxCnt].classList.remove("active")
//         }
//         else{
//             boxes[boxCnt].classList.add("shadow")
//         }
//     }, 400);
// },600)

// function news(){
//     if(count > targetNumber[tarNumber] && tarNumber < targetNumber.length-1){
//         tarNumber++
//         count = 1
//     }
//     if(count == targetNumber[targetNumber.length-1] && tarNumber == targetNumber.length-1){
//         clearInterval(task)
//     }
// }



// flames login


// function replaceAt(string, index, replace) {
//     return string.slice(0, index) + replace + string.slice(index + 1);
// }

// let a = "jeeva"
// let b = "srija"

// for (i=0;i<a.length;i++){
// for(j=0;j<b.length;j++){
//   if(a[i]==b[j]){
//     a=replaceAt(a,i,'*');
//     b=replaceAt(b,j,'*');
//   }
// }
// }

// count = 0

// let filerNames = [...a,...b]

// for(let x=0;x<filerNames.length;x++){
// if(filerNames[x] != "*"){
//   count++
// }
// }

// let position = 0;
// let flms = "flames";
// let cntFlms = flms.length

// for (var s = cntFlms; s > 1; s--) {
//   position = (count + position) % s
//   if(position == 0){
//     position = s - 1
//   }
//   else{
//     position--
//   }
// flms = replaceAt(flms,position,"")
// }

// switch(flms){
// case "f": console.log("friend")
//   break;
// case "l": console.log("lover")
//   break;    
// case "a": console.log("afair")
//   break;
// case "m": console.log("marriage")
//   break;
// case "e": console.log("enemy")
//   break;
// case "s": console.log("sister")
//   break;

// default: console.log("something wrong")

// }

// let array = [5, 0, 1, 0, 1]
// let output = [];
// let flames = ["f", "l", "a", "m", "e", "s"];

// let count = 0;
// function recur(){
    
//     for(let i=0;i<flames.length;i++){
//         if(array[1] != i){
//             output.push(flames[i])
//         }
//     }
    
//     count++
//     if(count < 4){
//         recur()
//     }
// }
// recur()

//get word count

let a = "jeeva"
let b = "mahalakshmi"

function replaceAt(string, index, replace) {
    return string.slice(0, index) + replace + string.slice(index + 1);
}

for (i=0;i<a.length;i++){
for(j=0;j<b.length;j++){
  if(a[i]==b[j]){
    a = replaceAt(a,i,'*');
    b = replaceAt(b,j,'*');
  }
}
}

let filerNames = [...a,...b];
let wordCnt = filerNames.filter((char)=>char != "*").length;

// flames logic get a single letter in a array

let recurCnt = 1;

let array1 = [];
let array2 = [];

let flm = ['f','l','a','m','e','s']
let wcn = wordCnt;

function recurFc(){

    recurCnt++

    let count = 0

    for(let i=1;i<= wcn ;i++){
        count++
        if(count > flm.length){
            count = 1
        }
        console.log(count)
        if(i == wcn){
            for(let i=0;i<flm.length;i++){
                if(i>=0 && i<count-1){
                    array1.push(flm[i])
                }
                else if(i>count-1 && i<flm.length){
                    array2.push(flm[i])
                }
            }
        }
    }

    let filterArray = array2.concat(array1)

    flm = filterArray
    array1.length = 0;
    array2.length = 0;

    if(recurCnt < 2){
        recurFc()
    }
}
recurFc()

switch (flm[0]) {
    case "f": console.log("friend")
        break;

    case "l": console.log("love")
        break;
    
    case "a": console.log("affection")
        break;

    case "m": console.log("marraige")
        break;
    
    case "e": console.log("enemy")
        break;

    case "s": console.log("sister")
        break;

    default:
        console.log("sorry")

}