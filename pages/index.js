import Link from "next/link"
import Card from '../components/Card'
import Container from "../components/container";


import empresa from '../public/icons/empresa.png'
import empleados from '../public/icons/empleados.png'
import indicadores from '../public/icons/indicadores.png'
import usuarios from '../public/icons/usuarios.png'


const _Empresa = '15 solicitudes sin tratar';
const _Indicadores = 'Visitado por última vez: 13/10/2020';
const _Empleados = '13 usuarios sin empresa registrada';
const _Usuario = '24 usuarios activos en la plataforma';

const Index = () => {
    return (
        <Container title='Inicio'>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex d-flex-mio mt-5" id="accordion" role="tablist">
                        <div className="contenedorcard m-2 ">
                            <div className="card m-2">
                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className='py-3 -mb-2 mx-10 md:flex'>
                                        <Link href='/empresasConsulta'>
                                            <a><Card imageItem={empresa} text={'Solicitudes de creación de empresas'} text1={_Empresa} caso={'1'} /></a>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2 ">
                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className='py-3 -mb-2 mx-10 md:flex'>
                                            <Card imageItem={indicadores} text={'Indicadores'} text1={_Indicadores} caso={'2'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contenedorcard m-2 ">
                            <div className="card m-2">
                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className='py-3 mx-10 md:flex'>
                                            <Card imageItem={empleados} text={'Inscripción de empleados en empresas'} text1={_Empleados} caso={'3'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-2">
                                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <div className='py-3 mx-10 md:flex'>
                                            <Card imageItem={usuarios} text={'Gestión de usuarios'} text1={_Usuario} caso={'4'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Index;
