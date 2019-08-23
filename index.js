const per = require('./libs/pbs/person_pb');

let person = new per.Person();
/*
var data={
	name:"john, doe",
	id:12345,
	email:'john.doe@example.com',
	phone:[{number:'11111111', type:0}, {number:'111112222', type:1}]
}*/

//on Sender side:Send Data over the wire
person.setName("john, doe")
person.setId("12345");
person.setEmail("john.doe@example.com");
let bufPerson = person.serializeBinary()
console.log("=========Data sent========");

console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");

//on Receiver side: Receive Data over the wire
console.log("=========Data Received========");
let desPerson = per.Person.deserializeBinary(bufPerson);
const personObj = desPerson.toObject();
console.log({personObj});
console.log(desPerson.getName())
console.log(desPerson.getId())
console.log(desPerson.getEmail())
