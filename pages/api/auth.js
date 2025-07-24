import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const filePath = path.join(process.cwd(), 'data', 'users.json');
  const users = JSON.parse(fs.readFileSync(filePath));
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) res.status(200).json({ authenticated: true, userId: user.id });
  else res.status(401).json({ authenticated: false });
}