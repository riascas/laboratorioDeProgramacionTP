<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reportes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h3 class="text-center mb-4">Generación de Reportes 📈</h3>

<div class="card p-4 shadow-sm">
    <h4>Formulario de Filtro (100% PHP)</h4>
    <form action="coordinador.php" method="GET">
        <input type="hidden" name="view" value="reportes">
        <input type="hidden" name="action" value="run">
        
        <div class="row g-3">
            <div class="col-md-5"><label class="form-label">Fecha Inicio</label><input type="date" class="form-control" name="fecha_inicio" required></div>
            <div class="col-md-5"><label class="form-label">Fecha Fin</label><input type="date" class="form-control" name="fecha_fin" required></div>
            <div class="col-md-2 d-flex align-items-end"><button type="submit" class="btn btn-primary w-100">Generar</button></div>
        </div>
    </form>
</div>

<?php 
if (isset($_GET['action']) && $_GET['action'] == 'run') {
    // Captura los valores de los campos del formulario desde la URL
    // htmlspecialchars sanitiza el dato por seguridad.
    $inicio = htmlspecialchars($_GET['fecha_inicio']);
    $fin = htmlspecialchars($_GET['fecha_fin']);
    // Muestra los resultados simulados
    echo "<h4 class='mt-5'>Resultados del Reporte ($inicio a $fin)</h4>";
    // Aquí iría el código de la conexión a base de datos
    echo '<table class="table table-striped"><thead><tr><th>Movimiento</th><th>Artículo</th><th>Responsable</th></tr></thead><tbody>';
    echo '<tr><td>Asignación</td><td>Notebook SNB123</td><td>Ana Torres</td></tr>';
    echo '<tr><td>Consumo</td><td>Disco SSD</td><td>Técnico Alex</td></tr>';
    echo '</tbody></table>';
}
?>
</body>
</html>

Este archivo se carga cuando se elige $view reportes. 
Muestra un formulario y si el formulario fue enviado, procesa los datos y muestra resultados simulados.