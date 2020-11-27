import React, { Component } from "react";
import '../styles/App.css';
import SlideShow from './SlideShow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  slides = this.props.slides;

  resetSlide = () => {
    this.setState( { index: 0 })
  }
  prevSlide = () => {
    this.setState( { index: (this.state.index - 1) % this.slides.length })
  }
  nextSlide = () => {
    this.setState( { index: (this.state.index + 1) % this.slides.length })
  }

  render() {
    return (
      <div>
        <SlideShow
          slides = {this.slides}
          index = {this.state.index}
          resetSlide = {this.resetSlide}
          prevSlide = {this.prevSlide}
          nextSlide = {this.nextSlide}
        />
      </div>
    )
  }
}

export default App;
