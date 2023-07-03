import React, { useState } from "react";
import "./CartStyle.css";
import CartIcon from "../../assets/image/cart-icon.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../components/cartSlice";
import ViewDetail from "./ViewDetail";
import bulbasaur from "../../assets/image/bulbasaur.png";

function CartShopping() {
  const { cartSlice } = useSelector((state) => state);
  const [togglePop, setTogglePop] = useState(false);
  const dispatch = useDispatch();

  const removeCard = (name) => {
    dispatch(removeItem(name));
    console.log(name);
  };

  const renderCard = () => {
    return cartSlice.card_array.map((item) => (
      <div className="cart_item_added">
        <div className="img_item_add">
          <img src={item.img} alt="" />
        </div>
        <div className="name_item">
          <strong>{item.name}</strong>
        </div>
        <div className="quantily">
          <strong>SL: {item.sl}</strong>
        </div>
        <button onClick={() => setTogglePop(true)} className="btn_view">
          View
        </button>
        <ViewDetail trigger={togglePop} setTrigger={setTogglePop}>
          <div className="img_view">
            <img src={item.img} alt="" />
          </div>
          <div className="info_view">
            <div className="name_info">
              <strong>{item.name}</strong>
            </div>
            <div className="properties_view">
              <div className="info_detail">
                <div className="left_info">
                  <p>Type</p>
                  <p>Height</p>
                  <p>Weight</p>
                </div>
                <div className="right_info">
                  <p>{item.type}</p>
                  <p>{item.height}0cm</p>
                  <p>{item.weight}Lbs</p>
                </div>
              </div>
              <div className="exp_detail">
                <div className="left_exp">
                  <p>HP</p>
                  <p>Attack</p>
                  <p>Defence</p>
                </div>
                <div className="right_exp">
                  <p>{item.hp}</p>
                  <p>{item.atk}</p>
                  <p>{item.def}</p>
                </div>
              </div>
            </div>
          </div>
        </ViewDetail>

        <div className="btn_remove">
          <button onClick={() => removeCard({ id: item.id })}>REMOVE</button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="header ">
        <p className="nameShop">CART SHOPPING</p>
        <div className="cart">
          <img src={CartIcon} alt="cart-icon" className="cart_icon" />
          <div className="quantity">{cartSlice.quantity}</div>
        </div>
      </div>
      <div className="body">
        <div className="cart_body">
          <div className="cart_body_header">
            <div className="continues_shopping">
              <Link id="back" to="/">
                <AiOutlineArrowLeft />
              </Link>

              <Link id="text" to="/">
                <strong>Continues Shopping</strong>
              </Link>
            </div>
            <div className="have_item">
              You have {cartSlice.quantity} items in your cart
            </div>
            {renderCard()}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartShopping;
