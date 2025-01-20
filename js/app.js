// let person1 = {}
// console.log(person1);


// let person2 = {
//     name: "sneha"
// }

// function person(n){
//     this.name = n
// }

// let person3 = new person("abc")
// console.log(person3);

// console.log(person2.hasOwnProperty("age"));




function person(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a

    this.prototype.fullname = function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

let person1 = new person("sneha", "b", 20)
console.log(person1);
