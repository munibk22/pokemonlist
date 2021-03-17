import React, { useEffect } from "react";

import { Row } from "react-bootstrap";
import ResumeTable from './skills/ResumeTable'
import Moon from "./pics/moon.png";
import Moonb from "./pics/moonb.jpeg";
import SliderInfo from "./SliderInfo";


export default function Resume2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="absoluteTop">

      <div className="relative">
        <Row
          className="absolute"
          style={{ margin: "", marginLeft: "", marginTop: "" }}
        >
          {/* <Col
            md="auto"
            className="hbox hexgrid1"
            style={{ marginRight: "-15px" }}
          >
            <Row className="d-flex flex-row">
              <div className="hexagon"></div>
            </Row>

            <Row className="d-flex ">
              <div className="hexagon"></div>
            </Row>
          </Col> */}

          {/* <Col md="auto">
            <h4 style={{ color: "white", textAlign: "", margin: "auto" }}>
              Munib Khan Resume
            </h4>
          </Col> */}

          {/* <div > 
<hr className="hrEnd"></hr>
<p></p>
 <hr className="hrEnd"></hr>
  </div> */}
        </Row>
        <div>
          <img
            src={Moonb}
            alt=""
            className="imgstyle  "
            style={{ width: "100%" }}
          />
        </div>

        <div className="backdrop"></div>

        <div className="absoluteTop backdropred " style={{}}></div>
        {/* <div className="absoluteTop componentBoxB" style={{ maxHeight:'100%', height:'900px', overflow:'hidden', zIndex:"2"}}>
      <SideNav  />
 </div>  */}
        <div
          className=" moon "
          style={{ color: "white", marginLeft: "8%", marginRight: "25%" }}
        >
          <img src={Moon} className="up " alt="" id="mySlider" />
        </div>
        <div className="relativeb " style={{}}>
          <SliderInfo />
        </div>
      </div>

      <section><ResumeTable />  </section>

      <div style={{ bottom: '0px', color: 'wheat' }} className=' navbarHomeB '>
        @Munib Khan
      </div>
    </div>
  );
}
