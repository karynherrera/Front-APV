import Head from 'next/head'
import ahorro from "../public/assets/svg/ahorro.svg"
import React, { useEffect, useState } from "react";
import {Card} from "react-bootstrap";
import ampolleta from "../public/assets/svg/ampolleta.svg";
import APVForm from "../components/ApvForm";
import axios from 'axios';

export default function Home(props) {
const bearer = props.bearer;

  return (
    <div className="container">
      <Head>
        <title>Aumenta tu Sueldo | Solicitud de Contacto | AFP Modelo</title>
        <meta name="description" content="Aumenta tu sueldo líquido, pagando una menor comisión de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo." />
        <meta name="robots" content="noindex, follow" />
      </Head>
        <div className="background">
            <section>
                <div className="row w-100 container-padre calculadora">

                    <div className="col-12 d-flex justify-content-center mobile">
                        <div className="container-title">
                            <h1>Conoce cuánto</h1>
                            <h1>aumentaría tu sueldo,</h1>
                            <h1>al cambiarte a</h1>
                            <h1>AFP Modelo.</h1>
                            <p>
                                Únete a la AFP con una de las comisiones más bajas del mercado.
                            </p>
                            <br/>
                            <br/>
                            <img src={ahorro} alt="cerditoAhorro" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12  desktop flex-column">
                            <img src={ampolleta} alt="pareja modelo" />
                            <h1>¿Por qué abrir un APV?</h1>
                            <p>El APV te permite complementar tus ahorros y/o compensar períodos no cotizados, para mejorar tu pensión. Dependiendo del régimen tributario que elijas podrás recibir un aporte fiscal o rebajar lo ahorrado de tu renta tributable.</p>
                        </div>
                    </div>

                    <APVForm token={bearer}/>
                </div>
            </section>
            <section className="">
                <div className="row">
                    <h4>Existen dos régimenes de APV</h4>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <Card>
                            <Card.Header>Régimen A</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>En este el Estado te entrega una bonificación de un 15% de lo que ahorras en el año con un tope de 6 UTM anuales. Por ejemplo, si ahorras $100.000 recibirás $15.000 adicionales, por lo que tu cuenta tendra $115.000.</p>
                                </Card.Text>
                                <Card.Link href="#">Saber Más</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <Card>
                            <Card.Header>Régimen B</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>Con este puedes rebajar tu ahorro de tu renta tributable. Esto lo puedes ver reflejado mes a mes en tu liquidación de sueldo o una vez al año en la operación renta, según realices tu aporte.</p>
                                </Card.Text>
                                <Card.Link href="#">Saber Más</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

        </div>

    </div>
  )
}

export async function getServerSideProps(context) {
    const baseUrl='https://apvbackendmanager.azurewebsites.net/'
    const apiToken = 'Token/GenerateToken';
    const response = await axios
        .get(`${baseUrl}${apiToken}`);
    const bearer = await response.data.key

    if (!bearer) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return { props: {bearer} }
}