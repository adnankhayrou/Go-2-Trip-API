const path = require('path');
const fs = require('fs');
const projectRoot = process.cwd();

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.random() < 0.5 ? 3 : 4; 
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}


function storeImageGetPath(image){
    
    return new Promise((resolve, reject) => {
        const mimeTypeRegex = /^data:image\/(\w+);base64,/;
        const mimeMatch = image.match(mimeTypeRegex);
        if (!mimeMatch) {
           resolve(new Error('Invalid image data'));
        }
        const mimeType = mimeMatch[1];
        const base64Data = image.replace(mimeTypeRegex, '');

        const timestamp = Date.now();
        const filename = `image_${timestamp+generateRandomString()}.${mimeType}`;

        const imagePath = path.join(projectRoot, 'public', 'images','uploads', filename);
        let imageUrl;
        fs.writeFile(imagePath, base64Data, 'base64', (err) => {
            if (err) {
                console.log(err);
                reject(new Error('Failed to store the image'));
            } else {
                imageUrl = `/uploads/${filename}`;
                resolve(imageUrl);
            }
        });
    })
}


module.exports = {
    storeImageGetPath
}