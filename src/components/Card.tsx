import React from 'react';

interface Item {
    imageUrl: string;
    title: string;
    price: number;
}

interface CardProps {
    item: Item;
    onAddToFavorite: (item: Item) => void;
}

const Card: React.FC<CardProps> = ({ item, onAddToFavorite }) => {
    return (
        <div className="card">
            <div className="favorite" onClick={() => onAddToFavorite(item)}>
                <img src="/like-1.svg" alt="Like" />
            </div>
            <img className="product" src={item.imageUrl} alt={item.title} />
            <p className="title">{item.title}</p>
            <div className="flex justify-between align-items">
                <div>
                    <p className="price">Цена:</p>
                    <b>{item.price} руб.</b>
                </div>
                <img className="plus" src="/btn-plus.svg" alt="Checked" />
            </div>
        </div>
    );
};

export default Card;
