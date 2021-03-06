import React from "react";
import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import Person from "./components/Person";
import ToggleLight from "./components/ToggleLight";

const personList = [
  {
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
  },
  {
    id: 3,
    name: "Jack",
    age: 20,
  },
  {
    id: 4,
    name: "Jack",
    age: 20,
  },
];

const App = () => {
  return (
    // <div className="container">
    //   {personList.map((person, index) => (
    //     <Person key={person.id} name={person.name} age={person.age} />
    //   ))}
    // </div>
    // <Counter />
    // <ToggleLight />
    <FormExample />
  );
};

export default App;
