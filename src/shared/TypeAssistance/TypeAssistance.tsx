import React, { useState } from 'react';
import './TypeAssistance.css';

const types = [
    {
        id: 'financial',
        label: 'Фінансова допомога',
        icon: '/icons/finance-manager.svg',
        info: 'Тут інформація про фінансову допомогу...',
    },
    {
        id: 'material',
        label: 'Матеріальна допомога',
        icon: '/icons/clothes.svg',
        info: 'Тут інформація про матеріальну допомогу...',
    },
    {
        id: 'volunteering',
        label: 'Волонтерство',
        icon: '/icons/heart.svg',
        info: 'Тут інформація про волонтерство...',
    },
    {
        id: 'to_do',
        label: 'Зробити',
        icon: '/icons/hand.svg',
        info: 'Тут інформація про те, що можна зробити...',
    },
];

export function TypeAssistance() {
    const [selected, setSelected] = useState('financial');

    return (
        <div className="type-container">
            <h1 className="main-font">Види допомоги</h1>
            <p className="text-font">Ви можете змінити вид допомоги</p>

            <div className="icons-wrapper">
                {types.map(({ id, label, icon }) => (
                    <button
                        key={id}
                        type="button"
                        className={`icon-box ${selected === id ? 'active' : ''}`}
                        onClick={() => setSelected(id)}
                    >
                        <img src={icon} alt={label} className="icon-image" />
                        <span className="icon-label">{label}</span>
                    </button>
                ))}
            </div>

            <div className="info-box">{types.find((type) => type.id === selected)?.info}</div>
        </div>
    );
}
