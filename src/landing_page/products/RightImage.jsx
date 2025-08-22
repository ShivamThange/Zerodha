import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const RightImage = ({ img, title, des, btn1link, btn1title }) => {
  return (
    <>
      <section>
        <div className=" products mini-container mt-5 " style={{width: "1100px"}}>
          <div className="row m-0 p-0">
            {/* text */}
            <div className=" product-group col-4 m-0 p-0 align-items-center">
              <div className=" ms-1 py-5">
                <h3>{title}</h3>
                <p>{des}</p>

                {/* links */}
                <div className="row text-center my-3">
                  {btn1title && (
                    <div className="product-links col-12 text-left">
                      <a href={btn1link}>
                        {btn1title}&nbsp;&nbsp;
                        <ArrowForwardOutlinedIcon />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-2"></div>

            <div className="col-6 m-0 p-0 d-flex justify-content-center align-items-center">
              <img className="img-margin" src={img} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightImage;
