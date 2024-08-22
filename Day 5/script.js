// for(i=1;i<=10;i++){
//     console.log(i);
// }
//array =[1,2,3,4,5]
//array.forEach(element => {          // forEach ( =>);
//  if(element>=2){
// console.log(element)
//}
//});

// swaping two number
// let a=20;
// let b=30;
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log("After swaping ",a,b);

// program to find factorial of 10
// let number =5;
// let fact=1;
// for(i=1;i<=number;i++){
//     fact *=i;
// }
// console.log('Factorial of',fact );

// let date = new Date();
// switch (date.getDay()) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today Is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today Is Thursday");
//     break;
//   case 5:
//     console.log("Today Is Friday");
//     break;
//   case 6:
//     console.log("Today Is Saturday");
//     break;
//   case 7:
//     console.log("Today Is Sunday");
//     break;
// }

// let a="My Name is Anand Kumar Kushwaha"
// console.log(a.length)   // 4
// console.log(a.charAt(1))   // m
// console.log(a.toLocaleLowerCase())
// console.log(a.toUpperCase())

// each first word in upper case in string
// let str="my name is anand kumar kushwaha"
// let words = str.split(" ");
// let capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// console.log(capitalizedWords.join(" "));

// find the missing of an arra
// let arr=[1,2,3,5,6,7,8,9,10]

// let missing=[]

// for(let i=1;i<arr.length;i++){
//     if(arr[i]!=i){
//         missing.push(i)
//     }
//     }
//     console.log(missing)

// remove duplicate no in array and store in another array

// let arr=[1,2,2,3,4,4,5,6]

// let uniqueArr = [...new Set(arr)];       //... spred = join multiple array
// console.log(uniqueArr)

// find the missing number of an array and print only missing number

// let array=[1,2,3,4,5,6,7,8,10]
// let missingNum=[]
// for(let i=1;i<=array.length;i++){
//     if(!array.includes(i)){
//         missingNum.push(i)
//     }
// }
// console.log(missingNum)

// Each First Word capt

// let a="i am anand kumar"
// let b=a.split(" ");
// let c=[];
// b.forEach((d)=>{
//     c.push(d.charAt(0).toUpperCase()+d.slice(1))
// });
// console.log(c.join(" "))

// missing number
// let arra=[1,2,4,5,6,7,9,12];
// let missing=null;
// let b=[]
// for(let i=1;i<=arra.length;i++){
//     const diff=arra[i]-arra[i-1];
//     if(diff>1){
//         missing=arra[i-1]+1;
//         b.push(missing)
//     }
// }
// console.log(b);

// remove even and odd number in an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = [];
// let odd = [];
// for (let i = 1; i <= arr.length; i++) {
//   if (i % 2 == 0) {
//     even.push(i);
//   } else {
//     odd.push(i);
//   }
// }
// console.log(even);
// console.log(odd);

// reverse a array

// let arr1 = [1, 2, 3, 4, 5];
// let reversed = arr1.reverse();
// console.log(reversed);

// shorting method
// .short((a,b)=>a-b) assending
// .short((a,b)=>b-a) descending

// let str=['Anand',"rohn","ram" ,"ramua"]
// let answer=str.filter((str)=>str.includes('a'))
// let ans=str.filter((str)=>str.length>=5)
// console.log(answer)
// console.log(ans)


// let people=[{name:"Anand", age:19,
    

// }]
// let b=people.filter((people)=>people.age>=10)
// console.log(b)
// let people=[{name:"Anand", age:19,
// }]
// let b=people.filter((people)=>people.name.toUpperCase())
// console.log(b)

let a=[]
function add(item){
    a.push(item);   
}
add("Aman")
add("Anand")
add("Ajit")
add("Ramesh")
console.log(a)

let b=[]

function remove(item){
    let index=a.indexOf(item);
    if(index>-1){
        a.splice(index,1);
    }
}
remove("Ajit")
console.log(a)
