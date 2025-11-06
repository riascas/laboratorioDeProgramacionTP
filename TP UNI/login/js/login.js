// Usuarios simulados con roles
const usuarios = [
  { user: "juan", pass: "1234", rol: "soporte" },
  { user: "Alex", pass: "1234", rol: "soporte" },
  { user: "maria", pass: "1234", rol: "stock" },
  { user: "pedro", pass: "1234", rol: "coordinador" },
  { user: "admin", pass: "admin", rol: "admin" }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const userFound = usuarios.find(u => u.user === username && u.pass === password);

  if (userFound) {
  // Guardamos toda la información del usuario logueado
    localStorage.setItem("usuarioLogueado", JSON.stringify(userFound));


    // Redirigir según el rol
    switch (userFound.rol) {
      case "soporte":
        window.location.href = "soporte.html";
        break;
      case "stock":
        window.location.href = "stock.html";
        break;
      case "coordinador":
        window.location.href = "cordinadorit/cordinador.php";
        break;
      case "admin":
        window.location.href = "admin.html";
        break;
      default:
        window.location.href = "pagPrincipal.html"; // fallback
        break;
    }

  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
});