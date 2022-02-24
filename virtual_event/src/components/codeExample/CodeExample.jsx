import React, { useState } from "react";
import "./codeExample.css";
import Typing from "react-typing-animation";

const CodeExample = () => {
  const printRe = /print\("[^"]*"\)/i;

  const [code, setCode] = useState("");

  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleButtonPressed = () => {
    evaluateCode(code);
  };

  const evaluateCode = (c) => {
    let res = "";
    if (printRe.test(c) === true) {
      res = c.substring(7, c.length - 2);
    } else {
      res = "Whoops... Something's not quite right. Check your code.";
    }
    setOutput(
      <Typing speed={300}>
        <span>...</span>
        <Typing.Reset count={1} delay={300} />
      </Typing>
    );
    setTimeout(() => {
      setOutput(<p>{res}</p>);
    }, 1200);
  };

  return (
    <div className="code-example__content">
      <p>
        Python is one of the world's most popular programming languages. It can
        be used to create games, websites, or data science models. One of the
        most important functions in Python is the print function. It is used to
        output text to the console. The sytax for this function is: print("YOUR
        TEXT HERE"). Try it out below!
      </p>
      <div className="code-example__content__input">
        <input
          type="text"
          placeholder="Your Code Here"
          onChange={handleInputChange}
        ></input>
        <button type="button" onClick={handleButtonPressed}>
          Test Code
        </button>
      </div>
      <div className="code-example__content__output">
        <p>Output: </p>
        {output}
      </div>
    </div>
  );
};

export default CodeExample;
