import { useState } from "react";
import axios from "axios";
import "../styles/gestionImages.css";

const API_UPLOAD_URL = "http://localhost:5000/images/upload";
const MAX_FILE_SIZE = 100 * 1024; // 100 Ko

type Props = {
  onUploadSuccess: () => void;
  setSnackbar: (message: string | null) => void;
};

const ImageUploader = ({ onUploadSuccess, setSnackbar }: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setSnackbar("Fichier trop volumineux (max 100Ko)");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setSnackbar("Veuillez sélectionner un fichier !");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post(API_UPLOAD_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSnackbar("Image ajoutée avec succès !");
      setFile(null);
      onUploadSuccess();
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      setSnackbar("Erreur lors de l'ajout de l'image.");
    }
  };

  return (
    <div className="upload-section">
      <h3>Ajouter une image</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload} disabled={!file}>
        Ajouter
      </button>
    </div>
  );
};

export default ImageUploader;
