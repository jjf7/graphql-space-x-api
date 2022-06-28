import React from "react";
import ImageGallery from "react-image-gallery";

const ImagesLaunch = ({ ships }) => {
  const images = ships.map((i) => {
    return i != null ? { original: i.image, thumbnail: i.image } : "";
  });

  return <ImageGallery items={images} />;
};

export default ImagesLaunch;
