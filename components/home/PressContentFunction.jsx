import { useState } from "react";
import { motion } from "framer-motion";
import ModalGroup from "../modal/Modal";
import { Fade } from "react-reveal";
import axios from "axios";

const PressContent = (props) => {
  const [open, setOpen] = useState(false);
  const [articleOpen, setArticleOpen] = useState(false);
  //const [articles, setArticles] = useState(undefined);

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
  /*
  axios
    .get("https://adimahendru-admin.herokuapp.com/articles")
    .then((res) => console.log(res.data));

    */

  //console.log(props);

  return (
    <div id="pressWrapper">
      <ModalGroup
        open={open}
        close={() => {
          setOpen(false);
          setArticleOpen(false);
        }}
      >
        <div>
          {articleOpen === false ? undefined : (
            <div id="pressArticleWrapper">
              <div className="mainHeader" id="pressArticleHeader">
                {props.articles[articleOpen].title}
              </div>
              <span id="pressArticleAuthor">
                {props.articles[articleOpen].author}
              </span>
              <div
                id="pressArticleText"
                className="mainText"
                dangerouslySetInnerHTML={{
                  __html: props.articles[articleOpen].text,
                }}
              />
              <a
                id="pressArticleLink"
                target="_blank"
                rel="noreferrer"
                href={props.articles[articleOpen].url}
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
            {props.articles === undefined ? (
              <div>Loading</div>
            ) : (
              props.articles.map((item, index) => {
                return (
                  <div key={index} className="pressSquareContent">
                    <div className="pressSquare"></div>
                    <motion.button
                      className="pressButton"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      onClick={() => {
                        setOpen(false);
                        setArticleOpen(index);
                      }}
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
};

/*
export async function getStaticProps() {
  const res = await fetch("https://adimahendru-admin.herokuapp.com/articles");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}
*/

export default PressContent;
