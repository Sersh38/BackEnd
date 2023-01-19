import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loginmiddle = (req, res, next) => {
  if (req.session.nombre) next();
  else res.sendFile(path.join(__dirname, "../../vistas/index.html"));
};