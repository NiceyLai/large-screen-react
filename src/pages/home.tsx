import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';

export const Home = () => {
  return (
    <div className="home">
      <header  style={{backgroundImage:`url(${headerBg})` }}></header>
      <main>
        <section className="section1">
          <div className="borderd 管辖统计"></div>
        </section>
        <section className="borderd section2"></section>
        <section className="borderd section3"></section>
        <section className="borderd section4"></section>
        <section className="borderd section5"></section>


   </main>
   
   
   
    </div>
  );
};
