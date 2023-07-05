import React from "react";
import CartIcon from "../../assets/image/cart-icon.png";
import "./FormAdd.css";
import { Button, Space } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { UploadImg } from "../../components/UploadImg";
import { newItem } from "../../components/NewItemSlice.js";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { Form, useForm } from "react-hook-form";

export const FormAdd = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate);
  // const [inputAtk, setInputAtk] = useState(1);
  // const onChangeAtk = (newValue) => {
  //   setInputAtk(newValue);
  // };
  // const [inputDef, setInputDef] = useState(1);
  // const onChangeDef = (newValue) => {
  //   setInputDef(newValue);
  // };
  // const [inputHeight, setInputHeight] = useState(0);
  // const onChangeHeight = (e) => {
  //   setInputHeight(e);
  // };
  // const [inputWeight, setInputWeight] = useState(0);
  // const onChangeWeight = (e) => {
  //   setInputWeight(e);
  // };
  // const [inputHp, setInputHp] = useState(0);
  // const onChangeHp = (e) => {
  //   setInputHp(e);
  // };

  const dispatch = useDispatch();

  const addNewItem = (name) => {
    dispatch(newItem(name));
  };

  const userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    // date: yup.date().default(() => startDate()),
    type: yup.string().required("type is required"),
    hp: yup.string().required("hp is required"),
    atk: yup.string().required("atk is required"),
    def: yup.string().required("def is required"),
    height: yup.string().required("height is required"),
    weight: yup.string().required("weight is required"),
  });
  const FormNewValue = [
    {
      name: "",
      type: "",
      hp: "",
      height: "",
      weight: "",
      atk: "",
      def: "",
      sl: "1",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
    form,
  } = useForm({
    defaultValues: FormNewValue,
    mode: "onSubmit",
    resolver: yupResolver(userSchema),
  });
  const onSubmit = (FormNewValue) => {
    addNewItem(FormNewValue);
    localStorage.setItem("users", JSON.stringify(FormNewValue));
  };

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
            <div className="flex flex-wrap ">
              {/* Form */}
              <form
                className="w-full max-w-lg"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      className="appearance-none block w-full  text-gray-700  rounded   px-2 mb-1 leading-tight f"
                      id="grid-name"
                      placeholder=""
                    />
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  {/* date */}
                  {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Date
                    </label>
                    <DatePicker
                      dateFormat="MMMM d, yyyy h:mmaa"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      form={form}
                    />
                  </div> */}
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      TYPE
                    </label>
                    <select
                      {...register("type")}
                      id="type"
                      className="bg-gray-50 border border-gray-300 block w-full rounded"
                    >
                      {/* <option selected>Choose a type</option> */}
                      <option value="Normal">Normal</option>
                      <option value="Grass">Grass</option>
                      <option value="Fire">Fire</option>
                      <option value="Water">Water</option>
                    </select>
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      HP
                    </label>
                    <input
                      {...register("hp")}
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none "
                      id="grid-zip"
                      type="number"
                      placeholder="Max 100"
                    />
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      Height
                    </label>
                    <input
                      {...register("height")}
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none "
                      id="grid-zip"
                      type="number"
                      placeholder="Max 100"
                    />
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      Weight
                    </label>
                    <input
                      {...register("weight")}
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none "
                      id="grid-zip"
                      type="number"
                      placeholder="Max 100"
                    />
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      Attack
                    </label>
                    <input
                      {...register("atk")}
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none "
                      id="grid-zip"
                      type="number"
                      placeholder="Max 100"
                    />
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      Deffence
                    </label>
                    <input
                      {...register("def")}
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none "
                      id="grid-zip"
                      type="number"
                      placeholder="Max 100"
                    />
                    <p className="text-w-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="add_btn">
                    <button className="btn_add" type="submit">
                      Add
                    </button>
                  </div>
                </div>
              </form>
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
