import {
    correoValidador,
    celularValidador,
    sueldoValidador,
    nombreValidador,
    terminosValidador,
    afpValidador
} from "./validations";

import { rutValidador } from "./validationRut";

export default function validate(form) {
    let errors = {};
    const aacento = "\u00e1";
    const oacento = "\u00f3";

    if (correoValidador(form.correo) !== "") {
        errors.correo = correoValidador(form.correo);
    }

    if (celularValidador(form.celular) !== "") {
        errors.celular = celularValidador(form.celular);
    }

    if (nombreValidador(form.nombre) !== "") {
        errors.nombre = nombreValidador(form.nombre);
    }

    if (sueldoValidador(form.sueldo) !== "") {
        errors.sueldo = sueldoValidador(form.sueldo);
    }

    let isValid = rutValidador(form.rut);

    if (!isValid) {
        errors.rut = `Ingrese un RUT v${aacento}lido y con gui${oacento}n.`;
    }

    if (terminosValidador(form.terminosycondiciones) !== "") {
        errors.terminosycondiciones = terminosValidador(form.terminosycondiciones);
    }

    if (afpValidador(form.afp) !== "") {
        errors.afp = afpValidador(form.afp);
    }

    return errors;
}
