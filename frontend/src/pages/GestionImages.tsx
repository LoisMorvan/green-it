import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styles/gestionImages.css";
import ImageUploader from "../components/ImageUploader";
import ImageList from "../components/ImageList";
import Snackbar from "../components/Snackbar";

const API_IMAGES_URL = "http://localhost:5000/images/";
const API_DELETE_URL = "http://localhost:5000/images/delete/";

const GestionImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const [snackbar, setSnackbar] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    try {
      const response = await axios.get<string[]>(API_IMAGES_URL);
      setImages(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des images", error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleDelete = async (imageName: string) => {
    try {
      await axios.delete(API_DELETE_URL + imageName);
      setSnackbar("Image supprimée avec succès !");
      fetchImages();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      setSnackbar("Erreur lors de la suppression.");
    }
  };

  return (
    <div className="gestion-container">
      <h2>Gestion des images</h2>
      <div className="gestion-content">
        <ImageUploader
          onUploadSuccess={fetchImages}
          setSnackbar={setSnackbar}
        />
        <ImageList images={images} onDelete={handleDelete} />
      </div>
      <Snackbar message={snackbar} onClose={() => setSnackbar(null)} />
    </div>
  );
};

export default GestionImages;
