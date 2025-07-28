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
  // Configuration pour des icônes arrondies
  maskable: true,
  // Style d'icône personnalisé pour des coins arrondis
  iconStyle: "rounded",
  // Couleur de fond pour les icônes arrondies
  iconBackground: "#ffffff",
  // Rayon de bordure pour les icônes arrondies (20% du rayon)
  iconRadius: 0.2,
  // Utiliser des icônes adaptatives
  adaptive: true,
  // Couleur d'accent pour les icônes adaptatives
  accent_color: "#4a90e2",
  // Mode d'icône adaptative
  adaptiveIconPadding: 0.1,
  // Style de masque pour les icônes Android
  maskableIconPadding: 0.1,
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

    console.log("\n🎉 Favicons arrondis générés avec succès !");
    console.log("📁 Fichiers créés dans le dossier public/");
    console.log(
      "🔵 Les icônes utilisent un style arrondi avec des coins de 20%"
    );
  } catch (error) {
    console.error("❌ Erreur lors de la génération des favicons:", error);
  }
})();
