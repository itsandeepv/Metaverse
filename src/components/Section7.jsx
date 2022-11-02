import React from "react";
import "./Section7.css";
import RobotImg from "../assets/img/robot.png";
import Slider from "react-slick";




function Section7() {


  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 4,
    swipeToSlide: true,

    responsive: [

      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },



      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="marketPlace">
      <div className="bg_marketPlace">
        <div className="container">
          <h1>NFT Marketplace</h1>
          <p>
            NFT Market should be there and it must look like interface like
            Amazon or Myntra type catalogue. Kindly paste following message:
          </p>


          <div className="item_main row">
          <Slider {...settings}>
     
              <div className="col-lg-3 p-5 ">

                <div className="item">


              <div className="item_img">
                <div className="color_backImg">
                  <img src={RobotImg}></img>
                </div>
              </div>
              <div className="item_data">
                <h5>NFT Marketplace</h5>
                <p>
                  NFT Market should be there and it must look like interface
                  like
                </p>
                <div className="price">
                  <p>$ 50</p>
                  <p>50% Off</p>
                </div>
                <a href="#">Buy</a>
              </div>
                </div>

              </div>
            <div className="col-lg-3 p-5 ">

            <div className="item">


              <div className="item_img">
                <div className="color_backImg">
                  <img src={RobotImg}></img>
                </div>
              </div>
              <div className="item_data">
                <h5>NFT Marketplace</h5>
                <p>
                  NFT Market should be there and it must look like interface
                  like
                </p>
                <div className="price">
                  <p>$ 50</p>
                  <p>50% Off</p>
                </div>
                <a href="#">Buy</a>
              </div>
                </div>

            </div>

              <div className="col-lg-3 p-5 ">

                <div className="item">



              <div className="item_img">

                <div className="color_backImg">
                  <img src={RobotImg}></img>
                </div>
              </div>
              <div className="item_data">
                <h5>NFT Marketplace</h5>
                <p>
                  NFT Market should be there and it must look like interface
                  like
                </p>
                <div className="price">
                  <p>$ 50</p>
                  <p>50% Off</p>
                </div>
                <a href="#">Buy</a>
                  </div>
                </div>
            </div>

              <div className="col-lg-3 p-5 ">

                <div className="item">



              <div className="item_img">
                <div className="color_backImg">
                  <img src={RobotImg}></img>
                </div>
              </div>
              <div className="item_data">
                <h5>NFT Marketplace</h5>
                <p>
                  NFT Market should be there and it must look like interface
                  like
                </p>
                <div className="price">
                  <p>$ 50</p>
                  <p>50% Off</p>
                </div>
                <a href="#">Buy</a>
              </div>
            </div>
              </div>

            </Slider>
            </div>
            
            </div>
      </div>
    </div>
  );
}

export default Section7;
