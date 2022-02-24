import React from "react"
import { Link } from "react-router-dom"
import BannerImage from "../assests/pizza.jpg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to T P </h1>
        <p> Tasty Pizza's</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;