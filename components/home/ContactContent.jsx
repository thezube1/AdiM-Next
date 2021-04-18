import React, { Component } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

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
              <svg
                width="50"
                height="50"
                viewBox="0 0 418 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="contactSVG"
                  d="M415.5 25V54.1261C415.398 54.153 415.292 54.181 415.182 54.2099C413.758 54.5849 411.668 55.135 409.002 55.8351C403.669 57.2352 396.03 59.2356 386.81 61.636C368.369 66.4371 343.602 72.838 318.296 79.2386C292.987 85.6399 267.15 92.0379 246.565 96.8345C236.271 99.2332 227.307 101.227 220.386 102.621C213.347 104.038 208.697 104.772 206.836 104.772C204.98 104.772 200.4 104.039 193.481 102.622C186.68 101.229 177.886 99.2356 167.794 96.837C147.616 92.0408 122.321 85.6431 97.5531 79.2418C72.7882 72.8413 48.5625 66.4405 30.5273 61.6395C21.5099 59.2391 14.0406 57.2388 8.82587 55.8386C6.21851 55.1385 4.17482 54.5885 2.7831 54.2135C2.68552 54.1873 2.59114 54.1618 2.5 54.1373V25C2.5 12.5736 12.5736 2.5 25 2.5H393C405.426 2.5 415.5 12.5736 415.5 25ZM2.5 234V59.3155C3.80639 59.6672 5.49675 60.1218 7.5293 60.6676C12.747 62.0685 20.2198 64.0698 29.2411 66.4713C47.2832 71.2741 71.5214 77.6782 96.302 84.0828C121.08 90.4866 146.412 96.8939 166.638 101.701C176.749 104.105 185.602 106.112 192.478 107.521C199.237 108.905 204.366 109.772 206.836 109.772C209.303 109.772 214.497 108.907 221.373 107.522C228.366 106.114 237.387 104.107 247.7 101.704C268.331 96.8968 294.203 90.4897 319.522 84.086C344.843 77.6816 369.622 71.2775 388.07 66.4747C397.294 64.0733 404.935 62.0721 410.271 60.6712C412.394 60.1137 414.153 59.6514 415.5 59.2966V234C415.5 246.426 405.426 256.5 393 256.5H25C12.5736 256.5 2.5 246.426 2.5 234Z"
                  stroke="black"
                  strokeWidth="5"
                />
              </svg>
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
