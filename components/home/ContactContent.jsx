import React, { Component } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const MailIcon = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
    },
  };

  return (
    <motion.svg
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 2 }}
      width="354"
      height="244"
      viewBox="0 0 354 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect width="354" height="244" />
      <motion.path
        variants={variants}
        id="contactSVG"
        d="M2 51C2 51 164.837 96 179.234 96C193.631 96 352 51 352 51M1 31C1 14.4315 14.4315 1 31 1H323C339.569 1 353 14.4315 353 31V213C353 229.569 339.569 243 323 243H31C14.4314 243 1 229.569 1 213V31Z"
        stroke="black"
      />
    </motion.svg>
  );
};

class ContactContent extends Component {
  state = {};
  render() {
    return (
      <div id="contactWrapper">
        <div id="contactContent">
          <div className="mainHeader" id="contactTitle">
            Contact
          </div>
          <a
            href="mailto: adimahendru96@gmail.com"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div id="contactEnvelope">
              <MailIcon />

              <div id="contactMailText">adimahendru96@gmail.com</div>
            </div>
            {/*<div id="contactEnvelope">
              <BsEnvelope
                style={{ color: "rgb(25, 25, 25)", width: 40, height: 40 }}
              />
              <div id="contactMailText">adimahendru96@gmail.com</div>
            </div> */}
          </a>
        </div>
      </div>
    );
  }
}

export default ContactContent;
