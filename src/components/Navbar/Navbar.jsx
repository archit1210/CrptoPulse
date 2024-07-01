import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <li>HOME</li>
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>BLOG</li>
      </ul>
      <div className="nav-right">
        <div>
          <select name="" id="" onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
        </div>
        <div>
          <button>
            sign up <img src={arrow_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
