import { useState, useEffect } from "react";

export default function Phrase() {
  const [val, setVal] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);
  useEffect(() => {
    console.log("only once after initial render");
  }, []);
  return (
    <>
      <label>Favorite phrase</label>
      <input
        type="text"
        value={val}
        placeholder={phrase}
        onChange={(evt) => setVal(evt.target.value)}
      />
      <button onClick={createPhrase}>Send</button>
    </>
  );
}
