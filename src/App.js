import React, { useState } from "react";

import "./styles.css";

var foodDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🥚": "Egg",
  "🧀": "Cheese",
  "🍖": "Meat"
};
var foodEmojis = Object.keys(foodDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we cant find it in our database";
    }
    setMeaning(meaning);
  }
  function foodClickHandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> inside out </h1>
      <input onChange={foodInputHandler} />
      <h2> {meaning} </h2>
      <h3> food emojies we know </h3>
      {foodEmojis.map(function (food) {
        return (
          <span onClick={() => foodClickHandler(food)} 
          style={{fontSize: "2rem", padding: "0.5rem", cursor: "pointer"}}
          key={food}>
            {food}
          </span>
        );
      })}
    </div>
  );
}
