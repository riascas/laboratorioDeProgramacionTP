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
//para que el menu aparezca en todas las paginas sin que se repita el codigo
include 'includes/Includes.php'; 

//  Logica del Enrutador Simple
// Define qué vista se debe cargar basándose en la URL.
// La variable $view recibirá el valor del parámetro 'view de la URL por ejemplo ?view=reportes.
// Si el parámetro 'view' NO EXISTE, se le asigna el valor por defecto 'inicio'
$view = isset($_GET['view']) ? $_GET['view'] : 'inicio';

// Imprime la etiqueta <div> de Bootstrap que contendrá el contenido dinámico.
echo '<div class="container mt-4">';

// Mapeo de vistas: Esto evita que carguen archivos maliciosos
// Este bloque decide que archivo (vista) incluir basandose en el valor de $view.

switch($view){
    case "reportes";
    //Incluye el contenido del archivo reportes
        include "vistas/Reportes.php";
        break;
    case "alertas";
    //Incluye el contenido del archivo alertas
        include "vistas/Alertas.php";
        break;
    case "catalogo";
    //Incluye el contenido del archivo catalogo
        include "vistas/Catalogo.php";
        break;
    case "inicio";
    default: // o sino especifica ninguna view
    // Muestra un mensaje simple de bienvenida
        echo '<h2 class="text-center mt-5"> Bienvenido al Módulo de Coordinador IT</h2>';
        echo '<p class="text-center">Seleccione una opción del menú superior para acceder a las funcionalidades.</p>';
        break;  
}

echo '</div>'; // Cierre del contenedor principal
?>