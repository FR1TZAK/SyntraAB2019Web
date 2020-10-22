// bubblesort

let inputList = [2, 50, 78, 41, 8, 4, 49, 27, 5, 49, 74, 10, 34, 17, 1 ];

print(inputList);
sort(inputList);
print(inputList);

function sort(list) {
  let n = inputList.length-1; // .length instead of .Length
  console.log(`length: ${n}`);
  
  let swap = true;
  
  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if(inputList[i] > inputList[i+1]) {
        let temp = inputList[i+1];
        inputList[i+1] = inputList[i];
        inputList[i] = temp;
        swap = true;
      }
    }
    n--;
  }
  while (swap == true)

  console.log("------------------------------");
  console.log("SORTED");
  console.log("------------------------------");

}

function print(list) {
  for (let k = 0; k < list.length; k++) {
    console.log(list[k]);
  }
  console.log("------------------------------");
  console.log("PRINTED");
  console.log("------------------------------");
}
