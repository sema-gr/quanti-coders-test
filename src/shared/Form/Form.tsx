import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from './types';
import './Form.css';

export function Form() {
    const [selected, setSelected] = useState<'fiz' | 'ur'>('fiz');

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm<FormData>({
        mode: 'onTouched',
    });

    const onSubmit = (data: FormData) => {
        alert('Форма валідна!\n' + JSON.stringify(data, null, 2));
    };
    return (
        <div className="form-container">
            <h1 className="main-font">Заповність форму</h1>

            <div className="switcher">
                <button
                    className={selected === 'fiz' ? 'switch-btn active' : 'switch-btn'}
                    onClick={() => {
                        setSelected('fiz');
                        clearErrors('companyName');
                    }}
                >
                    Фіз. особа
                </button>

                <button
                    className={selected === 'ur' ? 'switch-btn active' : 'switch-btn'}
                    onClick={() => setSelected('ur')}
                >
                    Юр. особа
                </button>
            </div>

            <form className="main-content" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="content-div">
                    <div className="first-line">
                        <div className="main-div">
                            <p>Імя</p>
                            <input
                                type="text"
                                {...register('firstName', { required: "Імя обов'язкове" })}
                            />
                            {errors.firstName && (
                                <span className="error">{errors.firstName.message}</span>
                            )}
                        </div>
                        <div className="main-div">
                            <p>Прізвище</p>
                            <input
                                type="text"
                                {...register('lastName', { required: "Прізвище обов'язкове" })}
                            />
                            {errors.lastName && (
                                <span className="error">{errors.lastName.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="input-with-link">
                        <div className="main-div">
                            <p>Назва компанії, організації</p>
                            <input
                                type="text"
                                {...register('companyName', {
                                    required: "Назва компанії обов'язкова",
                                })}
                            />
                            {errors.companyName && (
                                <span className="error">{errors.companyName.message}</span>
                            )}
                        </div>
                        <div>
                            <br />
                            <span className="logo-link">+ Логотип</span>
                        </div>
                    </div>

                    <div className="main-div">
                        <p>Email-адреса</p>
                        <input
                            type="text"
                            {...register('email', {
                                required: "Email обов'язковий",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Некоректний email',
                                },
                            })}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>

                    <div className="main-div">
                        <p>Номер телефону</p>
                        <input
                            type="text"
                            {...register('phone', {
                                required: "Номер телефону обов'язковий",
                                pattern: {
                                    value: /^[\d\s\-+()]{6,20}$/,
                                    message: 'Некоректний номер телефону',
                                },
                            })}
                        />
                        {errors.phone && <span className="error">{errors.phone.message}</span>}
                    </div>
                </div>

                <div className="content-div">
                    <div className="main-div">
                        <p>Країна</p>
                        <input
                            type="text"
                            {...register('country', { required: "Країна обов'язкова" })}
                        />
                        {errors.country && <span className="error">{errors.country.message}</span>}
                    </div>
                    <div className="row-div">
                        <div className="main-div">
                            <p>Місто</p>
                            <input
                                type="text"
                                {...register('city', { required: "Місто обов'язкове" })}
                            />
                            {errors.city && <span className="error">{errors.city.message}</span>}
                        </div>
                        <div className="main-div">
                            <p>Штат, район</p>
                            <input
                                type="text"
                                {...register('state', { required: "Штат/район обов'язковий" })}
                            />
                            {errors.state && <span className="error">{errors.state.message}</span>}
                        </div>
                    </div>
                    <div className="main-div">
                        <p>Адреса</p>
                        <input
                            type="text"
                            {...register('address', { required: "Адреса обов'язкова" })}
                        />
                        {errors.address && <span className="error">{errors.address.message}</span>}
                    </div>
                    <div className="main-div" id="postIndex">
                        <p>Поштовий індекс</p>
                        <input
                            type="text"
                            {...register('postalCode', {
                                required: "Поштовий індекс обов'язковий",
                            })}
                        />
                        {errors.postalCode && (
                            <span className="error">{errors.postalCode.message}</span>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
