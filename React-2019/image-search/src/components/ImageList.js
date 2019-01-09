import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {

  /*
  const numbers = [0, 1, 2, 3, 4];

  let newNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] * 10);
  }

  // abbreviation for the mapping function below:
  numbers.map(num => num * 10)

  numbers.map((num) => {
    return num * 10;
  })

  Output:
  >>> [ 0, 10, 20, 30, 40 ]

  SET UP EX:

  numbers.map(num => <div>num</div>)
  */

  const images = props.images.map(image => {
    // each image has an id property that uniquely identifies it
    // keys are used for performance considerations, specifically compare the stacks
    // if item is or isn't in the stack, the keys will be compared
    return <ImageCard key={image.id} image={image} />;
  });

  // class of image-list added to image
  return <div className="image-list">{images}</div>;
};

export default ImageList;
