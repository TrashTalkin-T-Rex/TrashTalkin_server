import axios from 'axios'
import { response } from 'express'
import fs from "fs"



const testImage = async (req, res) => {
    console.log("end point hit")
    res.send("eendpoint hit")
}

const ImageDetails = async (req, res) => {
    console.log("hello");
    const files = req.files; // Access files here
    console.log(files);

    // Optional: Send back file details as a response
    res.json({
        message: "Files received",
        files: files,
    });
    console.log(files[0].path, files[0].encoding)
    const image = fs.readFileSync(files[0].path, {
        encoding: "base64"
    });
    try {
        axios({
            method: "POST",
            url: "https://detect.roboflow.com/yolov5.taco/1",
            params: {
                api_key: "h4q7xD7vbcNhoxdt05lE"
            },
            data: image,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error.message);
                console.log(response.data)
            })
            fs.unlinkSync(files[0].path)
    } catch (error) {
        console.log(error)
    }
};

export {
    testImage,
    ImageDetails
}