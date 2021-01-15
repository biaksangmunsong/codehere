const imageSrc = path => {
    const imageName = path.split("/")[path.split("/").length - 1]

    if (path.startsWith("http")){
        return path
    }
    
    if (imageName.includes(".jpg") || imageName.includes(".JPG") || imageName.includes(".jpeg") || imageName.includes(".JPEG") || imageName.includes(".png") || imageName.includes(".PNG")){
        return require(`../public/images/${ imageName }?&size=500`)
    }
    
    if (imageName.includes(".svg") || imageName.includes(".SVG")){
        return require(`../public/images/${ imageName }`)
    }

    return path
}

export default imageSrc