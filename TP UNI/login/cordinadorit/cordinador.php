<?php
// INICIO DE PÁGINA 
// Asegura que las sesiones se inicien para usar variables como $_SESSION['user']
session_start();
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coordinador</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    
</body>
</html>

<?php
// Incluye el menu de navegación (navbar.php)
include 'includes/Includes.php'; 

//  Logica del Enrutador Simple 
$view = isset($_GET['view']) ? $_GET['view'] : 'inicio';

// Contenedor principal de Bootstrap
echo '<div class="container mt-4">';

// Mapeo de vistas: Esto evita que carguen archivos maliciosos

switch($view){
    case "reportes";
        include "vistas/Reportes.php";
        break;
    case "alertas";
        include "vistas/Alertas.php";
        break;
    case "catalogo";
        include "vistas/Catalogo.php";
        break;
    case "inicio";
    default:
        echo '<h2 class="text-center mt-5">Bienvenido al Módulo de Coordinador IT</h2>';
        echo '<p class="text-center">Seleccione una opción del menú superior para acceder a las funcionalidades.</p>';
        break;  
}

echo '</div>'; // Cierre del contenedor principal
?>