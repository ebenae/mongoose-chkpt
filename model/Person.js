// Person.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
},
  age: {
    type: Number,
    required: true,
  },
  favoriteFoods: [String],
  createdAt: {
    type: Date,
    default: ()=>Date.now(),
  },
});

const Person = mongoose.model("Person", personSchema);

export default Person;
