// src/utils/imageUtils.js

export const getImageUrl = (type, id) => {
  // Mapeo de tipos de SWAPI a las rutas de imágenes en starwars-visualguide
  const typeMap = {
    people: 'characters',
    vehicles: 'vehicles',
    planets: 'planets'
  };

  const imageType = typeMap[type] || type;
  
  // Usamos URLs específicas para algunos elementos conocidos
  const knownImages = {
    // Planetas
    'planets-1': 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png',
    'planets-2': 'https://static.wikia.nocookie.net/esstarwars/images/f/f6/Alderaan.jpg',
    'planets-3': 'https://static.wikia.nocookie.net/esstarwars/images/d/d4/Yavin-4-SWCT.png',
    'planets-4': 'https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png',
    'planets-5': 'https://static.wikia.nocookie.net/esstarwars/images/4/48/Dagobah.jpg',
    
    // Vehículos
    'vehicles-4': 'https://static.wikia.nocookie.net/esstarwars/images/f/ff/Sandcrawler.png',
    'vehicles-7': 'https://static.wikia.nocookie.net/esstarwars/images/f/f2/X34Landspeeder.jpg',
    'vehicles-6': 'https://static.wikia.nocookie.net/esstarwars/images/4/4c/T-16_skyhopper_-_SW_20.png',
    'vehicles-8': 'https://static.wikia.nocookie.net/esstarwars/images/8/8e/TIE_Fighter_DICE.png',
    'vehicles-14': 'https://static.wikia.nocookie.net/esstarwars/images/e/e1/Snowspeeder-SWCT.png',
    
    // Personajes
    'people-1': 'https://static.wikia.nocookie.net/esstarwars/images/2/20/LukeTLJ.jpg',
    'people-2': 'https://static.wikia.nocookie.net/esstarwars/images/e/eb/ArtooTFA2-Fathead.png',
    'people-3': 'https://static.wikia.nocookie.net/esstarwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png',
    'people-4': 'https://static.wikia.nocookie.net/esstarwars/images/7/76/Darth_Vader.jpg',
    'people-5': 'https://static.wikia.nocookie.net/esstarwars/images/f/fc/Leia_Organa_TLJ.png',
  };
  
  // Comprobamos si tenemos una imagen conocida para este elemento
  const keyId = `${type}-${id}`;
  if (knownImages[keyId]) {
    return knownImages[keyId];
  }
  
  // Si no hay una imagen conocida, usamos la URL de starwars-visualguide
  return `https://starwars-visualguide.com/assets/img/${imageType}/${id}.jpg`;
};

// Función para manejar errores de carga de imágenes
export const handleImageError = (event) => {
  console.log("Error al cargar imagen, usando respaldo");
  event.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
};