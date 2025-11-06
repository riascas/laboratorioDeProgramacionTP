function inicializarInsumos() {
  const tipoInsumo = document.getElementById("tipoInsumo");
  const camposDinamicos = document.getElementById("camposDinamicos");
  const tecnicoNombre = document.getElementById("tecnicoNombre");

  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
  tecnicoNombre.textContent = usuarioLogueado
    ? `Técnico responsable: ${usuarioLogueado.user}`
    : "Técnico no identificado";

  tipoInsumo.addEventListener("change", () => {
    const seleccion = tipoInsumo.value;
    camposDinamicos.innerHTML = "";

    switch (seleccion) {
      case "Disco":
        generarSelect("Tipo de Disco", ["Rígido", "SSD", "M.2 NVMe"], "tipoDisco");
        generarSelect("Capacidad", ["128 GB", "512 GB", "1 TB", "2 TB", "4 TB"], "capacidadDisco");
        generarSelect("Marca", ["Kingston", "Western Digital", "Samsung", "Crucial"], "marcaDisco");
        break;

      case "Memoria":
        generarSelect("Tipo de Memoria", ["DDR3", "DDR4", "DDR5"], "tipoMemoria");
        generarSelect("Capacidad", ["4 GB", "8 GB", "16 GB", "32 GB"], "capacidadMemoria");
        generarSelect("Marca", ["Kingston", "Corsair", "Crucial", "ADATA"], "marcaMemoria");
        break;

      case "Microprocesador":
        generarSelect("Socket", ["AM4", "AM5", "LGA1200", "LGA1700"], "socketMicro");
        generarSelect("Generación", ["10th", "11th", "12th", "13th"], "genMicro");
        generarSelect("Marca", ["Intel", "AMD"], "marcaMicro");
        break;

      case "Pasta termica":
        generarSelect("Marca", ["Arctic", "Cooler Master", "Thermal Grizzly", "Noctua"], "marcaPasta");
        generarSelect("Presentación", ["1g", "4g", "10g"], "presentacionPasta");
        break;

      case "Teclado Notebook":
        generarSelect("Idioma", ["Español (ES)", "Inglés (US)"], "idiomaTeclado");
        generarSelect("Marca", ["HP", "Lenovo", "Dell", "Acer"], "marcaTeclado");
        generarSelect("Compatibilidad", ["Modelos 14''", "Modelos 15''", "Modelos 17''"], "compatTeclado");
        break;

      case "Pantalla Notebook":
        generarSelect("Tamaño", ["13''", "14''", "15.6''", "17''"], "tamanoPantalla");
        generarSelect("Tipo", ["LED", "IPS", "OLED"], "tipoPantalla");
        generarSelect("Marca", ["Samsung", "LG", "AUO", "BOE"], "marcaPantalla");
        break;

      case "Mother":
        generarSelect("Socket Compatible", ["AM4", "AM5", "LGA1200", "LGA1700"], "socketMother");
        generarSelect("Tamaño", ["ATX", "Micro ATX", "Mini ITX"], "tamanoMother");
        generarSelect("Marca", ["ASUS", "MSI", "Gigabyte", "ASRock"], "marcaMother");
        break;

      case "Placa de video":
        generarSelect("Memoria", ["4 GB", "6 GB", "8 GB", "12 GB"], "memoriaGPU");
        generarSelect("Marca", ["NVIDIA", "AMD"], "marcaGPU");
        generarSelect("Modelo", ["RTX 3050", "RTX 3060", "RX 6600", "RX 6700"], "modeloGPU");
        break;

      case "Placa de red":
        generarSelect("Tipo", ["Ethernet", "Wi-Fi"], "tipoRed");
        generarSelect("Velocidad", ["100 Mbps", "1 Gbps", "2.5 Gbps"], "velocidadRed");
        generarSelect("Marca", ["TP-Link", "Intel", "Realtek", "ASUS"], "marcaRed");
        break;
    }
  });

  function generarSelect(etiqueta, opciones, id) {
    const div = document.createElement("div");
    div.classList.add("mb-3");

    const label = document.createElement("label");
    label.textContent = etiqueta;
    label.classList.add("form-label");

    const select = document.createElement("select");
    select.classList.add("form-select");
    select.id = id;

    const optDefault = document.createElement("option");
    optDefault.textContent = "Seleccione...";
    select.appendChild(optDefault);

    opciones.forEach(op => {
      const option = document.createElement("option");
      option.textContent = op;
      select.appendChild(option);
    });

    div.appendChild(label);
    div.appendChild(select);
    camposDinamicos.appendChild(div);
  }


  document.getElementById("formInsumos").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = usuarioLogueado ? usuarioLogueado.user : "No identificado";
    alert(`Solicitud registrada correctamente ✅\nTécnico: ${nombre}`);

    e.target.reset();
    camposDinamicos.innerHTML = "";
  });

}


