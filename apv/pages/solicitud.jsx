import React from "react";
import Head from "next/head";
import contacto from "../public/assets/svg/contacto.svg"
import {Col, Row, Button} from "react-bootstrap";


export default function solicitud() {

    function redireccion() {
        window.location.href = "https://www.afpmodelo.cl/";
    }

    const dudas_texto =
        "Muchas gracias por utilizar la calculadora de Aumenta Tu Sueldo, un ejecutivo se contactará contigo a la brevedad para entregarte toda la asesoría necesaria.";

    return (
        <>
            <Head>
                <title>Ahorro Previsional Voluntario | Solicitud de Contacto | AFP Modelo</title>
                <meta name="description" content="Aumenta tu sueldo líquido, pagando una menor comisión de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div className="solicitud" >
                <section>
                    <div className="">
                        <div className="row w-100 container-padre dudas">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="container-block">
                                    <img src={contacto} alt="Contacto Ejecutivo" />
                                    <div className="txtDesktop">
                                        <div className="container-title">
                                            <h5>¡Tu solicitud fue enviada con éxito!</h5>
                                            <p>{dudas_texto}</p>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-block mt-3"
                                                    id="webmodelo"
                                                    onClick={redireccion}
                                                >
                                                    Visitar sitio AFP Modelo
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}