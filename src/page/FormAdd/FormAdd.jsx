import React from "react";
import CartIcon from "../../assets/image/cart-icon.png";
import "./FormAdd.css";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
import { UploadImg } from "../../components/UploadImg";
export const FormAdd = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <div className="header ">
        <p className="nameShop">POKÉMON SHOP</p>
        <div className="cart">
          <img src={CartIcon} alt="cart-icon" className="cart_icon" />
        </div>
      </div>
      <div className="form_mid">
        <p className="name">ADD NEW POKÉMON</p>
        <div className="body_form">
          {/* Form */}
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{
              maxWidth: 640,
            }}
          >
            {/* <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item> */}
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Type">
              <Select>
                <Select.Option value="Grass">Grass</Select.Option>
                <Select.Option value="Water">Water</Select.Option>
                <Select.Option value="Fire">Fire</Select.Option>
              </Select>
            </Form.Item>
            <div className="upload_img">
              <UploadImg />
            </div>

            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: "Light",
                    value: "light",
                    children: [
                      {
                        title: "Bamboo",
                        value: "bamboo",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
