import { useState } from "react";
import "./styles.css";

var emojiDistnory = {
  "🙂": "smiling",
  "😔": "sad",
  "❤️": "heart",
  "😡": "angry",
  "😭": "crying",
  "😂": "laugh",
  "😍": "smiling face with heart eyes",
  "😗": "kissing face",
  "🙄": "face with rolling eyes"
};
var emojiweKnow = Object.keys(emojiDistnory);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function textChange(event) {
    var input = event.target.value;
    var meaning = emojiDistnory[input];
    if (meaning === undefined) {
      meaning = "enter emoji";
    }
    setmeaning(meaning);
  }
  function emojiHandler(emoji) {
    var meaning = emojiDistnory[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={textChange} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojiweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler(emoji)}
            key={emoji}
            style={{ cursor: "pointer", padding: "1rem", fontSize: "20px" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
