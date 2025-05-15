import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageUtils";

export const Card = ({ id, name, type, img }) => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [imgError, setImgError] = useState(false);

    // URL de respaldo según el tipo
    const fallbackImages = {
        people: "https://via.placeholder.com/150/000000/FFFFFF?text=Character",
        planets: "https://via.placeholder.com/150/003366/FFFFFF?text=Planet",
        vehicles: "https://via.placeholder.com/150/660000/FFFFFF?text=Vehicle"
    };
    
    // Generar la URL de la imagen o usar la respaldo si hay error
    const imageUrl = img || getImageUrl(type, id);
    const fallbackUrl = fallbackImages[type] || "https://via.placeholder.com/150?text=Star+Wars";

    const handleViewMore = () => {
        navigate(`/${type}/${id}`);
    };

    const isFavorite = store.favorites.some(fav => fav.id === id);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: id }); 
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: { 
                id, 
                name, 
                type, 
                img: imgError ? fallbackUrl : imageUrl 
            }});
        }
    };

    const handleImageError = () => {
        console.log("Error al cargar la imagen:", name);
        setImgError(true);
    };

    return (
        <div className="card-starwars">
            <img
                src={imgError ? fallbackUrl : imageUrl}
                alt={name}
                className="card-image"
                onError={handleImageError}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button className="btn-starwars" onClick={handleViewMore}>
                    Ver más
                </button>
                <button className="btn-favorite" onClick={toggleFavorite}>
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
    );
};