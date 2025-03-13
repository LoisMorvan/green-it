import "../styles/gestionImages.css";

const IMAGE_BASE_URL = "http://localhost:5000/images/uploads/";

type Props = {
  images: string[];
  onDelete: (imageName: string) => void;
};

const ImageList = ({ images, onDelete }: Props) => {
  return (
    <div className="images-section">
      <h3>Images enregistrées</h3>
      <div className="images-list">
        {images.map((image) => (
          <div key={image} className="image-item">
            <img
              src={`${IMAGE_BASE_URL}${image}`}
              alt="Uploaded"
              loading="lazy"
              decoding="async"
            />
            <button type="button" onClick={() => onDelete(image)}>
              🗑️ Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
