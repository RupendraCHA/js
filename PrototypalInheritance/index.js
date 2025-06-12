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