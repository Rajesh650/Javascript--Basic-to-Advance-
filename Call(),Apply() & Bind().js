const person = {
  fullName : function(city, country){
    console.log(`${this.firstName} ${this.lastName} from ${city} ${country}`);
  }
  
  
}
//  call()

const person1 = { firstName :"Rajesh",lastName :"singh"}
person.fullName.call(person1,"Bihar","India")


// Apply()

const person2 = {firstName :"Devkant",lastName:"..."}
person.fullName.apply (person2,["orissa","India"])

// Bind()

const person3 ={firstName :"chandan",lastName:"sahu"}
let CompleteName = person.fullName.bind(person3,"orissa","India")
CompleteName()