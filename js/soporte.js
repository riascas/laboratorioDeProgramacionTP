// Datos hardcodeados
const dataEquipos = {
  "notebook": {
    "Lenovo": ["Thinkpad E14", "IdeaPad 3"],
    "HP": ["ProBook 450", "Pavilion 15"],
    "Dell": ["Latitude 5520", "Inspiron 14"]
  },
  "pc escritorio": {
    "Lenovo": ["ThinkCentre M70", "V50t"],
    "HP": ["EliteDesk 800", "ProDesk 400"],
    "Dell": ["OptiPlex 7090", "Vostro 3910"]
  },
  "celular": {
    "Samsung": ["Galaxy A34", "Galaxy S21"],
    "Motorola": ["Moto G84", "Edge 40"],
    "Apple": ["iPhone 13", "iPhone SE"]
  }
};

const usuarios = ["Matias Perez", "Lucia Romero", "Javier López", "Ana Torres", "Carlos Vega"];

// --- FUNCIONES ---

// Cierra sesión (borra el rol si existiera)
function cerrarSesion() {
  localStorage.removeItem("rolUsuario");
}

// Cargar formulario de Asignaciones
function mostrarFormularioAsignacion() {
  const contenedor = document.getElementById("contenidoPrincipal");
  contenedor.innerHTML = `
    <h3 class="text-center mb-4">Asignación de Equipos</h3>
    <form id="formAsignacion" class="p-4 border rounded bg-light shadow-sm">
      <div class="mb-3">
        <label for="tipoEquipo" class="form-label">Tipo de Equipo</label>
        <select class="form-select" id="tipoEquipo">
          <option value="">Seleccione...</option>
          <option value="notebook">Notebook</option>
          <option value="pc escritorio">PC Escritorio</option>
          <option value="celular">Celular</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="marcaEquipo" class="form-label">Marca</label>
        <select class="form-select" id="marcaEquipo" disabled>
          <option value="">Seleccione el tipo primero...</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="modeloEquipo" class="form-label">Modelo</label>
        <select class="form-select" id="modeloEquipo" disabled>
          <option value="">Seleccione la marca primero...</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="usuarioAsignado" class="form-label">Usuario</label>
        <select class="form-select" id="usuarioAsignado">
          <option value="">Seleccione usuario...</option>
          ${usuarios.map(u => `<option value="${u}">${u}</option>`).join("")}
        </select>
      </div>

      <button type="submit" class="btn btn-primary w-100">Asignar Equipo</button>
    </form>
    <div id="resultadoAsignacion" class="mt-4 text-center fw-bold"></div>
  `;

  // Listeners dinámicos
  document.getElementById("tipoEquipo").addEventListener("change", cargarMarcas);
  document.getElementById("marcaEquipo").addEventListener("change", cargarModelos);
  document.getElementById("formAsignacion").addEventListener("submit", procesarAsignacion);
}

function cargarMarcas() {
  const tipo = this.value;
  const marcaSelect = document.getElementById("marcaEquipo");
  const modeloSelect = document.getElementById("modeloEquipo");

  marcaSelect.innerHTML = `<option value="">Seleccione marca...</option>`;
  modeloSelect.innerHTML = `<option value="">Seleccione la marca primero...</option>`;
  modeloSelect.disabled = true;

  if (tipo && dataEquipos[tipo]) {
    Object.keys(dataEquipos[tipo]).forEach(marca => {
      marcaSelect.innerHTML += `<option value="${marca}">${marca}</option>`;
    });
    marcaSelect.disabled = false;
  } else {
    marcaSelect.disabled = true;
  }
}

function cargarModelos() {
  const tipo = document.getElementById("tipoEquipo").value;
  const marca = this.value;
  const modeloSelect = document.getElementById("modeloEquipo");

  modeloSelect.innerHTML = `<option value="">Seleccione modelo...</option>`;

  if (tipo && marca && dataEquipos[tipo][marca]) {
    dataEquipos[tipo][marca].forEach(modelo => {
      modeloSelect.innerHTML += `<option value="${modelo}">${modelo}</option>`;
    });
    modeloSelect.disabled = false;
  } else {
    modeloSelect.disabled = true;
  }
}

function procesarAsignacion(e) {
  e.preventDefault();
  const tipo = document.getElementById("tipoEquipo").value;
  const marca = document.getElementById("marcaEquipo").value;
  const modelo = document.getElementById("modeloEquipo").value;
  const usuario = document.getElementById("usuarioAsignado").value;
  const resultado = document.getElementById("resultadoAsignacion");

  if (!tipo || !marca || !modelo || !usuario) {
    resultado.textContent = "⚠️ Por favor, complete todos los campos.";
    resultado.classList.add("text-danger");
    return;
  }

  resultado.textContent = `✅ Se asignó correctamente el equipo ${tipo.toUpperCase()} ${marca} ${modelo} a ${usuario}.`;
  resultado.classList.remove("text-danger");
  resultado.classList.add("text-success");
}

// --- NAVBAR LISTENERS ---
document.getElementById("navInicio").addEventListener("click", () => {
  document.getElementById("contenidoPrincipal").innerHTML = `
    <h2 class="text-center">Bienvenido al módulo de Soporte Técnico</h2>
    <p class="text-center">Seleccione una opción del menú para comenzar.</p>
  `;
});

document.getElementById("navAsignaciones").addEventListener("click", mostrarFormularioAsignacion);

// Vincular botón de Insumos Informáticos
document.getElementById("navInsumos").addEventListener("click", () => {
  // Cargar dinámicamente el formulario de insumos
  const contenido = document.getElementById("contenidoPrincipal");

  contenido.innerHTML = `
    <h3 class="text-center mb-4">Solicitud de Insumos Informáticos</h3>
    <div class="text-center mb-4">
      <h5 id="tecnicoNombre" class="text-primary"></h5>
    </div>
    <div class="card p-4 shadow-sm">
      <form id="formInsumos">
        <div class="mb-3">
          <label for="tipoInsumo" class="form-label">Tipo de Insumo</label>
          <select id="tipoInsumo" class="form-select">
            <option value="">Seleccione un tipo...</option>
            <option value="Disco">Disco</option>
            <option value="Memoria">Memoria</option>
            <option value="Microprocesador">Microprocesador</option>
            <option value="Pasta termica">Pasta térmica</option>
            <option value="Teclado Notebook">Teclado Notebook</option>
            <option value="Pantalla Notebook">Pantalla Notebook</option>
            <option value="Mother">Mother</option>
            <option value="Placa de video">Placa de video</option>
            <option value="Placa de red">Placa de red</option>
          </select>
        </div>
        <div id="camposDinamicos"></div>
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-primary">Registrar Solicitud</button>
        </div>
      </form>
    </div>
  `;

  // Inicializar la lógica de insumos (mismo script que usábamos antes)
  inicializarInsumos();
});

document.getElementById("navStock").addEventListener("click", () => {
  document.getElementById("contenidoPrincipal").innerHTML = `<h3>Consulta de Stock</h3><p>Próximamente...</p>`;
});

document.getElementById("navEquipos").addEventListener("click", () => {
  document.getElementById("contenidoPrincipal").innerHTML = `<h3>Consulta por Equipo</h3><p>Próximamente...</p>`;
});
