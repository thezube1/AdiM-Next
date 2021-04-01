import Navbar from "../components/navbar/Navbar";
import React, { Component } from "react";
import dynamic from "next/dynamic";
import { Fade } from "react-reveal";
const Text = dynamic(() => import("../components/3Dtext/text"));
import axios from "axios";
//import Text from "../components/3Dtext/text";

import Spinner from "../components/spinner/Spinner";
import FeaturedContent from "../components/home/FeaturedContent";
import MusicContent from "../components/home/MusicContent";
import VideoContent from "../components/home/VideoContent";
import AboutContent from "../components/home/AboutContent";

import PressContent from "../components/home/PressContent";
//import PressContentFunction from "../components/home/PressContentFunction";

import ContactContent from "../components/home/ContactContent";

class Home extends Component {
  state = {
    open: true,
    loading: false,
    width: 700,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    return (
      <React.Fragment>
        <Spinner isOpen={this.state.loading} />
        <div>
          <Navbar />
          <div>
            <div id="section1">
              <div id="mainBackground">
                <Fade left>
                  <div id="textWrapper">
                    <Text width={this.state.width} />
                  </div>
                </Fade>
              </div>
            </div>
            <div>
              <FeaturedContent />
            </div>
            <div id="section2">
              <MusicContent
                toggleLoading={(e) => this.setState({ loading: e })}
                songs={this.props.songs}
              />
              <VideoContent />
            </div>
            <div id="section3">
              <AboutContent />
            </div>
            <div id="section4">
              <PressContent articles={this.props.articles} />
            </div>
            <div id="section5">
              <ContactContent />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export async function getStaticProps() {
  const articles = await axios.get(
    "https://adimahendru-admin.herokuapp.com/articles"
  );
  const songs = await axios.get(
    "https://adimahendru-admin.herokuapp.com/music-items"
  );

  return {
    props: {
      articles: articles.data,
      songs: songs.data,
    },
  };
}

export default Home;
