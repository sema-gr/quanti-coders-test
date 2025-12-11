import { useState, useEffect } from 'react';
import { types, paymentMethods } from './data';

import './TypeAssistance.css';

export function TypeAssistance() {
    const [selected, setSelected] = useState('financial');
    const [paymentSelected, setPaymentSelected] = useState('card');
    const [activeTab, setActiveTab] = useState(2);

    useEffect(() => {
        if (selected === 'financial') setActiveTab(2);
        if (selected === 'material') setActiveTab(3);
        if (selected === 'to_do') setActiveTab(1);
        if (selected === 'volunteering') setActiveTab(4);
    }, [selected]);

    const getArrowPosition = () => {
        switch (activeTab) {
            case 1:
                return '2%';
            case 2:
                return '30%';
            case 3:
                return '60%';
            default:
                return '89%';
        }
    };

    const arrowPosition = getArrowPosition();

    return (
        <div className="type-container">
            <h1 className="main-font">Види допомоги</h1>
            <p className="text-font">Ви можете змінити вид допомоги</p>

            <div className="icons-wrapper">
                {types.map(({ id, label, icon }) => (
                    <div className="button-div" key={id}>
                        <button
                            type="button"
                            className={`icon-box ${selected === id ? 'active' : ''}`}
                            onClick={() => setSelected(id)}
                        >
                            <img src={icon} alt={label} className="icon-image" />
                        </button>
                        <span className="icon-label">{label}</span>
                    </div>
                ))}
            </div>

            <div className="info-box">
                <div className="arrow-pointer" style={{ left: arrowPosition }} />

                <div className="info-pay-div">
                    <h3>Спосіб оплати</h3>
                    <div className="columns-wrapper">
                        <div className="payment-methods">
                            {paymentMethods.map(({ id, label, icon }) => (
                                <button
                                    key={id}
                                    type="button"
                                    className={`payment-method ${paymentSelected === id ? 'active' : ''}`}
                                    onClick={() => setPaymentSelected(id)}
                                >
                                    <img src={icon} alt={label} />
                                    <span className="text-font">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="info-pay-div">
                    <h3>Введіть наступні дані</h3>
                    <div className="card-fields">
                        <div className="card-field">
                            <p>Номер карти</p>
                            <div className="card-number-row">
                                <input type="text" maxLength={4} className="card-input" />
                                <input type="text" maxLength={4} className="card-input" />
                                <input type="text" maxLength={4} className="card-input" />
                                <input type="text" maxLength={4} className="card-input" />
                            </div>

                            <div className="card-field-time">
                                <div className="field-time">
                                    <p>Термін дії</p>
                                    <div className="card-number-row">
                                        <input type="text" maxLength={5} className="card-input" />
                                    </div>
                                </div>

                                <div className="field-time">
                                    <p>CVC/CVV</p>
                                    <div className="card-number-row">
                                        <input type="text" maxLength={3} className="card-input" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="info-pay-button">Допомогти</button>
        </div>
    );
}
