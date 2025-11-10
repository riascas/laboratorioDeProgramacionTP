<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Includes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="cordinador.php">Coordinador IT</a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="cordinador.php?view=reportes">Reportes 📈</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="cordinador.php?view=alertas">Alertas y Pedidos ⚠️</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="cordinador.php?view=catalogo">Gestión de Catálogos ⚙️</a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Usuario: <?php echo $_SESSION['user'] ?? 'Coordinador'; ?></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" href="login.html" onclick="cerrarSesion()">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</body>
</html>
Este archivo contiene el código HTML/Bootstrap para el menú superior
así como los enlaces que activan el Enrutador
