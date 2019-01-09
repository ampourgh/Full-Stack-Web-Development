import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // this.imageRef.current - direct reference to image tag
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {

    // all the images will show up, observe path in Chrome console
    console.log(this.imageRef);
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    // this.setState({ spans: spans });
    // abbreviated below with ES2016 feature of being able to shorten if state and const name are the same
    this.setState({ spans });
  };

  render() {
    // reduces the need to use this.props.images.description or urls.regular
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
