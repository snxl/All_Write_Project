import multer from "multer"

import multerConfig from "../config/multer.js"

const upload = multer({storage: multerConfig})

const opcoesMulter = {

    singlePublicUploads: upload.single("myFile")

}


export default opcoesMulter
