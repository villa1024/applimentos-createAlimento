import React, { useState } from 'react';
import swal from 'sweetalert';

import { clienteAxios } from '../../config/axios';

export const FormCreate = () => {

    const [form, setForm] = useState({
        nombre: '',
        porcion: '',
        caloriasPorcion: ''
    });

    const { nombre, porcion, caloriasPorcion } = form;

    const handleInputChange = ({ target }) => {
        if (target.name === 'nombre') {
            setForm({
                ...form,
                [target.name]: target.value.toUpperCase()
            });
        }
        else if (target.name === 'porcion') {
            setForm({
                ...form,
                [target.name]: Number(target.value)
            });
        }
        else if (target.name === 'caloriasPorcion') {
            setForm({
                ...form,
                [target.name]: Number(target.value)
            });
        }
    };

    const SubmitFormulario = async (e) => {
        e.preventDefault();
        const { data } = await clienteAxios.post('/api/food', form);
        if (!data.ok) {
            swal("Error!", data.msg, "error");
        }
        else {
            swal("Perfecto!", "El Alimento ha sido creado", "success");
        }
        setForm({
            nombre: '',
            porcion: '',
            caloriasPorcion: ''
        });
    };

    return (
        <>
            <h1 className="my-5 text-center bg-blue">CREAR NUEVO ALIMENTO</h1>
            <form className="form-create">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Ingrese nombre del alimento</label>
                    <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        id="exampleFormControlInput1"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea2" className="form-label">Ingrese gramos por porción</label>
                    <input
                        type="number"
                        className="form-control"
                        autoComplete="off"
                        id="exampleFormControlInput2"
                        name="porcion"
                        value={porcion}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Ingrese calorías por porción</label>
                    <input
                        type="number"
                        className="form-control"
                        autoComplete="off"
                        id="exampleFormControlInput3"
                        name="caloriasPorcion"
                        value={caloriasPorcion}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-grid gap-2">
                    <button
                        type="button"
                        className="btn btn-primary fz-20 mt-3"
                        onClick={SubmitFormulario}
                    >ENVIAR DATOS</button>
                </div>
            </form>
        </>
    );
};