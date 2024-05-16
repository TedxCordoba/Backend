const validatePodcast = (podcast) => {
        // Verificar si la URL de audio es válida
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (!urlRegex.test(podcast)) {
            throw new Error('La URL de audio del podcast es inválida.');
        }
    
        // Verificar la extensión del archivo de audio
        const audioExtensions = ['mp3', 'm4a', 'ogg', 'wav']; // Extensiones de archivo de audio permitidas
        const urlParts = podcast.split('.');
        const fileExtension = urlParts[urlParts.length - 1].toLowerCase();
        if (!audioExtensions.includes(fileExtension)) {
            throw new Error('La extensión del archivo de audio no es válida.');
        }

        return true;
    };

module.exports = { validatePodcast };