import React from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <br></br>
      <div>
        <div className="HomeVideo">
          <video loop muted autoPlay>
            <source src="https://i.imgur.com/puUoVa3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mainBody">
          <h1>Welcome to GhibliLand</h1>
          <p>
            Welcome to GhibliLand, a website for fans of studio ghibli. You will
            find most information on the different films and characters. Below
            are related links to the official studio stores and museum.
          </p>
          <div className="mainCard">
            <a href="https://www.ghibli-museum-shop.jp/" alt="">
              <img
                src="https://i.imgur.com/CPjR55v.png"
                alt=""
                className="museImg"
              />
            </a>
            <h2>Ghibli Museum Mitaka Online Shop</h2>
            <p>
              The online shop of Ghibli Museum Mitaka. Where you can find the
              original goods.
            </p>
          </div>
          <div className="mainCard">
          <a href="http://www.disney.co.jp/studio/ghibli.html">
          <img
                src="https://i.imgur.com/J0WJnGP.jpg"
                alt=""
                className="museImg"
              />
              </a>
            <h2>Studio Ghibli Blu-ray / DVD (Disney)</h2>
            <p>Click on the image for information on DVDs on sale.</p>
            </div>
          <div className="mainCard">
          <a href="http://c.tkma.co.jp/tjc/ghibli_records/">
          <img
                src="https://i.imgur.com/95us80p.png?1"
                alt=""
                className="museImg"
              />
              </a>
            <h2>Studio Ghibli Records (Tokuma Japan Communications)</h2>
            <p>Click on the image for information on Studio Ghibli related CDs.</p>
          </div>
          <div className="mainCard">
          <a href="https://ninokuni.netmarble.com/en">
          <img
                src="https://i.imgur.com/MRiyozE.png"
                alt=""
                className="museImg"
              />
              </a>
            <h2>Ni No Kuni Cross Worlds</h2>
            <p>Ni  No Kuni is a MMORPG game where the animatios and characters are produced by Studio Ghibli. For those who would like to experience a world with that Ghibli feels.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
