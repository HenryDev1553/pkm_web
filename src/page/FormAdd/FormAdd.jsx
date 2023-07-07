import React from "react";
import "./FormAdd.css";
import { Button, Space, DatePicker, Spin, Alert } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import NewItemSlice, { newItem } from "../../components/NewItemSlice.js";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Form, useForm } from "react-hook-form";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

export const FormAdd = ({ editValue, setTrigger }) => {
  const dispatch = useDispatch();
  const { NewItemSlice } = useSelector((state) => state);
  const addNewItem = (name) => {
    dispatch(newItem(name));
  };
  console.log("editValue", editValue);
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const [updateValue, setUpdateValue] = useState({});
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);

    getBase64(fileList[0].originFileObj).then((res) => {
      setValue("img", res);
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 10,
        }}
      >
        Upload
      </div>
    </div>
  );
  const integer = /^[1-9]?[0-9]{1}$|^100$/;
  const userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    date: yup.date(),
    type: yup.string().required("type is required"),
    hp: yup
      .string()
      .required("hp is required")
      .matches(integer, "Hp number is not valid"),
    atk: yup
      .string()
      .required("atk is required")
      .matches(integer, "atk number is not valid"),
    def: yup
      .string()
      .required("def is required")
      .matches(integer, "def number is not valid"),
    height: yup
      .string()
      .required("height is required")
      .matches(integer, "Height number is not valid"),
    weight: yup
      .string()
      .required("weight is required")
      .matches(integer, "Weight number is not valid"),
  });
  const defaultValues = {
    name: "",
    type: "",
    hp: "",
    height: "",
    weight: "",
    atk: "",
    def: "",
    date: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    setError,
    watch,
    setValue,
    control,
    formState: { errors },
    form,
  } = useForm({
    defaultValues,
    mode: "onSubmit",
    resolver: yupResolver(userSchema),
  });
  const dataForm = watch();
  console.log("dataForm", dataForm);
  const onSubmit = (formData) => {
    const tmp = { ...formData };
    tmp.date = new Date(tmp.date).valueOf();
    console.log("formData", tmp);
    addNewItem(tmp);
  };

  return (
    <>
      <div className="view_detail">
        <div className="detail">
          <div className="header_view">
            <Button className="close_btn" onClick={() => setTrigger(false)}>
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
                      {errors.name?.message}
                    </p>
                  </div>
                  {/* date */}
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Date
                    </label>
                    <Controller
                      style={{ marginBottom: "8px" }}
                      control={control}
                      name="date"
                      render={({ field }) => (
                        <DatePicker
                          onChange={(date) => {
                            field.onChange(date);
                            console.log(new Date(date));
                          }}
                        />
                      )}
                    />
                    <p className="text-w-500 text-xs italic">
                      {errors.date?.message}
                    </p>
                  </div>
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
                      {errors.type?.message}
                    </p>
                  </div>
                  {/* Upload img */}
                  <Upload
                    listType="picture-circle"
                    fileList={fileList}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                  <Modal
                    open={previewOpen}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{
                        width: "100%",
                      }}
                      src={previewImage}
                    />
                  </Modal>
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
                      {errors.hp?.message}
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
                      {errors.height?.message}
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
                      {errors.weight?.message}
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
                      {errors.atk?.message}
                    </p>
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-zip"
                    >
                      Defence
                    </label>
                    <input
                      {...register("def")}
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded  px-4 leading-tight focus:outline-none "
                      id="grid-zip"
                      type="number"
                      placeholder="Max 100"
                    />
                    <p className="text-w-500 text-xs italic">
                      {errors.def?.message}
                    </p>
                  </div>
                  <Spin spinning={NewItemSlice.loading}></Spin>

                  <div className="add_btn">
                    <button className="btn_add" type="submit">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
