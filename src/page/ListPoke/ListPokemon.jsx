import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ListPoke.css";
import CartIcon from "../../assets/image/cart-icon.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Space, Table, Tag } from "antd";
import { remove } from "../../components/NewItemSlice";
import ViewDetailItem from "./ViewDetailItem";
import { useState } from "react";
import { FormAdd } from "../FormAdd/FormAdd";

export const ListPokemon = () => {
  const { NewItemSlice } = useSelector((state) => state);
  const [togglePop, setTogglePop] = useState(false);
  const [togglePop2, setTopgglePop2] = useState(false);
  const [editValue, setEditValue] = useState([]);
  const dispatch = useDispatch();

  const removeI = (item) => {
    dispatch(remove(item));
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "Type",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "HP",
      dataIndex: "hp",
      key: "hp",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Defence",
      dataIndex: "def",
      key: "def",
    },
    {
      title: "Attack",
      key: "atk",
      dataIndex: "atk",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => setTogglePop(true)}>View</a>
          <ViewDetailItem trigger={togglePop} setTrigger={setTogglePop}>
            <div className="img_view">
              <img src={record.img} alt="" />
            </div>
            <div className="info_view">
              <div className="name_info">
                <strong>{record.name}</strong>
              </div>
              <div className="properties_view">
                <div className="info_detail">
                  <div className="left_info">
                    <p>Type</p>
                    <p>Height</p>
                    <p>Weight</p>
                  </div>
                  <div className="right_info">
                    <p>{record.type}</p>
                    <p>{record.height}0cm</p>
                    <p>{record.weight}Lbs</p>
                  </div>
                </div>
                <div className="exp_detail">
                  <div className="left_exp">
                    <p>HP</p>
                    <p>Attack</p>
                    <p>Defence</p>
                  </div>
                  <div className="right_exp">
                    <p>{record.hp}</p>
                    <p>{record.atk}</p>
                    <p>{record.def}</p>
                  </div>
                </div>
              </div>
            </div>
          </ViewDetailItem>
          <a onClick={() => setTopgglePop2(true)}>Edit</a>
          <a onClick={() => removeI({ id: record.name })}>Delete</a>
        </Space>
      ),
    },
  ];
  const data = NewItemSlice.item_array.map((item) => ({
    name: item.name,
    type: item.type,
    date: new Date(item.date).toDateString(),
    hp: item.hp,
    height: item.height,
    weight: item.weight,
    def: item.def,
    atk: item.atk,
    img: item.img,
  }));
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
              You have {NewItemSlice.quantity} items in your list
            </div>
            <div className="list_view">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
      {togglePop2 && (
        <FormAdd
          setTrigger={setTopgglePop2}
          editValue={{ editValue }}
        ></FormAdd>
      )}
    </>
  );
};
