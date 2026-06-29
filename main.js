/* =============================
   AMELÍ - CATÁLOGO DIGITAL
   main.js corregido
   Carpeta de imágenes: Zapatos/
   ============================= */

const whatsappNumber = "573000000000"; // Cambia este número por el WhatsApp real de Amelí.
const tallasBase = ["35", "36", "37", "38", "39", "40"];

function nombreColorBonito(colorArchivo) {
  return colorArchivo
    .replace(/-/g, " ")
    .replace(/\b\w/g, function (letra) {
      return letra.toUpperCase();
    });
}

function crearColores(nombreArchivoBase, colores) {
  return colores.map(function (color) {
    return {
      nombre: nombreColorBonito(color),
      imagen: "Zapatos/" + nombreArchivoBase + "-" + color + ".png"
    };
  });
}

function crearProducto(id, nombreVisible, nombreArchivoBase, tipo, precio, descripcion, colores) {
  return {
    id: id,
    nombre: nombreVisible,
    tipo: tipo,
    precio: precio,
    descripcion: descripcion,
    imagenPrincipal: "Zapatos/" + nombreArchivoBase + ".png",
    tallas: tallasBase,
    colores: crearColores(nombreArchivoBase, colores)
  };
}

const productos = [
  crearProducto(
    1,
    "Gabriela",
    "Gabriela",
    "Sandalia de tacón",
    "$000.000",
    "Sandalia elegante de tiras delicadas, pensada para elevar looks femeninos con un toque cálido, sofisticado y versátil.",
    ["beige", "chocolate", "miel"]
  ),

  crearProducto(
    2,
    "Heily",
    "Heily",
    "Sandalia plana",
    "$000.000",
    "Sandalia plana de estilo atemporal, cómoda y delicada, ideal para acompañar días casuales con una estética pulida y femenina.",
    ["miel", "negro", "vino"]
  ),

  crearProducto(
    3,
    "Roma",
    "Roma",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    4,
    "Margarita",
    "Margarita",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    5,
    "Martina",
    "Martina",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    6,
    "Bonnie",
    "Bonnie",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    7,
    "Fiorella",
    "Fiorella",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    8,
    "Abbie",
    "Abbie",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    9,
    "Greta",
    "Greta",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    10,
    "María José",
    "Maria-Jose",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    11,
    "Macarena",
    "Macarena",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    12,
    "Cataleya",
    "Cataleya",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    13,
    "Kiara",
    "Kiara",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    14,
    "Bruna",
    "Bruna",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    15,
    "Camila",
    "Camila",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    16,
    "Maite",
    "Maite",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    17,
    "Mila",
    "Mila",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  ),

  crearProducto(
    18,
    "Selene",
    "Selene",
    "Sandalia",
    "$000.000",
    "Escribe aquí la descripción del producto.",
    ["color1", "color2", "color3"]
  )
];

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

function crearFallback(texto) {
  const fallback = document.createElement("div");
  fallback.className = "image-fallback";
  fallback.textContent = texto || "Amelí";
  return fallback;
}

function colocarImagen(img, ruta, alt, fallbackTexto) {
  img.src = ruta;
  img.alt = alt;

  img.onerror = function () {
    const fallback = crearFallback(fallbackTexto);
    img.replaceWith(fallback);
  };
}

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

  productos.forEach(function (producto) {
    const card = crearTarjetaProducto(producto);
    catalogGrid.appendChild(card);
  });
}

function abrirModal(producto) {
  if (!productModal) return;

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

function actualizarImagenPrincipal(ruta, alt, fallbackTexto) {
  const imagePanel = document.querySelector(".modal-image-panel");

  if (!imagePanel) return;

  imagePanel.innerHTML = "";

  const nuevaImagen = document.createElement("img");
  nuevaImagen.id = "modalMainImage";

  colocarImagen(nuevaImagen, ruta, alt, fallbackTexto);
  imagePanel.appendChild(nuevaImagen);
}

function actualizarWhatsapp(producto) {
  if (!whatsappBtn) return;

  const mensaje = "Hola, quiero consultar la disponibilidad del producto " + producto.nombre + " en Amelí.";
  const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(mensaje);

  whatsappBtn.href = url;
}

function cerrarModal() {
  if (!productModal) return;

  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

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

mostrarProductos();
manejarHash();
