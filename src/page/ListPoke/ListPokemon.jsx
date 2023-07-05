import React from "react";
import { useSelector } from "react-redux";
import "./ListPoke.css";
import CartIcon from "../../assets/image/cart-icon.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ListPokemon = () => {
  const { NewItemSlice } = useSelector((state) => state);

  const render = () => {
    return NewItemSlice.item_array.map((items) => (
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 ">
                Pokemon Name
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                HP
              </th>
              <th scope="col" class="px-6 py-3">
                Height
              </th>
              <th scope="col" class="px-6 py-3">
                Weight
              </th>
              <th scope="col" class="px-6 py-3">
                Attack
              </th>
              <th scope="col" class="px-6 py-3">
                Defence
              </th>
              <th scope="col" class="px-6 py-3">
                Số Lượng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {items.name}
              </th>
              <td class="px-6 py-4 ">{items.type}</td>
              <td class="px-6 py-4 ">{items.hp}</td>
              <td class="px-6 py-4 ">{items.height}</td>
              <td class="px-6 py-4 ">{items.weight}</td>
              <td class="px-6 py-4 ">{items.atk}</td>
              <td class="px-6 py-4 ">{items.def}</td>
              <td class="px-6 py-4 ">{items.sl}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };
  return (
    <>
      <div className="header ">
        <p className="nameShop">POKEMON LIST</p>
        <div className="cart">
          <img src={CartIcon} alt="cart-icon" className="cart_icon" />
        </div>
      </div>
      <div className="body">
        <div className="cart_body">
          <div className="cart_body_header">
            <div className="continues_shopping">
              <Link id="back" to="/dashboard">
                <AiOutlineArrowLeft />
              </Link>

              <Link id="text" to="/dashboard">
                <strong>Continues Shopping</strong>
              </Link>
            </div>
            <div className="have_item">
              You have {NewItemSlice.quantity} items in your cart
            </div>
            <div className="list_view">{render()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
