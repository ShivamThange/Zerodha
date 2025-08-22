import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const LeftImage = ({
  img,
  title,
  des,
  applelink,
  playlink,
  btn1link,
  btn1title,
  btn2link,
  btn2title,
}) => {
  return (
    <>
      <section>
        <div className="mini-container mt-5 pt-5" style={{width: "1100px"}}>
          <div className="row m-0 p-0">
            <div className="col-6 m-0 p-0 text-center">
              <img className="img-margin" src={img} />
            </div>
            <div className="col-2"></div>

            {/* text */}
            <div className="product-group col-4 m-0 p-0">
              <div className=" ms-1 text-justified">
                <h3>{title}</h3>
                <p>{des}</p>
              </div>

              {/* links */}
              {/* links */}
              <div className="row text-center my-3">
                {btn1title && (
                  <div className="product-links col-6 text-right">
                    <a href={btn1link}>
                      {btn1title}&nbsp;&nbsp;
                      <ArrowForwardOutlinedIcon />
                    </a>
                  </div>
                )}

                {btn2title && (
                  <div className="product-links col-6 text-center">
                    <a href={btn2link}>
                      {btn2title}&nbsp;&nbsp;
                      <ArrowForwardOutlinedIcon />
                    </a>
                  </div>
                )}
              </div>

              {/* mobile app links */}
              <div className="row text-center mt-3">
                <div className="product-links col-6 text-right">
                  <a href={playlink}>
                    <img src="static/images/google-play-badge.svg"></img>
                  </a>
                </div>
                <div className="product-links col-6 text-center">
                  <a href={applelink}>
                    <img src="static/images/appstore-badge.svg"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftImage;
