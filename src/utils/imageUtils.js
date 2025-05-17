
import placeholderImage from '../assets/img/big-placeholder.jpg';

export const getImageUrl = (type, id) => {
  const typeMap = {
    people: 'characters',
    vehicles: 'vehicles',
    planets: 'planets'
  };
  
  const imageType = typeMap[type] || type;
  
 
  try {
    const imageUrl = new URL(`../assets/img/${imageType}/${id}.jpg`, import.meta.url).href;
    return imageUrl;
  } catch (error) {
    console.error(`Error loading image for ${type} ${id}:`, error);
    return placeholderImage;
  }
};

export const handleImageError = (event) => {
  event.target.src = placeholderImage;
};