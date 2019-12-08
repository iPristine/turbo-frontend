import React from "react";

import vkLogo from "../../assets/images/vk.png";
import instaLogo from "../../assets/images/insta.png";
import mailLogo from "../../assets/images/mail.svg";

import "./footer.style.sass";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">Ищи меня тут:</div>
      <div className="footer__links">
        <a href="http://vk.com/schubiin">
          <img className="links__logo" src={vkLogo} alt="vk logo" />
        </a>
        <a href="http://vk.com/schubiin">
          <img className="links__logo" src={instaLogo} alt="insta logo" />
        </a>
        <a href="http://vk.com/schubiin">
          <img className="links__logo" src={mailLogo} alt="mail logo" />
        </a>
      </div>
      <div className="footer__copyright">
        Мы используем файлы cookie, чтобы улучшить работу и повысить
        эффективность сайта.
      </div>
    </div>
  );
}
