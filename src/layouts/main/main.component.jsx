import React from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { New } from "../../components/new/new.component";

import { MainRepository } from "./main.repository";
import "./main.style.sass";

const mainRepository = new MainRepository();

export function Main() {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    mainRepository.getNews().then(res => {
      setNews(res);
      console.log("RES:", res);
    });
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="main__content">
        <div className="main__title">
          <div className="main__title_top">
            <img
              className="main__image"
              src="https://sun9-34.userapi.com/c856120/v856120170/d0b36/8dOad9SFB-o.jpg"
              alt="ava vk"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nostrum, reprehenderit, dolorum ratione excepturi nulla quis cum
              sapiente laborum tenetur dolorem? Non, sapiente omnis vel deserunt
              reiciendis cum? Porro, minus?{" "}
              <b>Я вообще-то холостой чувак, все еще ,держу в курсе</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nostrum, reprehenderit, dolorum ratione excepturi nulla quis cum
              sapiente laborum tenetur dolorem? Non, sapiente omnis vel deserunt
              reiciendis cum? Porro, minus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nostrum, reprehenderit, dolorum ratione excepturi nulla quis cum
              sapiente password ewq dolorem? Non, sapiente omnis vel deserunt
              reiciendis cum? Porro, minus?
            </p>
          </div>
        </div>
        {news.map((n, index) => (
          <New
            key={index}
            title={n.title}
            logo={n.logo}
            description={n.description}
            date={n.date}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
