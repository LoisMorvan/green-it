import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRoutes from './routes/imageRoutes';
import path from 'path';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/sitemap.xml', (_req, res) => {
  res.sendFile(path.join(__dirname, '../sitemap.xml'));
});

app.use('/images', imageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));

export default app;
