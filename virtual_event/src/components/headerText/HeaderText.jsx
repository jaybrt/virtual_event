import React from "react";
import Typing from "react-typing-animation";
import "./headerText.css";

const Header = () => {
  return (
    <div className="header-text__content">
      <div className="header-text__title">
        <Typing>
          <span>Littleton High School Day of Code</span>
          <Typing.Delay ms={1500} />
          <Typing.Backspace count={12} />
          <span>'s Virtual Event</span>
          <Typing.Delay ms={800} />
          <Typing.Backspace count={16} />
          <span> Day of Code</span>
        </Typing>
      </div>
      <div className="header-text__subtitle">
        <Typing>
          <Typing.Delay ms={10000} />
          <span>Learn to Make Websites</span>
          <Typing.Delay ms={800} />
          <Typing.Backspace count={8} />
          <span>Games</span>
          <Typing.Delay ms={800} />
          <Typing.Backspace count={5} />
          <span>Apps</span>
          <Typing.Delay ms={800} />
          <Typing.Backspace count={4} />
          <span>Anything You Can Imagine</span>
        </Typing>
      </div>
    </div>
  );
};

export default Header;
