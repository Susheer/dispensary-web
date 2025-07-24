import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'prescription.json');

export default function handler(req, res) {
  let prescriptions = JSON.parse(fs.readFileSync(filePath));

  if (req.method === 'GET') {
    return res.status(200).json(prescriptions);
  }

  if (req.method === 'POST') {
    if (prescriptions.length >= 100) return res.status(400).json({ error: 'Limit reached' });

    const newPrescription = { ...req.body, id: Date.now().toString() };
    prescriptions.push(newPrescription);
    fs.writeFileSync(filePath, JSON.stringify(prescriptions, null, 2));
    return res.status(201).json(newPrescription);
  }

  if (req.method === 'PUT') {
    const { id, ...updates } = req.body;
    const index = prescriptions.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Not found' });

    prescriptions[index] = { ...prescriptions[index], ...updates };
    fs.writeFileSync(filePath, JSON.stringify(prescriptions, null, 2));
    return res.status(200).json({ status: 'updated' });
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    const filtered = prescriptions.filter(p => p.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));
    return res.status(200).json({ status: 'deleted' });
  }

  return res.status(405).end();
}