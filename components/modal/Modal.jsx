import React, { Component } from "react";
import { Modal, Fade } from "@material-ui/core";
import { VscChromeClose } from "react-icons/vsc";

class ModalGroup extends Component {
  state = {};
  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={() => this.props.close()}
      >
        <Fade in={this.props.open}>
          <div id="modalStyle">
            <button id="modalExitWrapper" onClick={() => this.props.close()}>
              <VscChromeClose style={{ height: 40, width: 40 }} />
            </button>
            {this.props.children}
          </div>
        </Fade>
      </Modal>
    );
  }
}

export default ModalGroup;
