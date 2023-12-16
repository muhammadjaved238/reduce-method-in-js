let number=prompt("enter the number")
let array=[];
for(let i=1; i<=number; i++){
    array[i-1]=i
}
console.log(array)
 let output=array.reduce((prevsious,currentvalue)=>{
    return prevsious + currentvalue
}
)
console.log(output)