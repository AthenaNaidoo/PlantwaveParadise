// src/FishTank.js
import React, { useEffect, useState } from 'react';
import './Waterfall.css';

export const FishTank = () => {
    const [fishes, setFishes] = useState([]);

    useEffect(() => {
        const fishCount = 5;
        const initialFishes = [];

        for (let i = 0; i < fishCount; i++) {
            initialFishes.push({
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                duration: 5 + Math.random() * 5,
            });
        }

        setFishes(initialFishes);
    }, []);

    return (
        <div className="fish-tank">
            {fishes.map(fish => (
                <div
                    key={fish.id}
                    className="fish"
                    style={{
                        top: `${fish.top}%`,
                        animationDuration: `${fish.duration}s`,
                    }}
                >
                    <div className="fish-content">&gt;&lt;&gt;</div>
                </div>
            ))}
        </div>
    );
};


