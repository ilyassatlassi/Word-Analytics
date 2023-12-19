import { useState } from "react";
import Warning from "./Warning"
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constant";

const Textarea = ({setStats}: any) => {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const handleChange = (e: any) => {
    // extract text from event
    let text = e.target.value;
    if (text.includes("<script>")) {
      setWarning("You can't use <script> in your text.");
      text = text.replace("<script>", "");
    } else {
      setWarning("");
    }

    // set text
    setText(text);

    // set stats
    setStats({
      numberOfWords: text.split(" ")[0] === "" ? 0 : text.split(" ").length,
      numberOfCharacters: text.length,
      instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
      facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    });
  };
  return (
   <section className="bg">
    <textarea
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleChange}
        value={text}
      ></textarea>
       <Warning warningText={warning} />
   </section>
  )
}

export default Textarea