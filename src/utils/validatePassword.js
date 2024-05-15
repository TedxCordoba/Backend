const validatePassword = (newPassword) => {
    // Longitud mínima y máxima
    if (newPassword.length < 8 || newPassword.length > 20) {
      throw new Error("La contraseña debe tener entre 8 y 20 caracteres.");
    }
  
    // Caracteres especiales
    const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?/~`-]/;
    if (!specialCharacters.test(newPassword)) {
      throw new Error("La contraseña debe contener al menos un carácter especial.");
    }
  
    // Letras mayúsculas y minúsculas
    const uppercaseLetters = /[A-Z]/;
    const lowercaseLetters = /[a-z]/;
    if (!uppercaseLetters.test(newPassword) || !lowercaseLetters.test(newPassword)) {
      throw new Error("La contraseña debe contener al menos una letra mayúscula y una minúscula.");
    }
  
    // Números
    const numbers = /[0-9]/;
    if (!numbers.test(newPassword)) {
      throw new Error("La contraseña debe contener al menos un número.");
    }
  
    // La contraseña pasa todas las validaciones
    return true;
  };
  
  module.exports = { validatePassword };