// To work with for..of loop the object must have a special method defined for the key [symbol.iterator] 
// string , array --> iterables
// numbers , objects --> non iterables
// In order to be iterable, an object must implement the 
// @@iterator method, meaning that the object
// must have a property with a @@iterator key
//  which is available via constant Symbol.iterator:
// for...of loop , of --> next()


const arr = ['mumbai','hyderabad', ' chennai', ' delhi'];
console.log(arr)
// custom function
function iterator(arr){
    let nextIndex = 0;
    return {
        next : function(){
            if(nextIndex<arr.length){

              return  {
                value : arr[nextIndex++],
                done : false
                }
            }
            else 
            {
                return 
                {
                    done : true
                }
            }

        }
    }
}
// using the iterators
const it = iterator(arr)
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());
// console.log(it.next().value);
//built in iterator
const arrit = arr[Symbol.iterator]();
console.log(arrit.next());
console.log(arrit.next());
console.log(arrit.next());
console.log(arrit.next());
console.log(arrit.next());
//objects can be iterated by for..in loop and for..each 
//loop by implementing the keys values and entries methods
let my = {
    title :'bollywood',
    videolength :15 ,
    name:"kkr",
    description : " this it this",
    creator : "arijits singh",
    copyrights : "Eros now",
    lyrics : "javed ali"
}