import React, { useState, useEffect } from "react";
import "./DashBroad.css";
import CartIcon from "../../assets/image/cart-icon.png";
import Magnifyingglass from "../../assets/image/magnifying-glass.png";
import pokemonbackground from "../../assets/image/pokemon background.png";
import CardItem from "./CardItem";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import { CartIcon }

function DashBroad(props) {
  const [pokemonList, setPokemonList] = useState([]);
  const { cartSlice } = useSelector((state) => state);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="header ">
        <p className="nameShop">POKÉMON SHOP</p>
        <div className="cart">
          <Link to="cart">
            <img src={CartIcon} alt="cart-icon" className="cart_icon" />
          </Link>
          <div className="quantity">{cartSlice.quantity}</div>
        </div>
      </div>
      <div className="search__bar">
        <div className="content_bar">
          <label htmlFor="">
            <input
              type="text"
              placeholder="Search Pokémon"
              className="input_text"
              onChange={(e) => setPokemonName(e.target.value)}
            />
            <div className="magnifyingglass">
              <img src={Magnifyingglass} alt="" />
            </div>
          </label>
        </div>
      </div>
      <div className="slider">
        <div className="red"></div>
        <div className="line_black"></div>
        <div className="white"></div>
        <div className="background_poke">
          <img src={pokemonbackground} alt="" />
        </div>
      </div>
      {/* card item */}
      <div className="card__item">
        {pokemonList.map((item) => (
          <CardItem key={item.name} name={item.name} url={item.url} />
        ))}
      </div>
    </>
  );
}

export default DashBroad;
