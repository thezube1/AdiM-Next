import React, { Component } from "react";
import ReactPlayer from "react-player";

import { Fade, Zoom } from "react-reveal";
import {
  FaSoundcloud,
  FaSpotify,
  FaBandcamp,
  FaApple,
  FaYoutube,
} from "react-icons/fa";

class MusicContent extends Component {
  state = {
    width: 0,
    height: 0,
    loadItems: [
      <div>
        <iframe
          onLoad={() => this.changeLoadStatus(0)}
          style={{ border: 0, width: 300, height: 300 }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2156442761/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
          seamless
        >
          <a href="https://adimahendru.bandcamp.com/track/never-been-easy">
            Never Been Easy by Adi M
          </a>
        </iframe>
      </div>,
      <div>
        <iframe
          onLoad={() => this.changeLoadStatus(1)}
          style={{ border: 0, width: 300, height: 300 }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1686741501/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
          seamless
        >
          <a href="https://adimahendru.bandcamp.com/album/forever-working-title">
            Forever Working Title by Adi M
          </a>
        </iframe>
      </div>,
      <div>
        <iframe
          onLoad={() => this.changeLoadStatus(2)}
          style={{ border: 0, width: 300, height: 300 }}
          src="https://bandcamp.com/EmbeddedPlayer/track=3929755664/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
          seamless
        >
          <a href="https://adimahendru.bandcamp.com/track/the-next-winner">
            The Next Winner by Adi M
          </a>
        </iframe>
      </div>,
    ],
    loading: [],
    loaded: false,
  };

  changeLoadStatus = (index) => {
    let initArray = this.state.loading;
    initArray[index] = false;
    this.setState({ loading: initArray });
  };

  componentDidUpdate() {
    if (
      this.state.loading.every((val) => val === false) == true &&
      this.state.loaded === false
    ) {
      this.props.toggleLoading(false);
      this.setState({ loaded: true });
    }
  }

  componentDidMount() {
    let loadingCurrent = [];
    for (let i = 0; i < this.state.loadItems.length; i++) {
      loadingCurrent.push(true);
    }
    this.setState({ loading: loadingCurrent });
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
              <div id="musicTitle" className="mainHeader">
                Music
              </div>
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
                {this.state.loadItems.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default MusicContent;
