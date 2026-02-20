import { useState } from "react";
import PropTypes from "prop-types";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p className="carousel-empty">No images to display.</p>;
  }

  const safeIndex = currentIndex >= images.length ? 0 : currentIndex;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-track">
        <button className="carousel-btn" onClick={handlePrevious} aria-label="Previous image">&#8592;</button>
        <img
          src={images[safeIndex]}
          alt={`Carousel image ${safeIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn" onClick={handleNext} aria-label="Next image">&#8594;</button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            aria-label={`Go to image ${index + 1}`}
            className={`carousel-dot ${index === safeIndex ? "carousel-dot--active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;