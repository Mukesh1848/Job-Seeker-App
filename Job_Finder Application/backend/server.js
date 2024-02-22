import app from './app.js';
import cloudinary from 'cloudinary'; // NPM package

/*
 ABOUT CLOUDINARY - Cloudinary is a powerful media API for websites and mobile apps alike, Cloudinary enables developers to efficiently manage, transform, optimize, and deliver images and videos through multiple CDNs. Ultimately, viewers enjoy responsive and personalized visual-media experiences—irrespective of the viewing device.  */

//  V2 - VERSION 
// config - configuration of cloudinary

cloudinary.v2.config({
        cloud_name : process.env.CLOUDINARY_CLIENT_NAME,
        api_key: process.env.CLOUDINARY_CLIENT_API,
        api_secret: process.env.CLOUDINARY_CLIENT_SCERET,
});

// server connection

app.listen(process.env.PORT,()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
});
