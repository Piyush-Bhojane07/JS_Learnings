
  let arr = ["piyush", "sarthak", "piyush", "sarthak"];

function forLoop () {
    for(let i = 0; i < arr.length; i++){
        console.log(`arr[${i}] => ${arr[i]}`)
    }
}

// forLoop()

function forOf () {
    for(let ele of arr){
        console.log(`${ele}`);
    }
}

forOf()