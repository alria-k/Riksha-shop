import React from "react";
import { Blurhash } from "react-blurhash";
import { encode } from "blurhash";
import "./LazyImg.scss";

export function LazyImg({ src, alt, clsName }) {
  // const loadImage = async (src) =>
  //   new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.onload = () => resolve(img);
  //     img.onerror = (...args) => reject(args);
  //     img.src = src;
  //   });

  // const getImageData = (image) => {
  //   const canvas = document.createElement("canvas");
  //   canvas.width = image.width;
  //   canvas.height = image.height;
  //   const context = canvas.getContext("2d");
  //   context.drawImage(image, 0, 0);
  //   return context.getImageData(0, 0, image.width, image.height);
  // };

  // const encodeImage = async (url) => {
  //   const image = await loadImage(url);
  //   const imageData = getImageData(image);
  //   return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  // };

  // React.useEffect(() => {
  //   console.log(encodeImage(src));
  // }, src);

  return <img src={src} alt={alt} className={clsName} />;
}
