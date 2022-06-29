const arr = [3, 6, 6];
let price
let aaa = false
for (let i = 0; i < arr.length; i++) {
    const dice1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        const dice2 = arr[j];
        for (let k = i + 2; k < arr.length; k) {
            const dice3 = arr[k];

            if (dice3 === dice1 && dice1 === dice2) {
                price = 1000 + (arr[i] * 1000);
                console.log(price)
                break;
            } else if (dice3 === dice2 || dice3 === dice1 || dice2 === dice1 ){
                price = 1000 + (arr[i] * 100)
                console.log(price)
                break;
            } else {
                price = Math.max(...arr)*100
                console.log(price)
                break;
            }
        }
        break;
    }
    break
}

/* 
const arr = [1, 2, 1];

let dupYn = false;
for(let i = 0; i < arr.length; i++) {
  const currElem = arr[i];
  
  for(let j = i+1; j < arr.length; j++) {
    if(currElem === arr[j]) {
      dupYn = true;
      console.log(arr[i],arr[j])
      if(dupYn = true){
      arr.sort()
      }
      break;
    }
  }
  
  if(dupYn)  {
    break;
  }
}

console.log("DupYn : " + dupYn);
console.log(arr); 
*/