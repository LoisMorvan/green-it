import request from 'supertest';
import app from '../server';
import fs from 'fs';
import path from 'path';
import { describe, test, beforeAll, expect } from 'vitest';

describe('Tests pour les routes d\'images', () => {
  const UPLOADS_DIR = path.join(__dirname, '../../uploads');
  const testImagePath = path.join(__dirname, 'test-image.jpg');

  beforeAll(() => {
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
  });

  test('Doit uploader une image', async () => {
    const response = await request(app)
      .post('/images/upload')
      .attach('image', testImagePath);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('filename');

    const uploadedFilePath = path.join(UPLOADS_DIR, response.body.filename);
    expect(fs.existsSync(uploadedFilePath)).toBe(true);
  });

  test('Doit récupérer la liste des images', async () => {
    const response = await request(app).get('/images');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('Doit supprimer une image', async () => {
    const uploadResponse = await request(app)
      .post('/images/upload')
      .attach('image', testImagePath);

    const filename = uploadResponse.body.filename;
    const deleteResponse = await request(app).delete(`/images/delete/${filename}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.message).toBe('Image supprimée avec succès');
  });

  test('Doit retourner une erreur si l\'image à supprimer n\'existe pas', async () => {
    const response = await request(app).delete('/images/delete/inexistante.webp');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Image introuvable');
  });
});