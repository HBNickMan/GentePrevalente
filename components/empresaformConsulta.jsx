import Image from "next/image";
import styled from "styled-components"
import Modal from './modal'
import Container from "./container";
import logo from '../public/imglogo.png';
import axios from "axios";
import { useState } from "react";

export function EmpresaFormConsulta() {

    const [empresa,  setEmpresa]  =  useState({
        _name: '',
        _buss: '',
        _type: '',
        _itype: '',
        _empl: '',
        _logo: '',
        _stat: '0',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log('Empresa Creada con Exito!!!');
        const res = await axios.post('/api/empresas', empresa)
        console.log(res);
    }

    const handlerChange = ({target: {name, value}}) => {
        //si existe ya un valor para empresa, continua copiando los valores capturados
        setEmpresa({...empresa, [name]: [value]});
    }

    const [estadoModal, cambiarEstadoModal] = useState(false);

    return (
        <Container title='Empresas'>
            <h3 className="p-4">Administracion/Consulta de Empresas</h3>
            <div className="container d-flex justify-content-center p-4">
                <form onSubmit={handleSubmit} className="p-5 p-5-mio mt-8 space-y-6 bg-white rounded-lg shadow-lg">
                    <div className="d-flex justify-content-end">
                        <div className="p-0 m-0">
                            <Image
                                //loader={myLoader}
                                src={logo}
                                alt="GentePrevalente"
                                //src={empresa.empresa.logo}
                                //alt={empresa.empresa.name}
                                width={150}
                                height={150}
                                className="bg-gray-700"
                            />
                        </div>
                        <div className="end-0 px-5">
                            <div className="p-0 mx-0 my-2">
                                <button onClick={() => {
                                    cambiarEstadoEmpresa(1);
                                }} className='btn btn-primary'>
                                    <i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Aprobar Empresa
                                </button>
                            </div>
                            <div className="p-0 m-0">
                                <button onClick={() => {
                                    cambiarEstadoEmpresa(2);
                                }} className='btn btn-danger'>
                                    <i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-times-circle"></i> Rechazar Empresa
                                </button>
                            </div>
                        </div>
                    </div>
   
                    <div className="grid grid-cols-2">
                        <label className='text-gray-500' htmlFor="name">  
                            <span className='fs-6'>Nombre de la empresa: </span><br></br>
                            <input name="_name" type="text" size={35} required={true} className="font-bold mb-4 shadow border-top-0 border-end-0 border-start-0 rounded" onChange={handlerChange} />
                        </label>

                        <label className='text-gray-500' htmlFor="_buss"> 
                            <span className='fs-6'>Razón Social:</span><br></br>
                            <input name="_buss" type="text" size={35} required={true} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" onChange={handlerChange} /> 
                        </label>   
                    </div>
                    <div className="grid grid-cols-2">
                        <label className='text-gray-500' htmlFor="_type"> 
                            <span className='fs-6'>Tipo de identificación</span><br></br>
                            <input name="_type" type="text" size={35} required={true} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded " onChange={handlerChange}/>
                        </label>

                        <label className='text-gray-500' htmlFor="_itype"> 
                            <span className='fs-6'>Identificación</span><br></br>
                            <input name="_itype" type="text" size={35} required={true} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" onChange={handlerChange}/>
                        </label>

                    </div>
                    <div className="grid grid-cols-2">
                        <label className='text-gray-500' htmlFor="_empl"> 
                        <span className='fs-6'># de empleados</span><br></br>
                        <input name="_empl" type="text" size={35} required={true} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" onChange={handlerChange}/>
                        </label>
                        <label className='text-gray-500 '>
                            <button onClick={() => {
                                cambiarEstadoModal(!estadoModal);
                            }}
                                className='bg-blue-500 hover:bg-blue-700 py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline font-bold text-black'>
                                <i aria-hidden={true} className="text-2xl text-blue-500 align-middle fas fa-paperclip"></i> Ver archivos adjuntos
                            </button>
                        </label>
                    </div>
                    <div className="flex flex-col py-2 md:visible">
                        <button type='submit' className='bg-blue-500 hover:bg-blue-700 py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline font-bold text-black'>
                            <i aria-hidden={true} className="text-2xl text-red-500 align-middle fas fa-times-circle"></i> Guardar Registro
                        </button>
                    </div>
                </form>
            </div>
            <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}
                titulo="Consulta de Documentos"
            >
                <Contenido>
                    <h1>Esto es un Modal</h1>
                    <p>Prueba</p>
                    <Boton>Aceptar</Boton>
                </Contenido>
            </Modal>
        </Container>
    )
}

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;