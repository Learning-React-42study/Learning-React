import { useState } from "./useState.js";

export default function App({ $target }) {
  const [state, setState] = useState(0);
  console.log(state);
}
