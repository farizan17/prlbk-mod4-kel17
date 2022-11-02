import { useState, useMemo } from "react";

export default function Memo () {
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => kalkulasiAngka(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
        <h1>Learn UseMemo</h1>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Kalkulasi</h2>
        {calculation}
      </div>
    </div>
  );
};

const kalkulasiAngka = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100; i++) {
    num += 1;
  }
  return num;
};