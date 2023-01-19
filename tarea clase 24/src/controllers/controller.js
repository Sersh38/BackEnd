import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [
  {
    name: "Julieta",
  },
  {
    name: "Nacho",
  },
  {
    name: "Alexis",
  },
];

export const log = (req, res) => {
  const { name } = req.body;

  const index = users.findIndex((aUser) => aUser.name === name);

  if (index < 0) res.status(401).json({ msg: "You're not authorized" });
  else {
    req.session.name = name;
    res.redirect("/home");
  }
};

export const logget = (req, res) => {
  const name = req.session?.name;
  if (name) {
    res.redirect("/home");
  } else {
    res.sendFile(path.join(__dirname, "../../vistas/index.html"));
  }
};

export const logout = (req, res) => {
  const name = req.session?.name;
  if (name) {
    req.session.destroy((err) => {
      if (!err) {
        res.render(path.join(__dirname, "../../vistas/log.ejs"), {
          name,
        });
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.redirect("/");
  }
};

export const session = (req, res) => {
  res.render(path.join(__dirname, "../../views/pages/home.ejs"), {
    nombre: req.session.nombre,
  });
};