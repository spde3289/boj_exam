const arr = [1, 3, 2,4];
let price
for (let i = 0; i < arr.length; i++) {
    const dice1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
        const dice2 = arr[j];
        /* if(currElem === arr[j]) {
          dupYn = true;
          console.log(arr[i],arr[j])
          if(dupYn = true){
          arr.sort()
          } */

        for (let k = i + 2; k < arr.length; k) {
            const dice3 = arr[k];
            if (dice3 === dice1 && dice1 === dice2) {
                price = 1000 + (arr[k] * 1000);
                console.log(arr,"1")
            } else if (dice3 === dice2 || dice3 === dice1 || dice2 === dice1){
                price = 1000 + (arr[k] * 100)
                console.log(arr,"2")
                console.log(arr[i],arr[j],arr[k])
            } else {
                price = Math.max(...arr)*100
                console.log(arr,"3")
            }
            console.log(price)
            break;

        }

    }
}

