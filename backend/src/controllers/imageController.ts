import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const UPLOADS_DIR = path.join(__dirname, '../../uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Fonction d'upload d'image
export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'Aucune image envoyée' });
      return;
    }

    const { buffer, originalname } = req.file;
    const filename = `${Date.now()}-${originalname.replace(/\.[^/.]+$/, "")}.webp`;
    const filePath = path.join(UPLOADS_DIR, filename);

    await sharp(buffer)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(filePath);

    res.json({ message: 'Image optimisée et uploadée avec succès', filename });
  } catch (error) {
    console.error("Erreur d'upload:", error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Fonction de récupération des images
export const getImages = (_req: Request, res: Response) => {
  fs.readdir(UPLOADS_DIR, (err, files) => {
    if (err) {
      console.error("Erreur de lecture du dossier:", err);
      res.status(500).json({ message: 'Erreur lors de la récupération des images' });
      return;
    }
    res.json(files);
  });
};

// Fonction de suppression d'image
export const deleteImage = (req: Request, res: Response) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(UPLOADS_DIR, imageName);

  if (!fs.existsSync(imagePath)) {
    res.status(404).json({ message: "Image introuvable" });
    return;
  }

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Erreur de suppression:", err);
      res.status(500).json({ message: "Erreur lors de la suppression" });
      return;
    }
    res.json({ message: "Image supprimée avec succès" });
  });
};
