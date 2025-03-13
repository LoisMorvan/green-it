import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/carousel.css";

const API_URL = "http://localhost:5000/images";
const IMAGE_BASE_URL = "http://localhost:5000/images/uploads/";

const Carousel = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get<string[]>(API_URL)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des images", error);
      });
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (images.length === 0) {
    return <p>Aucune image disponible</p>;
  }

  return (
    <div className="carousel">
      <button onClick={prevImage} className="button">
        ◀
      </button>
      <div className="image-container">
        <img
          src={IMAGE_BASE_URL + images[currentIndex]}
          alt="Carrousel"
          loading="lazy"
          className="image"
        />
      </div>
      <button onClick={nextImage} className="button">
        ▶
      </button>
    </div>
  );
};

export default Carousel;
