import React, { useEffect, useState } from "react";
import card_add from "../../assets/image/cart-add.png";
import "./CardItem.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../../components/cartSlice";
function CardItem(props) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setPokemon(res.data);
    });
  }, []);

  const dispatch = useDispatch();

  const addDetail = (name) => {
    dispatch(addItem(name));
  };

  return (
    <>
      <div className="card_item_container">
        <div className="card_item_header">
          <div className="img_header">
            <img
              src={pokemon?.sprites?.other["official-artwork"].front_default}
              alt=""
            />
          </div>
          <div className="background_red">
            <p>No. 0{pokemon.id}</p>
          </div>
          <div className="background_black">
            <p>{pokemon.name}</p>
          </div>
        </div>
        <div className="card_item_background">
          <div className="card_item_img">
            <img
              src={pokemon?.sprites?.other["official-artwork"].front_default}
            />
          </div>
        </div>

        <div className="card_item_detail">
          <div className="detail_info">
            <div className="left">
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div className="right">
              <p>{pokemon?.types?.[0].type?.name}</p>
              <p>{pokemon?.height}0cm</p>
              <p>{pokemon?.weight}Lbs</p>
            </div>
          </div>
          <div className="detail_exp">
            <div className="left">
              <p>HP</p>
              <p>Attack</p>
              <p>Defence</p>
            </div>
            <div className="right">
              <p>{pokemon?.stats?.[0].base_stat}</p>
              <p>{pokemon?.stats?.[1]?.base_stat}</p>
              <p>{pokemon?.stats?.[2]?.base_stat}</p>
            </div>
          </div>
        </div>
        <div className="card_item_btn_add">
          <button
            onClick={() =>
              addDetail({
                img: pokemon?.sprites?.other["official-artwork"].front_default,
                name: pokemon.name,
                sl: 1,
                id: pokemon.id,
                hp: pokemon?.stats?.[0].base_stat,
                atk: pokemon?.stats?.[1]?.base_stat,
                def: pokemon?.stats?.[2]?.base_stat,
                type: pokemon?.types?.[0].type?.name,
                height: pokemon?.height,
                weight: pokemon?.weight,
              })
            }
            className="circle_btn"
          >
            <img src={card_add} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CardItem;
