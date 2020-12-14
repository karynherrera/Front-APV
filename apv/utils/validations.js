export const correoValidador = (email) => {
    let error = "";
    const aacento = "\u00e1";
    if (!email) {
        error = "Por favor ingrese su correo.";
    } else if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_-])+\.([A-Za-z]{2,3})$/.test(email)) {
        error = `Tu correo debe incluir un "@" y un dominio v${aacento}lido.`;
    }

    return error;
};

export const nombreValidador = (nombre) => {
    let error = "";
    const uacento = "\u00fa";

    if (!nombre) {
        error = "Ingresa al menos un nombre y apellido.";
    } else if (!/^[A-Za-z \u00F1\u00D1\u00E1\u00E9\u00ED\u00F3\u00FA\u00FC]{3,60}$/.test(nombre)) {
        error = `Ingresa tu nombre sin n${uacento}meros ni caracteres.`
    }

    return error;
};

export const celularValidador = (celular) => {

    let error = "";
    const uacento = "\u00fa";
    const iacento = "\u00ed";
    const eacento = "\u00e9";

    if (!celular) {
        error = `Por favor ingrese su n${uacento}mero de tel${eacento}fono.`;
    } else if (!/^[9]{1}[0-9]{8}$/.test(celular)) {
        error = `Ingresa un n${uacento}mero de 9 d${iacento}gitos.`;
    }
    return error;
};

export const sueldoValidador = (sueldo) => {
    let error = "";
    const iacento = "\u00ed";

    if (!sueldo) {
        error = `Por favor ingrese su sueldo l${iacento}quido.`;
    } else {
        let amount = sueldo;
        amount = eliminarValoresNoEnteros(amount);

        if (!/^[0-9]{6,8}$/.test(amount) || parseInt(amount) > 10000000) {
            error = `Ingrese un sueldo l${iacento}quido entre $100.000 y $10.000.000.`;
        }
    }

    return error;
};

export const eliminarValoresNoEnteros = (value) => {
    return parseInt(value.replace(/[^0-9]/g, ""));
};

export const sueldoFormateador = (value) => {
    const formatterPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP"
    });
    return formatterPeso.format(value);
};

export const terminosValidador = (terminosycondiciones) => {
    let error = "";
    const iacento = "\u00ed";

    if (!terminosycondiciones) {
        error = `Debe aceptar las condiciones del servicio y la pol${iacento}tica de privacidad.`;
    }
    return error;
};

export const afpValidador = (afp) => {
    let error = "";
    if (!afp || afp === "default") {
        error = `Debe seleccionar una AFP.`;
    }

    return error;
};
