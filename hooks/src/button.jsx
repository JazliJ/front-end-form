import React, { useRef, useState, useEffect } from "react";

export default function Button() {
  const inputEl = useRef(null);
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      console.log("a second passed");
    }, 1000);

    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  });

  return (
    <>
      <input ref={inputEl} />
      <button onClick={() => inputEl.current.focus()}>Focus the input</button>
    </>
  );
}
