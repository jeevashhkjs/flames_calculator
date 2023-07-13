let boxes = document.querySelectorAll(".box");

let targetNumber = [1,2,3]

let tarNumber = 0;
let count = 0;
let boxCnt = -1;
let task = setInterval(()=>{
    count++
    boxCnt++
    news(count);
    if(boxCnt == boxes.length){
        boxCnt = 0
    }
    boxes[boxCnt].classList.add("active")
    setTimeout(() => {
        if(count <= targetNumber[tarNumber] && count != targetNumber[tarNumber]){
            boxes[boxCnt].classList.remove("active")
        }
        else{
            boxes[boxCnt].classList.add("shadow")
        }
    }, 400);
},600)

function news(){
    if(count > targetNumber[tarNumber] && tarNumber < targetNumber.length-1){
        tarNumber++
        count = 1
    }
    if(count == targetNumber[targetNumber.length-1] && tarNumber == targetNumber.length-1){
        clearInterval(task)
    }
}