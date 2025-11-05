import React, { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageWithLoader: React.FC<Props> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-xl" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        } ${className || ""}`}
      />
    </div>
  );
};

export default ImageWithLoader;
