const arr = [1, 2, 1, 6];

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