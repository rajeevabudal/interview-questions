class person {
    constructor(firstName, lastname){
    firstName =  this.firstName;
    lastname = this.lastname;
    }
    getDetails(){
        return this.firstName + " " + this.lastname;
    }
}

const person1 = new person();
person1.firstName = "Rajeeva"
person1.lastname = "B p"

console.log(person1.getDetails());
