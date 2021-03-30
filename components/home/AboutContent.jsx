import React, { Component } from "react";
import { Zoom } from "react-reveal";
import Image from "next/image";

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
                Hailing from Orlando, Florida, Aditya Mahendru raps about the
                bullshit that goes on in his life, and the world.
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default AboutContent;
