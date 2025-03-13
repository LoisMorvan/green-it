import express from 'express';
import multer from 'multer';
import { uploadImage, getImages, deleteImage } from '../controllers/imageController';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/', getImages);
router.delete('/delete/:imageName', deleteImage);
router.use('/uploads', express.static('uploads', { maxAge: '1y', immutable: true }));

export default router;
