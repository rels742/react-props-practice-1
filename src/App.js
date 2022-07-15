import { useState } from "react";

import "./styles.css";

import Title from "./Components/Tittle";
import NameLength from "./Components/NameLength";
import NameReversed from "./Components/NameReversed";

export default function App() {
  const [name, setName] = useState("Lorel");

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} more={"Hello"} />

      {/* <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p> */}
    </div>
  );
}
