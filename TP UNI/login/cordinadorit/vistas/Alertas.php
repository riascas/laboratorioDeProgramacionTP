<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alertas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h3 class="text-center mb-4">Alertas de Stock y Pedidos ⚠️</h3>

    <h4 class="mt-4">Alertas de Stock Crítico</h4>
    <table class="table table-bordered table-sm">
        <thead class="table-danger">
            <tr><th>Artículo</th><th>Stock Actual</th><th>Mínimo Requerido</th></tr>
        </thead>
        <tbody>
            <tr><td>Disco SSD 512 GB</td><td>3</td><td>10</td></tr>
            <tr><td>Memoria DDR4 8GB</td><td>5</td><td>15</td></tr>
        </tbody>
    </table>

    <h4 class="mt-5">Órdenes de Compra Pendientes</h4>
    <table class="table table-bordered table-sm">
        <thead class="table-info">
            <tr>
                <th>OC ID</th>
                <th>Proveedor</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>OC-2025-004</td><td>Proveedor A</td><td>**Pendiente Aprobación**</td><td>
                <button class="btn btn-success btn-sm">Aprobar</button> 
                <button class="btn btn-danger btn-sm">Rechazar</button>
            </td></tr>
            <tr><td>OC-2025-003</td><td>Proveedor B</td><td>Aprobada</td><td>Ver Detalle</td></tr>
        </tbody>
    </table>
</body>
</html>

contiene HTML y Bootstrap para mostrar datos estáticos de stock y pedidos, 
simulando la información que vendría de una base de datos

