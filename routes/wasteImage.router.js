import { Router } from "express";
import { ImageDetails, testImage } from "../controllers/wasteImage.controller.js";
import multer from 'multer' 

const upload = multer({dest: "uploads/"})

const router = Router()


router.route('/test').get(testImage)
router.route('/details').post(upload.array("images", 10),ImageDetails)


export default router