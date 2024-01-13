import mongoose from "mongoose";
import Person from "./model/Person.js"


mongoose.connect("mongodb://localhost/Person");

 
const person = new Person({
    name: "Evanna",
    age: .5,
  favoriteFoods: ["Pap", "Milk"]
});

// Save the person to the database
person.save()
  .then(person => {
    console.log("Person saved:", person);
  })
  .catch(error => {
    console.error("Error saving person:", error);
  });
