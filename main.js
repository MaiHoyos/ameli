/* =============================
   AMELÍ - CATÁLOGO DIGITAL
   Lee la información desde inventario.xlsx
   Carpeta de imágenes: Zapatos/
   ============================= */

const whatsappNumber = "573104807864"; // Cambia este número por el WhatsApp real de Amelí.
const excelFile = "inventario.xlsx";
const imageFolder = "Zapatos/";
const tallasBase = ["35", "36", "37", "38", "39", "40"];

let productos = [];

const catalogGrid = document.getElementById("catalogGrid");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalProductName = document.getElementById("modalProductName");
const modalPrice = document.getElementById("modalPrice");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalSizes = document.getElementById("modalSizes");
const modalColors = document.getElementById("modalColors");
const whatsappBtn = document.getElementById("whatsappBtn");
const currentYear = document.getElementById("currentYear");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const sizeGuideBtn = document.getElementById("sizeGuideBtn");
const sizeGuideModal = document.getElementById("sizeGuideModal");
const sizeGuideClose = document.getElementById("sizeGuideClose");

let colorSeleccionado = "";

/* =============================
   FUNCIONES PARA LEER EL EXCEL
   ============================= */

function normalizarTexto(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function obtenerValorFila(fila, posiblesColumnas) {
  const columnasFila = Object.keys(fila);

  for (let i = 0; i < columnasFila.length; i++) {
    const columnaReal = columnasFila[i];
    const columnaNormalizada = normalizarTexto(columnaReal);

    for (let j = 0; j < posiblesColumnas.length; j++) {
      if (columnaNormalizada === normalizarTexto(posiblesColumnas[j])) {
        return fila[columnaReal];
      }
    }
  }

  return "";
}

function formatoPrecio(valor) {
  if (valor === null || valor === undefined || valor === "") {
    return "$000.000";
  }

  const numero = Number(valor);

  if (!isNaN(numero)) {
    return "$" + numero.toLocaleString("es-CO");
  }

  return String(valor);
}

function slugProducto(nombre) {
  return String(nombre || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .split(/\s+/)
    .map(function (palabra) {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
    .join("-");
}

function slugColor(color) {
  return String(color || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function nombreColorBonito(color) {
  return String(color || "")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, function (letra) {
      return letra.toUpperCase();
    });
}

function rutasUnicas(rutas) {
  return [...new Set(rutas.filter(Boolean))];
}

function variantesNombreArchivo(nombreProducto) {
  const original = String(nombreProducto || "").trim();

  const sinAcentos = original
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  const slug = slugProducto(original);

  const originalConGuiones = original.replace(/\s+/g, "-");
  const sinAcentosConGuiones = sinAcentos.replace(/\s+/g, "-");

  const originalSinEspacios = original.replace(/\s+/g, "");
  const sinAcentosSinEspacios = sinAcentos.replace(/\s+/g, "");

  // Caso especial útil para María José / Maria José / Maria-José / MariaJose
  const mariaEspecial = original.replace(/^María\b/i, "Maria");
  const mariaEspecialGuiones = mariaEspecial.replace(/\s+/g, "-");
  const mariaEspecialSinEspacios = mariaEspecial.replace(/\s+/g, "");

  return rutasUnicas([
    original,
    sinAcentos,
    slug,
    originalConGuiones,
    sinAcentosConGuiones,
    originalSinEspacios,
    sinAcentosSinEspacios,
    mariaEspecial,
    mariaEspecialGuiones,
    mariaEspecialSinEspacios
  ]);
}

function variantesColorArchivo(color) {
  const original = String(color || "").trim();

  const sinAcentos = original
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  const slug = slugColor(original);
  const titulo = slugProducto(original);

  return rutasUnicas([
    original,
    original.toLowerCase(),
    sinAcentos,
    sinAcentos.toLowerCase(),
    slug,
    titulo
  ]);
}

function crearRutasImagenPrincipal(nombreProducto) {
  const nombres = variantesNombreArchivo(nombreProducto);
  const rutas = [];

  nombres.forEach(function (nombre) {
    rutas.push(imageFolder + nombre + ".png");
    rutas.push(imageFolder + nombre + ".jpg");
    rutas.push(imageFolder + nombre + ".jpeg");
    rutas.push(imageFolder + nombre + ".webp");
  });

  return rutasUnicas(rutas);
}

function crearRutasImagenColor(nombreProducto, color) {
  const nombres = variantesNombreArchivo(nombreProducto);
  const colores = variantesColorArchivo(color);
  const rutas = [];

  nombres.forEach(function (nombre) {
    colores.forEach(function (colorArchivo) {
      rutas.push(imageFolder + nombre + "-" + colorArchivo + ".png");
      rutas.push(imageFolder + nombre + "-" + colorArchivo + ".jpg");
      rutas.push(imageFolder + nombre + "-" + colorArchivo + ".jpeg");
      rutas.push(imageFolder + nombre + "-" + colorArchivo + ".webp");
    });
  });

  return rutasUnicas(rutas);
}
function construirProductosDesdeExcel(filas) {
  const mapaProductos = new Map();

  filas.forEach(function (fila) {
    const referencia = String(
      obtenerValorFila(fila, ["Referencia", "Nombre", "Producto"])
    ).trim();

    const categoria = String(
      obtenerValorFila(fila, ["Categoría", "Categoria", "Tipo"])
    ).trim();

    const color = String(
      obtenerValorFila(fila, ["Color", "Colores"])
    ).trim();

    const precio = obtenerValorFila(fila, ["Precio venta", "Precio", "Valor"]);

    const descripcion = String(
      obtenerValorFila(fila, ["Descripción", "Descripcion"])
    ).trim();

    if (!referencia) return;

    if (!mapaProductos.has(referencia)) {
      mapaProductos.set(referencia, {
        id: mapaProductos.size + 1,
        nombre: referencia,
        tipo: categoria || "Calzado",
        precio: formatoPrecio(precio),
        descripcion: descripcion || "Descripción próximamente.",
        imagenPrincipal: crearRutasImagenPrincipal(referencia),
        tallas: tallasBase,
        colores: []
      });
    }

    const producto = mapaProductos.get(referencia);

    if (!producto.tipo && categoria) {
      producto.tipo = categoria;
    }

    if ((!producto.precio || producto.precio === "$000.000") && precio) {
      producto.precio = formatoPrecio(precio);
    }

    if ((!producto.descripcion || producto.descripcion === "Descripción próximamente.") && descripcion) {
      producto.descripcion = descripcion;
    }

    if (color) {
      const colorKey = normalizarTexto(color);

      const yaExiste = producto.colores.some(function (item) {
        return normalizarTexto(item.nombre) === colorKey;
      });

      if (!yaExiste) {
        producto.colores.push({
          nombre: nombreColorBonito(color),
          imagen: crearRutasImagenColor(referencia, color)
        });
      }
    }
  });

  return Array.from(mapaProductos.values());
}

async function cargarInventario() {
  if (!catalogGrid) return;

  catalogGrid.innerHTML = "<p>Cargando catálogo Amelí...</p>";

  try {
    if (typeof XLSX === "undefined") {
      throw new Error("No se cargó la librería XLSX. Revisa el script de SheetJS en el HTML.");
    }

    const respuesta = await fetch(excelFile);

    if (!respuesta.ok) {
      throw new Error("No se pudo encontrar el archivo inventario.xlsx en la carpeta raíz.");
    }

    const data = await respuesta.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const primeraHoja = workbook.SheetNames[0];
    const hoja = workbook.Sheets[primeraHoja];

    const filas = XLSX.utils.sheet_to_json(hoja, {
      defval: ""
    });

    productos = construirProductosDesdeExcel(filas);

mostrarProductos();
crearCollageHero();
manejarHash();

  } catch (error) {
    console.error(error);

    catalogGrid.innerHTML =
      "<div class='image-fallback'>" +
      "No se pudo cargar el inventario. Revisa que el archivo inventario.xlsx esté en la carpeta raíz y que el nombre esté escrito exactamente igual." +
      "</div>";
  }
}

/* =============================
   IMÁGENES
   ============================= */

function crearFallback(texto) {
  const fallback = document.createElement("div");
  fallback.className = "image-fallback";
  fallback.textContent = texto || "Amelí";
  return fallback;
}

function colocarImagen(img, rutas, alt, fallbackTexto) {
  const listaRutas = Array.isArray(rutas) ? rutas : [rutas];
  let indice = 0;

  img.alt = alt;
  img.src = listaRutas[indice];

  img.onerror = function () {
    indice++;

    if (indice < listaRutas.length) {
      img.src = listaRutas[indice];
    } else {
      const fallback = crearFallback(fallbackTexto);
      img.replaceWith(fallback);
    }
  };
}

/* =============================
   PRODUCTOS Y MODAL
   ============================= */

function crearTarjetaProducto(producto) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Ver detalle de " + producto.nombre);

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-card-image";

  const img = document.createElement("img");
  colocarImagen(img, producto.imagenPrincipal, producto.nombre, producto.nombre);

  imageWrap.appendChild(img);

  const info = document.createElement("div");
  info.className = "product-card-info";

  info.innerHTML =
    "<p>" + producto.tipo + "</p>" +
    "<h2>" + producto.nombre + "</h2>" +
    "<span class='card-price'>" + producto.precio + "</span>";

  card.appendChild(imageWrap);
  card.appendChild(info);

  card.addEventListener("click", function () {
    abrirModal(producto);
  });

  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      abrirModal(producto);
    }
  });

  return card;
}

function mostrarProductos() {
  if (!catalogGrid) return;

  catalogGrid.innerHTML = "";

  if (!productos.length) {
    catalogGrid.innerHTML = "<p>No hay productos cargados en el inventario.</p>";
    return;
  }

  productos.forEach(function (producto) {
    const card = crearTarjetaProducto(producto);
    catalogGrid.appendChild(card);
  });
}

function crearCollageHero() {
  const collage = document.getElementById("heroMobileCollage");

  if (!collage || !productos.length) return;

  collage.innerHTML = "";

  const productosCollage = productos.slice(0, 6);

  productosCollage.forEach(function (producto) {
    const item = document.createElement("div");
    item.className = "hero-collage-item";
    item.setAttribute("aria-hidden", "true");

    const img = document.createElement("img");

    colocarImagen(
      img,
      producto.imagenPrincipal,
      "",
      producto.nombre
    );

    img.alt = "";
    img.setAttribute("draggable", "false");

    item.appendChild(img);
    collage.appendChild(item);
  });
}

function abrirModal(producto) {
  if (!productModal) return;

  colorSeleccionado = producto.colores.length ? producto.colores[0].nombre : "";

  const imagePanel = document.querySelector(".modal-image-panel");

  if (imagePanel) {
    imagePanel.innerHTML = "";

    const mainImage = document.createElement("img");
    mainImage.id = "modalMainImage";

    colocarImagen(mainImage, producto.imagenPrincipal, producto.nombre, producto.nombre);
    imagePanel.appendChild(mainImage);
  }

  if (modalProductName) modalProductName.textContent = producto.nombre;
  if (modalPrice) modalPrice.textContent = producto.precio;
  if (modalType) modalType.textContent = producto.tipo;
  if (modalDescription) modalDescription.textContent = producto.descripcion;

  if (modalSizes) {
    modalSizes.innerHTML = "";

    producto.tallas.forEach(function (talla) {
      const size = document.createElement("span");
      size.className = "size-pill";
      size.textContent = talla;
      modalSizes.appendChild(size);
    });
  }

  if (modalColors) {
    modalColors.innerHTML = "";

    producto.colores.forEach(function (color, index) {
      const button = document.createElement("button");
      button.className = index === 0 ? "color-option is-active" : "color-option";
      button.type = "button";
      button.setAttribute("aria-label", "Ver color " + color.nombre + " de " + producto.nombre);

      const colorImg = document.createElement("img");
      colocarImagen(
        colorImg,
        color.imagen,
        producto.nombre + " color " + color.nombre,
        color.nombre
      );

      const label = document.createElement("span");
      label.textContent = color.nombre;

      button.appendChild(colorImg);
      button.appendChild(label);

      button.addEventListener("click", function () {
        colorSeleccionado = color.nombre;

        actualizarImagenPrincipal(
          color.imagen,
          producto.nombre + " color " + color.nombre,
          producto.nombre
        );

        const opciones = document.querySelectorAll(".color-option");

        opciones.forEach(function (item) {
          item.classList.remove("is-active");
        });

        button.classList.add("is-active");
        actualizarWhatsapp(producto);
      });

      modalColors.appendChild(button);
    });
  }

  actualizarWhatsapp(producto);

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (modalClose) {
    modalClose.focus();
  }
}

if (sizeGuideBtn) {
  sizeGuideBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    abrirGuiaTallas();
  });
}

if (sizeGuideClose) {
  sizeGuideClose.addEventListener("click", cerrarGuiaTallas);
}

if (sizeGuideModal) {
  sizeGuideModal.addEventListener("click", function (event) {
    if (event.target === sizeGuideModal) {
      cerrarGuiaTallas();
    }
  });
}

function actualizarImagenPrincipal(rutas, alt, fallbackTexto) {
  const imagePanel = document.querySelector(".modal-image-panel");

  if (!imagePanel) return;

  imagePanel.innerHTML = "";

  const nuevaImagen = document.createElement("img");
  nuevaImagen.id = "modalMainImage";

  colocarImagen(nuevaImagen, rutas, alt, fallbackTexto);
  imagePanel.appendChild(nuevaImagen);
}

function actualizarWhatsapp(producto) {
  if (!whatsappBtn) return;

  let mensaje = "Hola, quiero consultar la disponibilidad del producto " + producto.nombre + " en Amelí.";

  if (colorSeleccionado) {
    mensaje = "Hola, quiero consultar la disponibilidad del producto " + producto.nombre + " en color " + colorSeleccionado + " en Amelí.";
  }

  const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(mensaje);

  whatsappBtn.href = url;
}

function cerrarModal() {
  if (!productModal) return;

  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function abrirGuiaTallas() {
  if (!sizeGuideModal) return;

  sizeGuideModal.classList.add("is-open");
  sizeGuideModal.setAttribute("aria-hidden", "false");

  if (sizeGuideClose) {
    sizeGuideClose.focus();
  }
}

function cerrarGuiaTallas() {
  if (!sizeGuideModal) return;

  sizeGuideModal.classList.remove("is-open");
  sizeGuideModal.setAttribute("aria-hidden", "true");
}

/* =============================
   NAVEGACIÓN
   ============================= */

function mostrarSeccion(sectionId) {
  const seccionesValidas = ["inicio", "calzado", "bolsos", "accesorios"];
  const destino = seccionesValidas.includes(sectionId) ? sectionId : "inicio";

  const secciones = document.querySelectorAll(".page-section");

  secciones.forEach(function (section) {
    if (section.id === destino) {
      section.classList.add("is-active");
    } else {
      section.classList.remove("is-active");
    }
  });

  const links = document.querySelectorAll("[data-section-link]");

  links.forEach(function (link) {
    if (link.dataset.sectionLink === destino) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });

  if (mainNav) {
    mainNav.classList.remove("is-open");
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
}

function manejarHash() {
  const sectionId = window.location.hash.replace("#", "") || "inicio";
  mostrarSeccion(sectionId);
}

/* =============================
   EVENTOS
   ============================= */

if (productModal) {
  productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
      cerrarModal();
    }
  });
}

if (modalClose) {
  modalClose.addEventListener("click", cerrarModal);
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && productModal && productModal.classList.contains("is-open")) {
    cerrarModal();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;

  if (sizeGuideModal && sizeGuideModal.classList.contains("is-open")) {
    cerrarGuiaTallas();
    return;
  }

  if (productModal && productModal.classList.contains("is-open")) {
    cerrarModal();
  }
});

window.addEventListener("hashchange", manejarHash);

const sectionLinks = document.querySelectorAll("[data-section-link]");

sectionLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const sectionId = link.dataset.sectionLink;
    mostrarSeccion(sectionId);
  });
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =============================
   INICIAR
   ============================= */

cargarInventario();
