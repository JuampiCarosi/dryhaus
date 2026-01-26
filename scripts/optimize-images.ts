#!/usr/bin/env bun

import sharp from "sharp";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const assetsDir = path.join(__dirname, "..", "public", "assets");
const outputDir = path.join(__dirname, "..", "public", "assets", "optimized");

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageFiles = fs
  .readdirSync(assetsDir)
  .filter(
    (file) =>
      file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg"),
  );

console.log("Found images to optimize:", imageFiles);

interface OptimizationResult {
  original: number;
  webp: number;
  avif: number;
}

async function optimizeImage(
  filename: string,
): Promise<OptimizationResult | null> {
  const inputPath = path.join(assetsDir, filename);
  const baseName = path.parse(filename).name;

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = Math.round(originalStats.size / 1024);

    // Create WebP version
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath)
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(webpPath);

    // Create AVIF version (even better compression)
    const avifPath = path.join(outputDir, `${baseName}.avif`);
    await sharp(inputPath)
      .avif({
        quality: 80,
        effort: 4,
      })
      .toFile(avifPath);

    // Get optimized file sizes
    const webpStats = fs.statSync(webpPath);
    const avifStats = fs.statSync(avifPath);

    const webpSizeKB = Math.round(webpStats.size / 1024);
    const avifSizeKB = Math.round(avifStats.size / 1024);

    console.log(`\n${filename}:`);
    console.log(`  Original: ${originalSizeKB}KB`);
    console.log(
      `  WebP:     ${webpSizeKB}KB (${Math.round((1 - webpSizeKB / originalSizeKB) * 100)}% smaller)`,
    );
    console.log(
      `  AVIF:     ${avifSizeKB}KB (${Math.round((1 - avifSizeKB / originalSizeKB) * 100)}% smaller)`,
    );

    return {
      original: originalSizeKB,
      webp: webpSizeKB,
      avif: avifSizeKB,
    };
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, (error as Error).message);
    return null;
  }
}

async function optimizeAllImages(): Promise<void> {
  console.log("Starting image optimization...\n");

  const results: (OptimizationResult & { filename: string })[] = [];
  for (const filename of imageFiles) {
    const result = await optimizeImage(filename);
    if (result) {
      results.push({ filename, ...result });
    }
  }

  // Summary
  const totalOriginal = results.reduce((sum, r) => sum + r.original, 0);
  const totalWebP = results.reduce((sum, r) => sum + r.webp, 0);
  const totalAVIF = results.reduce((sum, r) => sum + r.avif, 0);

  console.log("\n" + "=".repeat(50));
  console.log("OPTIMIZATION SUMMARY:");
  console.log("=".repeat(50));
  console.log(`Total original size: ${totalOriginal}KB`);
  console.log(
    `Total WebP size:     ${totalWebP}KB (${Math.round((1 - totalWebP / totalOriginal) * 100)}% smaller)`,
  );
  console.log(
    `Total AVIF size:     ${totalAVIF}KB (${Math.round((1 - totalAVIF / totalOriginal) * 100)}% smaller)`,
  );
  console.log(`Space saved (WebP):  ${totalOriginal - totalWebP}KB`);
  console.log(`Space saved (AVIF):  ${totalOriginal - totalAVIF}KB`);
  console.log("\nOptimized images saved to: public/assets/optimized/");
}

optimizeAllImages().catch(console.error);
