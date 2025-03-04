document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario
    const email = document.querySelector('input[name="email"]').value;
    const comentario = document.querySelector(
      'textarea[name="comentario"]'
    ).value;
    // Guardar datos en localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("comentario", comentario);
    alert("Formulario enviado");
    // Limpiar el formulario
    form.reset();
  });

  document
    .getElementById("usuario-registrado")
    .addEventListener("change", function () {
      var registroOpcion = document.getElementById("registro-opcion");
      if (this.value === "no") {
        registroOpcion.style.display = "block";
        document
          .getElementById("desea-registrarse")
          .setAttribute("required", "required");
      } else {
        registroOpcion.style.display = "none";
        document
          .getElementById("desea-registrarse")
          .removeAttribute("required");
      }
    });

  document
    .getElementById("contacto-representante")
    .addEventListener("change", function () {
      var preferenciaContacto = document.getElementById("preferencia-contacto");
      if (this.value === "email" || this.value === "telefono") {
        preferenciaContacto.style.display = "block";
        document
          .getElementById("preferencia")
          .setAttribute("required", "required");
      } else {
        preferenciaContacto.style.display = "none";
        document.getElementById("preferencia").removeAttribute("required");
      }
    });
});
