import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, __dirname +  '../../../../src/assets/uploads/')  // Directory where files will be stored
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)  // File name
  }
});

// const fileFilter = (req: any, file: any, cb: any) => {
//   if (file.mimetype.startsWith('/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Not an image! Please upload an image.'), false);
//   }
// };

const upload = multer({
  storage: storage,
  //fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 10 } // 10MB limit
});

export default upload;
