// class person{
//     constructor(n, a){
//         this.name = n  
//         this.age = a      
//     }
//     sayHi(){
//         console.log("hiiiiiiiiii");
        
//     }

//     static sproperty = "some"

//     static hello(){
//         console.log("hello");
//     }
// }

// let person1 = new person("sneha", 20);
// person1.sayHi()

// console.log(person1);

// person.hello()

// console.log(person.sproperty);




class emp{
        constructor(){
        console.log("emp called");
        
    }
}
class manager extends emp{

}

let mng1 = new manager()

console.log(mng1);
