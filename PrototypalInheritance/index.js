let arr = ["Rupendra", "Chiranjeevi"];


let object = {
    name: "Rupendra",
    city: "Ongole",
    age: 25,
    isGraduate: function () {
        console.log(this.name + " " + this.lastname + " completed his graduation")
    }
}

function fun(){
    
}

let object2 = {
    lastname: "Chandaluri"
}

object2.__proto__ = object

Function.prototype.myBind = function (){
    console.log("Random Function")
}

let fun2 = () => {

}

Array.prototype.city = {
    name: "Rupendra",
    age: 25,
    fatherName: "Chiranjeevi",
    mother: "Vasundhara"
}

Object.prototype.object1 = {
    name: "Rupendra",
    city: "Ongole",
    age: 25,
    isGraduate: function () {
        console.log(this.name + " " + this.lastname + " completed his graduation")
    }
}