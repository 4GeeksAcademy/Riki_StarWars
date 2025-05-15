import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const FavoritesDropdown = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const removeFavorite = (id) => {
        dispatch({ type: "REMOVE_FAVORITE", payload: id });
    };

    // Función para manejar errores de imágenes
    const handleImageError = (event, type) => {
        const fallbackImages = {
            people: "https://via.placeholder.com/30/000000/FFFFFF?text=C",
            planets: "https://via.placeholder.com/30/003366/FFFFFF?text=P",
            vehicles: "https://via.placeholder.com/30/660000/FFFFFF?text=V"
        };
        event.target.src = fallbackImages[type] || "https://via.placeholder.com/30?text=SW";
    };

    return (
        <div className="favorites-dropdown">
            <button className="dropdown-btn">
                ⭐ Favoritos <span className="fav-count">({store.favorites.length})</span>
            </button>
            <div className="dropdown-content">
                {store.favorites.length === 0 ? (
                    <p className="no-favorites">No hay favoritos</p>
                ) : (
                    store.favorites.map((fav) => (
                        <div key={fav.id} className="favorite-item">
                            {/* Añadir imagen en miniatura */}
                            <img 
                                src={fav.img}
                                alt={fav.name}
                                style={{ 
                                    width: "30px", 
                                    height: "30px", 
                                    borderRadius: "50%", 
                                    marginRight: "8px",
                                    border: "1px solid #FFD700" 
                                }}
                                onError={(e) => handleImageError(e, fav.type)}
                            />
                            <span onClick={() => navigate(`/${fav.type}/${fav.id}`)}>
                                {fav.name}
                            </span>
                            <button onClick={() => removeFavorite(fav.id)}>❌</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};