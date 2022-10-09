import React from "react";
import "./home.scss";
import headerBg from "../images/header.png";
import { Chart1 } from "../components/chart-1";
import { Chart2 } from "../components/chart-2";

export const Home = () => {
 const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className="section1">
          <Chart1></Chart1>
          <Chart2></Chart2>
        </section>
        <section className="borderd section2">
        </section>
        <section className="borderd section3"></section>
        <section className="borderd section4"></section>
        <section className="borderd section5"></section>
      </main>
       <footer>
        &copy; NiceyLai 2022-{year}
      </footer>
    </div>
  );
};
