import React from "react";
import A from "../../assets/images/a.jpg";
import B from "../../assets/images/b.jpg";
import { Link } from "react-router-dom";
import "./header.style.sass";

export function Header() {
  const [visible, setVisible] = React.useState(false);
  const [currKey, setCurrKey] = React.useState("");
  // eslint-disable-next-line
  const onKeyPress = e => {
    if (e.key === "e" && currKey === "") {
      setCurrKey("e");
    }
    if (e.key === "w" && currKey === "e") {
      setCurrKey("w");
    }
    if (e.key === "q" && currKey === "w") {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 1000);
      //R U pathHunter? @iPristine
    }
  };
  React.useEffect(() => {
    window.onkeypress = e => {
      onKeyPress(e);
    };
  }, [currKey, onKeyPress]);
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">Turbo</div>
      </Link>
      {visible && (
        <div className="header__delete">
          <img src={A} alt="villi" height="100px" />
          <img
            className="header__delete_anim"
            src={B}
            alt="andre"
            height="100px"
          />
        </div>
      )}
      <Link to="/login" className="header__user">
        LogIn
      </Link>
    </div>
  );
}
