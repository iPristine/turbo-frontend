import React from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

import "./main.style.sass";

export function Main() {
  const [res, setRes] = React.useState("Empty");
  React.useEffect(() => {
    fetch("https://localhost:44365/user").then(response => {
      console.log("RESPONSE from API:", response);
      setRes(String(response.body));
    });
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="main__content">{res}</div>
      <Footer />
    </div>
  );
}
