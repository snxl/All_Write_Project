import multer from "multer"

import storage from "../config/multer.js"

const upload = multer({storage})

const opcoesMulter = {

    singlePublicUploads: upload.single("myFile"),

    any: upload.any()

}


export default opcoesMulter
