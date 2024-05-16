const validateVideo = (file) => {
    // Expresión regular para validar una URL
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    // Verificar si la entrada es una URL válida
    if (!urlRegex.test(file)) {
        throw new Error("URL de video inválida.");
    }

    // Verificar si el archivo es un video
    const videoExtensions = ['mp4', 'avi', 'mov', 'mkv']; // Extensiones de video permitidas
    const fileExtension = file.split('.').pop().toLowerCase(); // Obtener la extensión del archivo en minúsculas
    if (videoExtensions.includes(fileExtension)) {
        return true;
    }

    // Si no es ni un video ni una imagen, lanzar un error
    throw new Error("El video no es válido.");
}

module.exports = { validateVideo };