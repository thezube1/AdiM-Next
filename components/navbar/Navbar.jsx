import React, { Component } from "react";
import NavbarItem from "./NavbarItem";

import {
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaFacebookSquare,
  FaYoutube,
  FaApple,
} from "react-icons/fa";

class Navbar extends Component {
  state = {
    navType: "navbarWrapper",
    hidden: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    if (window.innerWidth > 540) {
      this.setState({ navType: "navbarWrapper" });
    } else {
      this.setState({ navType: "navbarWrapperVertical" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > 540) {
      this.setState({ navType: "navbarWrapper", hidden: true });
    } else {
      this.setState({ navType: "navbarWrapperVertical" });
    }
  };

  handleScroll = () => {
    if (this.state.navType === "navbarWrapper") {
      const socials = document.querySelectorAll(".navbarSocial");

      if (window.scrollY > 20) {
        document.querySelector(".navbarWrapper").className =
          "navbarWrapper scroll";
        for (let i = 0; i < socials.length; i++) {
          socials[i].className = "navbarSocial scroll2";
        }
      } else {
        for (let i = 0; i < socials.length; i++) {
          socials[i].className = "navbarSocial";
        }
        document.querySelector(".navbarWrapper").className = "navbarWrapper";
      }
    } else {
      const burger = document.querySelectorAll(".burgerLine");
      if (window.scrollY > 20) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].className = "burgerLine scroll3";
        }
      } else {
        for (let i = 0; i < burger.length; i++) {
          burger[i].className = "burgerLine";
        }
      }
    }
  };

  handleClose = () => {
    this.setState({ hidden: true });
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: this.state.hidden === false ? "100%" : false,
            height: this.state.hidden === false ? "100vh" : false,
            backgroundColor: "white",
            position: "fixed",
            zIndex: "1000",
          }}
        >
          <div
            id="navbarBurgerWrapper"
            onClick={() =>
              this.setState((prevState) => ({ hidden: !prevState.hidden }))
            }
          >
            <div
              className="burgerLine"
              style={{
                backgroundColor: this.state.hidden === false ? "black" : false,
              }}
            ></div>
            <div
              className="burgerLine"
              style={{
                backgroundColor: this.state.hidden === false ? "black" : false,
              }}
            ></div>
            <div
              className="burgerLine"
              style={{
                backgroundColor: this.state.hidden === false ? "black" : false,
              }}
            ></div>
          </div>
          {this.state.navType === "navbarWrapperVertical" &&
          this.state.hidden === true ? (
            false
          ) : (
            <div className={this.state.navType}>
              <NavbarItem to="section1" item="Home" close={this.handleClose} />
              <NavbarItem
                to="section2"
                item="Music"
                close={this.handleClose}
                offset={-250}
              />
              <NavbarItem
                offset={180}
                to="section3"
                item="About"
                close={this.handleClose}
              />
              <NavbarItem to="section4" item="Press" close={this.handleClose} />
              <NavbarItem
                to="section5"
                item="Contact"
                close={this.handleClose}
              />
              <a
                className="navbarSocial"
                href="https://open.spotify.com/artist/6YeSug3pqLlakGir5f3ViA?si=VDVpR2BoTPS113vblDqnqQ"
                target="_blank"
                rel="noreferrer"
              >
                <FaSpotify style={{ width: 25, height: 25 }} />
              </a>
              <a
                className="navbarSocial"
                href="https://music.apple.com/ng/artist/adi-m/id1477720835"
                target="_blank"
                rel="noreferrer"
              >
                <FaApple style={{ width: 25, height: 25 }} />
              </a>
              <a
                className="navbarSocial"
                href="https://www.youtube.com/channel/UCtBzo_uFp0boFQbF8ujmbcA"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube style={{ width: 25, height: 25 }} />
              </a>
              <a
                className="navbarSocial"
                href="https://www.instagram.com/adimmusic/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram style={{ width: 25, height: 25 }} />
              </a>

              <a
                className="navbarSocial"
                href="https://twitter.com/adimahendru"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter style={{ width: 25, height: 25 }} />
              </a>
              <a
                className="navbarSocial"
                href="https://twitter.com/adimahendru"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare style={{ width: 25, height: 25 }} />
              </a>

              <div id="navbarSocialContent"></div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
