// PROPIEDADES EN VENTA
const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    valor: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    valor: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    valor: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en barrio antiguo",
    src: "https://plus.unsplash.com/premium_photo-1695050139775-deeee5360168?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Hermoso y clásico departamento con salida directa a la calle",
    ubicacion: "1599 Sunset Boulevard, Los Angeles, CA 90026",
    habitaciones: 2,
    baños: 2,
    valor: 1500,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Casa céntrica en barrio familiar",
    src: "https://images.unsplash.com/photo-1702795488026-eebe9fdfdf17?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Ubicada en un barrio tranquilo pero céntrico te permite ir a pie a cualquier sitio",
    ubicacion: "4820 Maple Street, Riverdale, NY 10471",
    habitaciones: 4,
    baños: 2,
    valor: 2600,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa moderna estilo moderno",
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Casa aesthetic en mirador con vista a la ciudad",
    ubicacion: "2301 Ocean Drive, Miami Beach, FL 33139",
    habitaciones: 4,
    baños: 2,
    valor: 1400,
    smoke: false,
    pets: false,
  },
];

const forSale = document.getElementById("for-sale-properties");
if (forSale) {
  let htmlSale = "";
  for (let property of propiedades_venta) {
    htmlSale += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${
          property.src
        }" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
          <h5 class="card-title">${property.nombre}</h5>
          <p class="card-text">${property.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${property.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${property.valor.toLocaleString(
            "es-CO"
          )}</p>
          <p class="${property.smoke ? "text-success" : "text-danger"}">
            <i class="${
              property.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
            }"></i> 
            ${property.smoke ? "Permitido fumar" : "No se permite fumar"}
          </p>
          <p class="${property.pets ? "text-success" : "text-danger"}">
            <i class="${property.pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> 
            ${property.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>
  `;
  }

  forSale.innerHTML = htmlSale;
}

// PROPIEDADES EN ALQUILER
const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    valor: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    valor: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    valor: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Pequeña cabaña para fin de semana",
    src: "https://plus.unsplash.com/premium_photo-1681922761134-1f2bde2ec525?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Ideal para una escapada en pareja, cómodo e idílico",
    ubicacion: "77 Beacon Hill Road, Boston, MA 02108",
    habitaciones: 1,
    baños: 1,
    valor: 580,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Tiny house en el bosque",
    src: "https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Vive la experiencia de vivir en una casa pequeña con todo lo necesario ",
    ubicacion: "9150 Redwood Avenue, San Francisco, CA 94121",
    habitaciones: 1,
    baños: 1,
    valor: 2800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento con balcón",
    src: "https://plus.unsplash.com/premium_photo-1676321046694-a9ca1b6d4182?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion:
      "Departamento con gran vista en edificio con piscina y gimnasio",
    ubicacion: "742 Evergreen Terrace, Springfield, CA 90210",
    habitaciones: 3,
    baños: 2,
    valor: 5000,
    smoke: false,
    pets: true,
  },
];

const forRent = document.getElementById("for-rent-properties");
let htmlRent = "";
if (forRent) {
  for (let property of propiedades_alquiler) {
    htmlRent += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${
          property.src
        }" class="card-img-top" alt="Imagen del departamento" />
        <div class="card-body">
          <h5 class="card-title">${property.nombre}</h5>
          <p class="card-text">${property.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${property.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${property.valor.toLocaleString(
            "es-CO"
          )}</p>
          <p class="${property.smoke ? "text-success" : "text-danger"}">
            <i class="${
              property.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
            }"></i> 
            ${property.smoke ? "Permitido fumar" : "No se permite fumar"}
          </p>
          <p class="${property.pets ? "text-success" : "text-danger"}">
            <i class="${property.pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> 
            ${property.pets ? "Mascotas permitidas" : "No se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>
  `;
  }

  forRent.innerHTML = htmlRent;
}
