import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "public", "uploads"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    console.log(uniqueName);
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10mb
  },
})

export default upload;
