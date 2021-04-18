import React, { Component } from "react";
import { motion } from "framer-motion";
import ModalGroup from "../modal/Modal";
import { Fade } from "react-reveal";

class PressContent extends Component {
  state = {
    open: false,
    articleOpen: false,
    articles: undefined,
  };

  render() {
    const textHighlight = {
      rest: {
        transition: {
          duration: 2,
        },
      },
      hover: {
        backgroundImage:
          "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
        transition: {
          duration: 1,
        },
      },
      leave: {
        transition: {
          duration: 0.8,
        },
      },
    };
    return (
      <div id="pressWrapper">
        <ModalGroup
          open={this.state.open}
          close={() => this.setState({ open: false, articleOpen: false })}
        >
          <div>
            {this.state.articleOpen === false ? undefined : (
              <div id="pressArticleWrapper">
                <div className="mainHeader" id="pressArticleHeader">
                  {this.props.articles[this.state.articleOpen].title}
                </div>
                <span id="pressArticleAuthor">
                  {this.props.articles[this.state.articleOpen].author}
                </span>
                <div
                  id="pressArticleText"
                  className="mainText"
                  dangerouslySetInnerHTML={{
                    __html: this.props.articles[this.state.articleOpen].text,
                  }}
                />
                <a
                  id="pressArticleLink"
                  target="_blank"
                  rel="noreferrer"
                  href={this.props.articles[this.state.articleOpen].url}
                >
                  Read the full article
                </a>
              </div>
            )}
          </div>
        </ModalGroup>
        <div id="pressContent">
          <Fade left>
            <div className="mainHeader" id="pressHeader">
              Press
            </div>
          </Fade>
          <Fade right>
            <div id="pressSquareWrapper">
              {this.props.articles === undefined ? (
                <div>Loading</div>
              ) : (
                this.props.articles.map((item, index) => {
                  return (
                    <div key={index} className="pressSquareContent">
                      <div className="pressSquare"></div>
                      <motion.button
                        className="pressButton"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        onClick={() =>
                          this.setState({ open: true, articleOpen: index })
                        }
                      >
                        <motion.span
                          variants={textHighlight}
                          className="mainText pressText"
                        >
                          <span>{item.title}</span>
                          <span style={{ fontWeight: 300 }}>
                            {" "}
                            - {item.author}
                          </span>
                        </motion.span>
                      </motion.button>
                    </div>
                  );
                })
              )}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default PressContent;
