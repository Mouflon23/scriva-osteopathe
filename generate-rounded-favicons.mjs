import favicons from "favicons";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "public/images/logo.jpg");
const output = path.join(__dirname, "public");

const configuration = {
  path: "/",
  appName: "Scriva Ostéopathe",
  appShortName: "Scriva",
  appDescription: "Mélissa Scriva - Ostéopathe D.O. à Aix-en-Provence",
  background: "#ffffff",
  theme_color: "#4a90e2",
  appleStatusBarStyle: "default",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/",
  version: "1.0",
  logging: true,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: false,
    windows: false,
    yandex: false,
  },
  // Configuration pour des icônes très arrondies
  maskable: true,
  // Style d'icône avec des coins très arrondis
  iconStyle: "rounded",
  // Couleur de fond pour les icônes arrondies
  iconBackground: "#ffffff",
  // Rayon de bordure très arrondi (50% pour des coins très arrondis)
  iconRadius: 0.5,
  // Utiliser des icônes adaptatives
  adaptive: true,
  // Couleur d'accent pour les icônes adaptatives
  accent_color: "#4a90e2",
  // Mode d'icône adaptative avec plus de padding
  adaptiveIconPadding: 0.15,
  // Style de masque pour les icônes Android avec coins arrondis
  maskableIconPadding: 0.15,
  // Utiliser un style circulaire pour certaines icônes
  iconShape: "circle",
};

(async () => {
  try {
    const response = await favicons(source, configuration);

    // Créer le dossier de sortie s'il n'existe pas
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }

    // Écrire les fichiers
    await Promise.all(
      response.images.map(async (image) => {
        await fs.promises.writeFile(
          path.join(output, image.name),
          image.contents
        );
        console.log(`✓ Généré: ${image.name}`);
      })
    );

    await Promise.all(
      response.files.map(async (file) => {
        await fs.promises.writeFile(
          path.join(output, file.name),
          file.contents
        );
        console.log(`✓ Généré: ${file.name}`);
      })
    );

    console.log("\n🎉 Favicons très arrondis générés avec succès !");
    console.log("📁 Fichiers créés dans le dossier public/");
    console.log(
      "🔵 Les icônes utilisent un style très arrondi avec des coins de 50%"
    );
    console.log("⭕ Certaines icônes utilisent un style circulaire");
  } catch (error) {
    console.error("❌ Erreur lors de la génération des favicons:", error);
  }
})();
