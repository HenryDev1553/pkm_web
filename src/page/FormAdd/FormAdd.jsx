import React from "react";
import CartIcon from "../../assets/image/cart-icon.png";
import "./FormAdd.css";
import { Button, Space } from "antd";

import { useState } from "react";
import { UploadImg } from "../../components/UploadImg";
import { newItem } from "../../components/NewItemSlice.js";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const FormAdd = (props) => {
  const [inputAtk, setInputAtk] = useState(1);
  const onChangeAtk = (newValue) => {
    setInputAtk(newValue);
  };
  const [inputDef, setInputDef] = useState(1);
  const onChangeDef = (newValue) => {
    setInputDef(newValue);
  };
  const [inputHeight, setInputHeight] = useState(0);
  const onChangeHeight = (e) => {
    setInputHeight(e);
  };
  const [inputWeight, setInputWeight] = useState(0);
  const onChangeWeight = (e) => {
    setInputWeight(e);
  };
  const [inputHp, setInputHp] = useState(0);
  const onChangeHp = (e) => {
    setInputHp(e);
  };

  // event.preventDefault();
  // let AddValue = {
  //   name: event.target[0].value,
  //   type: event.target[1].value,
  //   img: event.target[2].value,
  //   hp: event.target[3].value,
  //   height: event.target[4].value,
  //   weight: event.target[5].value,
  //   atk: event.target[6].value,
  //   def: event.target[7].value,
  //   date: event.target[8].value,
  // };
  // const FormNewValue = {
  //   name: event.target[0].value,
  //   type: event.target[1].value,
  //   img: event.target[2].value,
  //   hp: event.target[3].value,
  //   height: event.target[4].value,
  //   weight: event.target[5].value,
  //   atk: event.target[6].value,
  //   def: event.target[7].value,
  //   date: event.target[8].value,
  // };
  // const {
  //   register,
  //   reset,
  //   setError,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: FormNewValue,
  //   resolver: yupResolver(schema),
  // });

  // const dispatch = useDispatch();

  // const addNewItem = (name) => {
  //   dispatch(newItem(name));
  // };
  const [nameItem, setNameItem] = useState("");
  return props.trigger ? (
    <>
      <div className="view_detail">
        <div className="detail">
          <div className="header_view">
            <Button
              className="close_btn"
              onClick={() => props.setTrigger(false)}
            >
              X
            </Button>
            <p className="name">ADD NEW POKÉMON</p>
            <div className="body_form">
              {/* Form */}
              <div className="left_form">
                <form>
                  <label htmlFor="Name">
                    <input type="text" />
                  </label>
                </form>
                <div className="upload_img">
                  <UploadImg />
                </div>
              </div>

              <div className="right_form">Hekko</div>
            </div>
            <div className="btn_add">
              <button>ADD</button>
            </div>
          </div>

          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
