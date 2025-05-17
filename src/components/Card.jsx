import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { getImageUrl, handleImageError } from "../utils/imageUtils";

export const Card = ({ id, name, type, img }) => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    // Obtener URL de imagen
    const imageUrl = img || getImageUrl(type, id);

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
                img: imageUrl 
            }});
        }
    };

    return (
        <div className="card-starwars">
            <img
                src={imageUrl}
                alt={name}
                className="card-image"
                onError={handleImageError}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button className="btn-starwars" onClick={handleViewMore}>
                    VER MÁS
                </button>
                <button className="btn-favorite" onClick={toggleFavorite}>
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
    );
};