import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import pkg from "lodash";

const { sampleSize } = pkg;
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ Create uploads folder if not exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

// ✅ Upload multiple images
app.post("/uploadMultiple", upload.array("images", 10), (req, res) => {
  res.json({ message: "Multiple images uploaded successfully" });
});

// ✅ Get up to 3 random images
app.get("/getRandomImages", (req, res) => {
  fs.readdir("uploads", (err, files) => {
    if (err) return res.status(500).json({ error: "Unable to read files" });

    const randomImages = sampleSize(files, 3);
    const fullPaths = randomImages.map(file => `http://localhost:8000/uploads/${file}`);
    res.json(fullPaths);
  });
});

// ✅ Save random dog image
app.post("/uploadDogImage", async (req, res) => {
  const { imageUrl } = req.body;
  if (!imageUrl) return res.status(400).json({ error: "No image URL" });

  const fileName = `dog-${Date.now()}.jpg`;
  const fileStream = fs.createWriteStream(`uploads/${fileName}`);

  const https = imageUrl.startsWith("https") ? await import("https") : await import("http");

  https.default.get(imageUrl, (response) => {
    response.pipe(fileStream);
    fileStream.on("finish", () => {
      fileStream.close();
      res.json({ message: "Dog image saved successfully" });
    });
  }).on("error", () => {
    res.status(500).json({ error: "Error saving dog image" });
  });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
