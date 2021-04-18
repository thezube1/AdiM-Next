import React, { Component } from "react";
import { Zoom } from "react-reveal";
import Image from "next/image";
import ModalGroup from "../modal/Modal";

class AboutContent extends Component {
  state = {};
  render() {
    return (
      <div id="mainAboutWrapper">
        <div id="mainAboutContent">
          <Zoom>
            <Image
              src="/aditya_boat.jpg"
              width={600}
              height={800}
              alt="aditya random"
            />
            <div id="mainAboutTextWrapper">
              <div className="mainHeader" id="mainAboutHeader">
                About
              </div>
              <div className="mainText" id="mainAboutText">
                Born in Houston, Orlando grown producer and rapper Adi was
                always surrounded by music from an early age. Going from pop
                rock and jazz pop to nu metal and pop punk, Adi landed on hip
                hop through the latter years of high school inspired by artists
                like J. Cole and Oddisee. Motivated, he created rough demos
                through GarageBand and later upgraded to a drum machine.
              </div>
              <div id="aboutExpandWrapper">
                <button
                  target="_blank"
                  rel="noreferrer"
                  href="https://ffm.to/summerdaydream"
                  id="aboutExpand"
                  className="featuredHeader"
                >
                  Read more
                </button>
                <div id="featuredListenBack"></div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default AboutContent;
