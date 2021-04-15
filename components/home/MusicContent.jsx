import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { Fade, Zoom } from "react-reveal";
import {
  FaSoundcloud,
  FaSpotify,
  FaBandcamp,
  FaApple,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "react-scroll";

class MusicContent extends Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  render() {
    return (
      <div id="musicContent">
        <div id="musicContentWrapper">
          <div id="musicTitleWrapper">
            <Fade left>
              <div className="mainHeader musicTitle">Music</div>
              <div id="musicLinkWrapper">
                <a
                  className="musicLink"
                  href="https://open.spotify.com/artist/6YeSug3pqLlakGir5f3ViA?si=VDVpR2BoTPS113vblDqnqQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSpotify
                    style={{
                      width: 50,
                      height: 50,
                      color: "rgb(30,215,96)",
                    }}
                  />
                </a>

                <a
                  className="musicLink"
                  href="https://adimahendru.bandcamp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaBandcamp
                    style={{
                      width: 50,
                      height: 50,
                      lineHeight: 1,
                      color: "rgb(254, 80, 0)",
                    }}
                  />
                </a>
                <a
                  className="musicLink"
                  href="https://music.apple.com/us/artist/adi-m/1477720835"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaApple
                    style={{
                      width: 50,
                      height: 50,
                      lineHeight: 1,
                      color: "rgb(0, 0, 0)",
                    }}
                  />
                </a>
                <a
                  className="musicLink"
                  href="https://www.youtube.com/channel/UCtBzo_uFp0boFQbF8ujmbcA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube
                    style={{
                      width: 50,
                      height: 50,
                      lineHeight: 1,
                      color: "rgb(255, 0, 0)",
                    }}
                  />
                </a>
                <a
                  className="musicLink"
                  href="https://soundcloud.com/adimahendru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSoundcloud
                    style={{
                      width: 50,
                      height: 50,
                      lineHeight: 1,
                      color: "rgb(254, 80, 0)",
                    }}
                  />
                </a>
              </div>
            </Fade>
          </div>
          <Zoom>
            <div id="musicSeperator"></div>
          </Zoom>
          <Fade right>
            <div id="musicPlayerWrapper">
              <div id="musicSound">
                <Carousel
                  autoPlay={true}
                  infiniteLoop={true}
                  centerMode={true}
                  centerSlidePercentage={80}
                  showIndicators={true}
                  showStatus={false}
                  showThumbs={false}
                  width={this.state.width > 550 ? 500 : 300}
                >
                  {this.props.songs.map((item, index) => {
                    return (
                      <div key={index}>
                        <a
                          href={item.Url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Image
                            src={item.Photo.url}
                            width={400}
                            height={400}
                          />
                        </a>
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default MusicContent;
