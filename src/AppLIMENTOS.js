import React from 'react';
import { FormCreate } from './components/Formulario/FormCreate';

// Components
import { Navbar } from './components/Navbar/Navbar';

export const AppLIMENTOS = () => {
    return (
        <div>
            <Navbar />
            <FormCreate />
        </div>
    );
};