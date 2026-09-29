import { mkdir, copyFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("index.html", "dist/index.html");
await copyFile("dream-select.html", "dist/dream-select.html");
await copyFile("heaven-select.html", "dist/heaven-select.html");
console.log("WaCa static site built to dist/");
