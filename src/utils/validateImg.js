const validateImg = (img) => {
        // Expresión regular para validar una URL
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

        // Verificar si la entrada es una URL válida
        if (!urlRegex.test(img)) {
            throw new Error("URL de imagen inválida.");
        }
       // Verificar si el archivo es una imagen
       const imageExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Extensiones de imagen permitidas
        const fileExtension = img.split('.').pop().toLowerCase(); // Obtener la extensión del archivo en minúsculas
       if (!imageExtensions.includes(fileExtension)) {
          throw new Error("La imágen no es válida.");
       }
        return true;
    };

module.exports = { validateImg };