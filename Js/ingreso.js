document.addEventListener("DOMContentLoaded", () => {
  // Manejo del formulario de usuario registrado
  const loginForm = document.querySelector('form[action="#"]');
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    // Validación estática para "admin" - "admin"
    if (username === "admin" && password === "admin") {
      alert("Ingreso exitoso");
    } else {
      // Obtener datos de usuarios registrados desde localStorage
      const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

      // Verificar si el usuario y la contraseña coinciden con algún usuario registrado
      const user = storedUserData.find(
        (user) => user.newUsername === username && user.newPassword === password
      );

      if (user) {
        alert("Ingreso exitoso");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  });

  // Manejo del formulario de registro
  const registerForm = document.querySelector('form[action="#register"]');
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const newUsername = document.querySelector("#new-username").value;
    const newPassword = document.querySelector("#new-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;

    // Validación de contraseñas coincidentes
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Obtener datos de usuarios registrados desde localStorage
    let storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

    // Asegurarse de que storedUserData sea un array
    if (!Array.isArray(storedUserData)) {
      storedUserData = [];
    }

    // Guardar nuevo usuario en localStorage
    const newUser = {
      nombre,
      apellido,
      email,
      newUsername,
      newPassword,
    };
    storedUserData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(storedUserData));
    alert("Registro exitoso");
    // Limpiar el formulario
    registerForm.reset();
  });
});
