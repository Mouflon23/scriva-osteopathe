import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "public/images/logo.jpg");
const output = path.join(__dirname, "public/images/favicon");

// Fonction pour créer un masque avec coins arrondis
async function createRoundedMask(size, radiusPercent = 0.2) {
  const radius = Math.round(size * radiusPercent);

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="rounded">
          <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" />
        </clipPath>
      </defs>
      <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white" />
    </svg>
  `;

  return Buffer.from(svg);
}

async function generateRoundedFavicon(size, style = "rounded") {
  try {
    // Charger et redimensionner l'image source
    const imageBuffer = await sharp(source)
      .resize(size, size, {
        fit: "cover",
        position: "center",
      })
      .png()
      .toBuffer();

    // Créer l'image finale avec des coins arrondis
    const roundedImage = await sharp(imageBuffer)
      .composite([
        {
          input: await createRoundedMask(size, 0.2),
          blend: "dest-in",
        },
      ])
      .png();

    return roundedImage;
  } catch (error) {
    console.error(`Erreur lors de la génération de la taille ${size}:`, error);
    return null;
  }
}

async function generateAllFavicons() {
  console.log("🎨 Génération de favicons personnalisés arrondis...\n");

  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  // Générer les favicons standard
  const standardSizes = [16, 32, 48];
  for (const size of standardSizes) {
    const favicon = await generateRoundedFavicon(size, "rounded");
    if (favicon) {
      const filename = `favicon-${size}x${size}.png`;
      await favicon.toFile(path.join(output, filename));
      console.log(`✓ Généré: ${filename}`);
    }
  }

  // Générer favicon.ico (32x32)
  const faviconIco = await generateRoundedFavicon(32, "rounded");
  if (faviconIco) {
    await faviconIco.toFile(path.join(output, "favicon.ico"));
    console.log(`✓ Généré: favicon.ico`);
  }

  // Générer les Apple Touch Icons
  const appleSizes = [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024];
  for (const size of appleSizes) {
    const appleIcon = await generateRoundedFavicon(size, "rounded");
    if (appleIcon) {
      const filename = `apple-touch-icon-${size}x${size}.png`;
      await appleIcon.toFile(path.join(output, filename));
      console.log(`✓ Généré: ${filename}`);
    }
  }

  // Apple Touch Icon principal
  const appleMain = await generateRoundedFavicon(180, "rounded");
  if (appleMain) {
    await appleMain.toFile(path.join(output, "apple-touch-icon.png"));
    console.log(`✓ Généré: apple-touch-icon.png`);

    // Version précomposée
    await appleMain.toFile(
      path.join(output, "apple-touch-icon-precomposed.png")
    );
    console.log(`✓ Généré: apple-touch-icon-precomposed.png`);
  }

  // Générer les Android Chrome Icons
  const androidSizes = [36, 48, 72, 96, 144, 192, 256, 384, 512];
  for (const size of androidSizes) {
    const androidIcon = await generateRoundedFavicon(size, "rounded");
    if (androidIcon) {
      const filename = `android-chrome-${size}x${size}.png`;
      await androidIcon.toFile(path.join(output, filename));
      console.log(`✓ Généré: ${filename}`);
    }
  }

  console.log("\n🎉 Favicons personnalisés arrondis générés avec succès !");
  console.log(`📁 Fichiers créés dans le dossier ${output}`);
  console.log(
    "🔵 Les icônes utilisent un style arrondi personnalisé avec des coins de 20%"
  );
}

// Exécuter la génération
generateAllFavicons().catch(console.error);
