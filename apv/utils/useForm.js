import { useState, useEffect } from "react";

import {
    nombreValidador,
    correoValidador,
    celularValidador,
    sueldoValidador,
    sueldoFormateador,
    eliminarValoresNoEnteros
} from "./validations";

import { rutValidador } from "./validationRut";

const useForm = (callback, validate) => {
    const [form, setForm] = useState({
        nombre: "",
        rut: "",
        correo: "",
        celular: "",
        sueldo: "",
        afp: "",
        terminosycondiciones: false,
        esDisabled: true,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const oacento = "\u00f3";
    const aacento = "\u00e1";

    const handleChange = (e) => {
        e.preventDefault();

        let { name, value, type, checked } = e.target;
        let mensaje = "";

        switch (name) {
            case "nombre": {
                mensaje = nombreValidador(value);
                break;
            }
            case "rut": {
                //value = formatearRut(value);
                let isValid = rutValidador(value);

                if (!isValid) {
                    mensaje = `Por favor ingrese un RUT v${aacento}lido sin puntos y con gui${oacento}n.`;
                }
                break;
            }
            case "correo": {
                mensaje = correoValidador(value);
                break;
            }
            case "celular": {
                mensaje = celularValidador(value);
                break;
            }
            case "sueldo": {
                value = eliminarValoresNoEnteros(value);

                if (isNaN(value)) {
                    value = 0;
                }

                value = sueldoFormateador(value);
                mensaje = sueldoValidador(value);
                break;
            }
            case "afp": {
                break;
            }
            case "terminosycondiciones": {

                //console.log(mensaje);
                break;
            }
            default: {
                break;
            }
        }



        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });


        setErrors({
            ...errors,
            [name]: mensaje
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form));
        setIsSubmitting(true);
    };

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { form, handleChange, handleSubmit, errors };
};

export default useForm;
