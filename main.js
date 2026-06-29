// =============================
// AMELÍ - CATÁLOGO DIGITAL
// Archivo actualizado para carpeta:
// Zapatos/
// =============================

const whatsappNumber = "573000000000"; // Cambia este número por el WhatsApp real de Amelí.

const tallasBase = ["35", "36", "37", "38", "39", "40"];

const productos = [
  {
    id: 1,
    nombre: "Gabriela",
    tipo: "Sandalia de tacón",
    precio: "$000.000",
    descripcion: "Sandalia elegante de tiras delicadas, pensada para elevar looks femeninos con un toque cálido, sofisticado y versátil.",
    imagenPrincipal: "Zapatos/Gabriela.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Gabriela-beige.png" },
      { nombre: "Chocolate", imagen: "Zapatos/Gabriela-chocolate.png" },
      { nombre: "Miel", imagen: "Zapatos/Gabriela-miel.png" }
    ]
  },
  {
    id: 2,
    nombre: "Heily",
    tipo: "Sandalia plana",
    precio: "$000.000",
    descripcion: "Sandalia plana de estilo atemporal, cómoda y delicada, ideal para acompañar días casuales con una estética pulida y femenina.",
    imagenPrincipal: "Zapatos/Heily.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Miel", imagen: "Zapatos/Heily-miel.png" },
      { nombre: "Negro", imagen: "Zapatos/Heily-negro.png" },
      { nombre: "Vino", imagen: "Zapatos/Heily-vino.png" }
    ]
  },

  // Espacios editables para las demás referencias

  {
    id: 3,
    nombre: "Aida",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Aida.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Aida-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Aida-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Aida-miel.png" }
    ]
  },
  {
    id: 4,
    nombre: "Margarita",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Margarita.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Margarita-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Margarita-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Margarita-miel.png" }
    ]
  },
  {
    id: 5,
    nombre: "Martina",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Martina.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Martina-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Martina-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Martina-miel.png" }
    ]
  },
  {
    id: 6,
    nombre: "Bonnie",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Bonnie.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Bonnie-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Bonnie-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Bonnie-miel.png" }
    ]
  },
  {
    id: 7,
    nombre: "Fiorella",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Fiorella.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Fiorella-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Fiorella-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Fiorella-miel.png" }
    ]
  },
  {
    id: 8,
    nombre: "Abbie",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Abbie.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Abbie-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Abbie-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Abbie-miel.png" }
    ]
  },
  {
    id: 9,
    nombre: "Greta",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Greta.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Greta-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Greta-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Greta-miel.png" }
    ]
  },
  {
    id: 10,
    nombre: "María José",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Maria-Jose.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Maria-Jose-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Maria-Jose-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Maria-Jose-miel.png" }
    ]
  },
  {
    id: 11,
    nombre: "Macarena",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Macarena.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Macarena-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Macarena-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Macarena-miel.png" }
    ]
  },
  {
    id: 12,
    nombre: "Rita",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Rita.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Rita-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Rita-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Rita-miel.png" }
    ]
  },
  {
    id: 13,
    nombre: "Kiara",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Kiara.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Kiara-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Kiara-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Kiara-miel.png" }
    ]
  },
  {
    id: 14,
    nombre: "Bruna",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Bruna.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Bruna-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Bruna-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Bruna-miel.png" }
    ]
  },
  {
    id: 15,
    nombre: "Camila",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Camila.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Camila-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Camila-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Camila-miel.png" }
    ]
  },
  {
    id: 16,
    nombre: "Frida",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Frida.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Frida-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Frida-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Frida-miel.png" }
    ]
  },
  {
    id: 17,
    nombre: "Mila",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Mila.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Mila-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Mila-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Mila-miel.png" }
    ]
  },
  {
    id: 18,
    nombre: "Selene",
    tipo: "Sandalia",
    precio: "$000.000",
    descripcion: "Escribe aquí la descripción del producto.",
    imagenPrincipal: "Zapatos/Selene.png",
    tallas: tallasBase,
    colores: [
      { nombre: "Beige", imagen: "Zapatos/Selene-beige.png" },
      { nombre: "Negro", imagen: "Zapatos/Selene-negro.png" },
      { nombre: "Miel", imagen: "Zapatos/Selene-miel.png" }
    ]
  }
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

let activeProduct = null;

function createFallbackElement(label) {
  const fallback = document.createElement("div");
  fallback.className = "image-fallback";
  fallback.textContent = label || "Amelí";
  return fallback;
}

function setImageWithFallback(img, src, alt, fallbackLabel) {
  img.src = src;
  img.alt = alt;

  img.onerror = () => {
    const fallback = createFallbackElement(fallbackLabel);
    img.replaceWith(fallback);
  };
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver detalle de ${product.nombre}`);

  const imageWrap = document.createElement("div");
  imageWrap.className = "product-card-image";

  const img = document.createElement("img");
  setImageWithFallback(img, product.imagenPrincipal, product.nombre, product.nombre);
  imageWrap.appendChild(img);

  const info = document.createElement("div");
  info.className = "product-card-info";

  info.innerHTML = `
    <p>${product.tipo}</p>
    <h2>${product.nombre}</h2>
    <span class="card-price">${product.precio}</span>
  `;

  card.appendChild(imageWrap);
  card.appendChild(info);

  card.addEventListener("click", () => openModal(product));

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(product);
    }
  });

  return card;
}

function renderProducts() {
  if (!catalogGrid) return;

  catalogGrid.innerHTML = "";

  productos.forEach((product) => {
    catalogGrid.appendChild(createProductCard(product));
  });
}

function openModal(product) {
  if (!productModal) return;

  activeProduct = product;

  const imagePanel = document.querySelector(".modal-image-panel");
  imagePanel.innerHTML = "";

  const refreshedMainImage = document.createElement("img");
  refreshedMainImage.id = "modalMainImage";
  imagePanel.appendChild(refreshedMainImage);

  setImageWithFallback(
    refreshedMainImage,
    product.imagenPrincipal,
    product.nombre,
    product.nombre
  );

  modalProductName.textContent = product.nombre;
  modalPrice.textContent = product.precio;
  modalType.textContent = product.tipo;
  modalDescription.textContent = product.descripcion;

  modalSizes.innerHTML = "";
  product.tallas.forEach((size) => {
    const pill = document.createElement("span");
    pill.className = "size-pill";
    pill.textContent = size;
    modalSizes.appendChild(pill);
  });

  modalColors.innerHTML = "";

  product.colores.forEach((color, index) => {
    const button = document.createElement("button");
    button.className = `color-option${index === 0 ? " is-active" : ""}`;
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `Ver color ${color.nombre} de ${product.nombre}`
    );

    const colorImg = document.createElement("img");
    setImageWithFallback(
      colorImg,
      color.imagen,
      `${product.nombre} color ${color.nombre}`,
      color.nombre
    );

    const label = document.createElement("span");
    label.textContent = color.nombre;

    button.appendChild(colorImg);
    button.appendChild(label);

    button.addEventListener("click", () => {
      updateMainImage(
        color.imagen,
        `${product.nombre} color ${color.nombre}`,
        product.nombre
      );

      document.querySelectorAll(".color-option").forEach((item) => {
        item.classList.remove("is-active");
      });

      button.classList.add("is-active");
    });

    modalColors.appendChild(button);
  });

  updateWhatsappLink(product);

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (modalClose) {
    modalClose.focus();
  }
}

function updateMainImage(src, alt, fallbackLabel) {
  const imagePanel = document.querySelector(".modal-image-panel");
  imagePanel.innerHTML = "";

  const newImage = document.createElement("img");
  newImage.id = "modalMainImage";
  imagePanel.appendChild(newImage);

  setImageWithFallback(newImage, src, alt, fallbackLabel);
}

function updateWhatsappLink(product) {
  const message = `Hola, quiero consultar la disponibilidad del producto ${product.nombre} en Amelí.`;
  whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function closeModal() {
  if (!productModal) return;

  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProduct = null;
}

function showSection(sectionId) {
  const validSections = ["inicio", "calzado", "bolsos", "accesorios"];
  const targetId = validSections.includes(sectionId) ? sectionId : "inicio";

  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("is-active", section.id === targetId);
  });

  document.querySelectorAll("[data-section-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionLink === targetId);
  });

  if (mainNav) {
    mainNav.classList.remove("is-open");
  }

  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
}

function handleHashChange() {
  const sectionId = window.location.hash.replace("#", "") || "inicio";
  showSection(sectionId);
}

if (productModal) {
  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeModal();
    }
  });
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

window.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    productModal &&
    productModal.classList.contains("is-open")
  ) {
    closeModal();
  }
});

window.addEventListener("hashchange", handleHashChange);

document.querySelectorAll("[data-section-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const sectionId = link.dataset.sectionLink;
    showSection(sectionId);
  });
});

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

renderProducts();
handleHashChange();
