<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h3 class="text-center mb-4">Gestión de Catálogos del Sistema</h3>

<p class="text-muted text-center">Aquí el Coordinador IT puede actualizar las listas de Proveedores, Tipos de Equipos, Marcas y Ubicaciones.</p>

<div class="row">
    <div class="col-md-4">
        <div class="card p-3 shadow-sm mb-3">
            <h5>Proveedores</h5>
            <p>Agregar, editar o eliminar proveedores.</p>
            <a href="coordinador.php?view=catalogo&tipo=proveedores" class="btn btn-sm btn-outline-secondary">Gestionar</a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card p-3 shadow-sm mb-3">
            <h5>Tipos de Equipo</h5>
            <p>Definir si es Notebook, PC, Monitor, etc.</p>
            <a href="coordinador.php?view=catalogo&tipo=equipos" class="btn btn-sm btn-outline-secondary">Gestionar</a>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card p-3 shadow-sm mb-3">
            <h5>Ubicaciones</h5>
            <p>Crear/modificar sedes o departamentos.</p>
            <a href="coordinador.php?view=catalogo&tipo=ubicaciones" class="btn btn-sm btn-outline-secondary">Gestionar</a>
        </div>
    </div>
</div>

<div class="mt-5" id="catalogo-detalle">
    <?php 
    $tipo_catalogo = isset($_GET['tipo']) ? $_GET['tipo'] : '';
    
    if ($tipo_catalogo === 'proveedores') {
        echo '<h4>Gestión de Proveedores</h4>';
        // Aquí iría el formulario de agregar/editar y la tabla de proveedores
        echo '<table class="table table-striped">...</table>';
    } elseif ($tipo_catalogo === 'equipos') {
        echo '<h4>Gestión de Tipos de Equipo</h4>';
        // Lógica para gestionar tipos de equipos
    } elseif ($tipo_catalogo === 'ubicaciones') {
        echo '<h4>Gestión de Ubicaciones</h4>';
        // Lógica para gestionar ubicaciones
    }
    ?>
</div>
</body>
</html>
