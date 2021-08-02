import multer from "multer"
import path from "path"
import crypto from "crypto"
import {resolve, extname} from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


 const storage = multer.diskStorage({
    destination: resolve(__dirname, '..', 'public', 'uploads'),
    filename: (req, file, cb) => {
        crypto.randomBytes(32, (err, value) => {
            if (err) {
                cb(err);
            }
            return cb(null, value.toString('hex') + extname(file.originalname));
        })
    }
});

export default storage
