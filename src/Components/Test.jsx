import { useState } from 'react';

const Test = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const bigImages = [
    "https://socialcops.com/images/new/screenshots/sc-products/collect/desktop-form-mock-708.png",
    "https://socialcops.com/images/old/spec/home/our_products-img-access-708.png",
    "https://socialcops.com/images/old/spec/home/our_products-img-transform-708.png",
    "https://socialcops.com/images/old/spec/home/our_products-img-visualize-708.png"
  ];
  const smallImages = [
    "https://socialcops.com/images/old/global/logo-collect-dark.svg",
    "https://socialcops.com/images/old/global/logo-access-dark.svg",
    "https://socialcops.com/images/old/global/logo-transform-dark.svg",
    "https://socialcops.com/images/old/global/logo-visualize-dark.svg"
  ];
  return (
    <div>
      <div id="big-image">
        <img src={bigImages[selectedImage]} />
      </div>
      <div className="small-images">
        {smallImages.map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
      <style >
        .small-images {
          margin: 0 auto;
        width: 1000px;
        margin-left: 450px;
        }
        .small-images img {
          max - width: 70px;
        max-height: 60px;
        margin-right: 40px;
        }
        #big-image {
          width: 1000px;
        margin: auto;
        margin-left: 300px;
        margin-bottom: 50px;
        }
      </style>
    </div>
  );
};

export default Test;
