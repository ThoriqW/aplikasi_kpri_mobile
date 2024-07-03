const multer = require('multer');
const path = require('path');

// Setup storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/profiles'); // Lokasi penyimpanan file di server
  },
  filename: function (req, file, cb) {
    cb(null, 'profile-' + Date.now() + path.extname(file.originalname)); // Penamaan file di server
  }
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Batasan ukuran file (misalnya 1MB)
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb); // Fungsi untuk memeriksa tipe file
  }
}).single('photo'); // 'photo' adalah nama field dari form untuk mengunggah foto

// Fungsi untuk memeriksa tipe file
function checkFileType(file, cb) {
  // Diperbolehkan ekstensi file
  const filetypes = /jpeg|jpg|png/;
  // Periksa ekstensi file
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Periksa tipe MIME
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload;
