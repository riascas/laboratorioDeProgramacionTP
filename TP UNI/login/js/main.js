document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el rol desde localStorage
  const rol = localStorage.getItem("rolUsuario");

  if (!rol) {
    // Si no hay rol, volver al login
    window.location.href = "login.html";
    return;
  }

  // Ocultamos todas las opciones específicas
  document.querySelectorAll('.role-soporte, .role-stock, .role-coordinador, .role-admin')
    .forEach(el => el.style.display = "none");

  // Mostramos solo las del rol actual
  document.querySelectorAll('.role-' + rol).forEach(el => {
    el.style.display = "block";
  });

  // Actualizamos el texto del rol en el navbar
  document.getElementById("rolUsuario").textContent = 
    "Rol: " + rol.charAt(0).toUpperCase() + rol.slice(1);
});

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("rolUsuario");
}
