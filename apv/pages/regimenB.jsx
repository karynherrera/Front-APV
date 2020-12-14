import { Button } from "react-bootstrap";
import Link from 'next/link'
import mujerRegimenB from "../public/assets/svg/regimenb.svg";
import arrow from "../public/assets/svg/arrow.svg"
import React from "react";


export default function RegimenB() {

    return(
        <section>
            <div className="resultado">
                <div className="row">
                    <div className="col-md-10 mx-auto d-flex flex-column">
                        <h1>Régimen B</h1>
                        <h2>Bonificación fiscal de un 15% de lo ahorrado.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-1 d-flex flex-column">
                        <h3>Estas son las características del régimen:</h3>
                        <br />
                        <p>En este régimen el monto que aportas en tu APV es descontado de la base tributaria, por lo que tienes un incentivo para el ahorro, al pagar menos impuestos.</p>
                        <p>El Régimen B se recomienda habitualmente a quienes reciben un sueldo mayor a los 3,5 millones mensuales.  No existe un mínimo para aportar, pero sí un máximo de 600 UF anuales en todo el sistema.</p>
                        <p>Dependiendo de cómo hagas tus depósitos el beneficio tributario lo puedes ver en tu liquidación de sueldo mes a mes o en la operación renta en abril de cada año.
                            Si bien los fondos tienen como fin aportar a tu jubilación, puedes hacer retiro de ellos, pero se descontará un 15% cada retiro que hagas a modo de retención como pago provisional de impuestos para la operación renta del año siguiente.</p>
                        <p>En caso que quieras hacer un ahorro que puedas retirar, te recomendamos que abras una Cuenta 2, que te permite invertir en los mismos multifondos de tu AFP con una baja comisión de administración.</p>
                        <h1>Esto quiere decir: </h1>
                        <p>El ahorro descuenta de tu renta tributable</p>
                        <p>No hay un mínimo de aporte y tiene un máximo de 600 UF anuales.</p>
                        <p>Tiene como objetivo aumentar tu pensión.</p>


                        <Link href="/regimenA" passHref>
                            <Button>Ver Regimen A</Button>
                        </Link>
                        <br />
                        <Link href="/" passHref>
                            <a><img src={arrow} alt="arrow" />Volver al Inicio.</a>
                        </Link>

                    </div>
                    <div className="col-md-2 offset-md-1 d-flex">
                        <img
                            src={mujerRegimenB}
                            alt="regimen B"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}