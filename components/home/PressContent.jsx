import React, { Component } from "react";
import { motion } from "framer-motion";
import ModalGroup from "../modal/Modal";
import axios from "axios";
import { Fade } from "react-reveal";

class PressContent extends Component {
  state = {
    open: false,
    articleOpen: false,
    articles: undefined,
  };

  componentDidMount() {
    axios
      .get("http://localhost:1337/articles")
      .then((res) => this.setState({ articles: res.data }));
  }

  render() {
    const textHighlight = {
      rest: {
        transition: {
          duration: 0.8,
        },
      },
      hover: {
        backgroundImage:
          "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
        transition: {
          duration: 0.8,
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
                  {this.state.articles[this.state.articleOpen].title}
                </div>
                <span id="pressArticleAuthor">
                  {this.state.articles[this.state.articleOpen].author}
                </span>
                <div
                  id="pressArticleText"
                  className="mainText"
                  dangerouslySetInnerHTML={{
                    __html: this.state.articles[this.state.articleOpen].text,
                  }}
                />
                <a
                  id="pressArticleLink"
                  target="_blank"
                  rel="noreferrer"
                  href={this.state.articles[this.state.articleOpen].url}
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
          <div id="pressSquareWrapper">
            <Fade right>
              {this.state.articles === undefined ? (
                <div>Loading</div>
              ) : (
                this.state.articles.map((item, index) => {
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
                        <motion.div
                          variants={textHighlight}
                          className="mainText pressText"
                        >
                          <span>{item.title}</span>
                          <span style={{ fontWeight: 300 }}>
                            {" "}
                            - {item.author}
                          </span>
                        </motion.div>
                      </motion.button>
                    </div>
                  );
                })
              )}
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default PressContent;
