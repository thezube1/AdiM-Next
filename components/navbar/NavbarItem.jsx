import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const lineExtend = {
  rest: {
    width: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

class NavbarItem extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const divs = document.querySelectorAll(".navbarItem");
    const divsUnder = document.querySelectorAll(".navbarItemUnder");
    if (window.scrollY > 20) {
      for (let i = 0; i < divs.length; i++) {
        divs[i].className = "navbarItem scroll2";
      }
      for (let i = 0; i < divsUnder.length; i++) {
        divsUnder[i].className = "navbarItemUnder scroll3";
      }
    } else {
      for (let i = 0; i < divs.length; i++) {
        divs[i].className = "navbarItem";
      }
      for (let i = 0; i < divsUnder.length; i++) {
        divsUnder[i].className = "navbarItemUnder";
      }
    }
  };

  render() {
    return (
      <Link
        to={this.props.to}
        onClick={this.props.close}
        smooth={true}
        offset={this.props.offset}
        activeClass="active"
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <div className="navbarItem">{this.props.item}</div>
          <motion.div
            variants={lineExtend}
            className="navbarItemUnder"
          ></motion.div>
        </motion.div>
      </Link>
    );
  }
}

export default NavbarItem;
