#!/usr/bin/env bun

import sharp from "sharp";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const logoPath = path.join(__dirname, "..", "public", "assets", "logo.png");
const publicDir = path.join(__dirname, "..", "public");

// Different favicon sizes and formats
const faviconSizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 48, name: "favicon-48x48.png" },
  { size: 192, name: "android-chrome-192x192.png" },
  { size: 512, name: "android-chrome-512x512.png" },
];

async function createAllFavicons(): Promise<void> {
  try {
    console.log("Creating all favicon formats from logo.png...");

    // Check if logo exists
    if (!fs.existsSync(logoPath)) {
      throw new Error(`Logo file not found at ${logoPath}`);
    }

    // Get original image info
    const metadata = await sharp(logoPath).metadata();
    console.log(`Original logo: ${metadata.width}x${metadata.height}`);

    // Create ICO file (16x16, 32x32, 48x48)
    await sharp(logoPath)
      .resize(48, 48, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toFile(path.join(publicDir, "favicon.ico"));

    console.log("✅ favicon.ico created");

    // Create PNG favicons
    for (const { size, name } of faviconSizes) {
      await sharp(logoPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(path.join(publicDir, name));

      console.log(`✅ ${name} created`);
    }

    // Create Apple touch icon
    await sharp(logoPath)
      .resize(180, 180, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toFile(path.join(publicDir, "apple-touch-icon.png"));

    console.log("✅ apple-touch-icon.png created");

    // Create web app manifest
    const manifest = {
      name: "DryHaus",
      short_name: "DryHaus",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
    };

    fs.writeFileSync(
      path.join(publicDir, "site.webmanifest"),
      JSON.stringify(manifest, null, 2),
    );

    console.log("✅ site.webmanifest created");
    console.log("\n🎉 All favicon formats created successfully!");
    console.log("Files created:");
    console.log("- favicon.ico");
    console.log("- favicon-16x16.png");
    console.log("- favicon-32x32.png");
    console.log("- favicon-48x48.png");
    console.log("- android-chrome-192x192.png");
    console.log("- android-chrome-512x512.png");
    console.log("- apple-touch-icon.png");
    console.log("- site.webmanifest");
  } catch (error) {
    console.error("Error creating favicons:", (error as Error).message);
    process.exit(1);
  }
}

await createAllFavicons();
