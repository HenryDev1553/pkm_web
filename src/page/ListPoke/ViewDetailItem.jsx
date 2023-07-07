import React from "react";
import "../Cart/ViewDetail.css";
import { Button, Space } from "antd";
import bulbasaur from "../../assets/image/bulbasaur.png";

function ViewDetailItem(props) {
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
          </div>

          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ViewDetailItem;
