var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import Container from '../components/container';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  580: {
    items: 1,
    margin: 10,
  },
  768: {
    items: 1,
    margin: 10,
  },
  900: {
    items: 1,
    margin: 10,
  },
  1200: {
    items: 1,
    margin: 20,
  },
  1400: {
    items: 1,
    margin: 20,
  }
}

function empresasConsulta({ empresas }) {
  return (
    <Container title='Consultas'>
      <h1 className="center-align titulo">Consulta de Empresas</h1>
      <div className="carousel center-align">
        <div>
          <OwlCarousel
            loop
            nav={true}
            responsive={Responsive}
            autoplay={false}
            dots={true}
            autoplayTimeout={2000}
            autoplaySpeed={2000}
            autoplayHoverPause={true}
          >
            {empresas.map(empresa => (
              <div key={empresa.empre_id} className="item">
                <Link href={`/empresas/${empresa.empre_id}`} key={empresa.empre_id} >
                  <a>
                    <>
                      <div className="grid grid-cols-2 imgform">
                        <Image
                          src={'/logos/' + empresa.empre_logo}
                          alt={empresa.name}
                          width={150}
                          height={150}
                          className="imgcard"
                        />
                        <div className="mx-0-mio">
                          <button className={(empresa.empre_stat == "0")?'invisible':undefined}>
                            <i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Empresa Aprobada
                          </button>
                          <button type='submit' className={(empresa.empre_stat == "1")?'invisible':undefined}>
                            <i aria-hidden={true} className="text-2xl text-red-500 align-middle fas fa-times-circle"></i> Empresa Rechazada
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <label className='text-gray-500' htmlFor="name">
                          <span className='fs-6'>Nombre de la empresa: </span><br></br>
                          <input name="_name" type="text" size={35} className="font-bold mb-4 shadow border-top-0 border-end-0 border-start-0 rounded" disabled defaultValue={empresa.empre_name} />
                        </label>

                        <label className='text-gray-500' htmlFor="_buss">
                          <span className='fs-6'>Razón Social:</span><br></br>
                          <input name="_buss" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" disabled defaultValue={empresa.empre_buss} />
                        </label>
                      </div>
                      <div className="grid grid-cols-2">
                        <label className='text-gray-500' htmlFor="_type">
                          <span className='fs-6'>Tipo de identificación</span><br></br>
                          <input name="_type" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded" disabled defaultValue={empresa.empre_type} />
                        </label>

                        <label className='text-gray-500' htmlFor="_itype">
                          <span className='fs-6'>Identificación</span><br></br>
                          <input name="_itype" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" disabled defaultValue={empresa.empre_ityp} />
                        </label>

                      </div>
                      <div className="grid grid-cols-2">
                        <label className='text-gray-500' htmlFor="_empl">
                          <span className='fs-6'># de empleados</span><br></br>
                          <input name="_empl" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" disabled defaultValue={empresa.empre_empl} />
                        </label>
                      </div>
                    </>
                  </a>
                </Link>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>

    </Container>
  )
}

export const getServerSideProps = async (context) => {

  const { data: empresas } = await axios.get('https://genteprevalente-app.vercel.app/api/empresas')

  return {
    props: {
      empresas
    }
  };
};

export default empresasConsulta



/*
 <div>
        <h2>Consulta de Empresas</h2>
        <OwlCarousel
          loop
          nav={false}
          responsive={Responsive}
          autoplay={false}
          dots={true}
          nav={true}
          autoplayTimeout={2000}
          autoplaySpeed={2000}
          autoplayHoverPause={true}
        >
          {empresas.map(empresa => (
            <div key={empresa.empre_id}>
              <Link href={`/empresas/${empresa.empre_id}`} key={empresa.empre_id} >
                <a>
                  <div className="item">
                    <div className="grid grid-cols-2">
                      <label className='text-gray-500' htmlFor="name">
                        <span className='fs-6'>Nombre de la empresa: </span><br></br>
                        <input name="_name" type="text" size={35} className="font-bold mb-4 shadow border-top-0 border-end-0 border-start-0 rounded" disabled defaultValue={empresa.empre_name} />
                      </label>

                      <label className='text-gray-500' htmlFor="_buss">
                        <span className='fs-6'>Razón Social:</span><br></br>
                        <input name="_buss" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" disabled defaultValue={empresa.empre_buss} />
                      </label>
                    </div>
                    <div className="grid grid-cols-2">
                      <label className='text-gray-500' htmlFor="_type">
                        <span className='fs-6'>Tipo de identificación</span><br></br>
                        <input name="_type" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded" disabled defaultValue={empresa.empre_type} />
                      </label>

                      <label className='text-gray-500' htmlFor="_itype">
                        <span className='fs-6'>Identificación</span><br></br>
                        <input name="_itype" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" disabled defaultValue={empresa.empre_ityp} />
                      </label>

                    </div>
                    <div className="grid grid-cols-2">
                      <label className='text-gray-500' htmlFor="_empl">
                        <span className='fs-6'># de empleados</span><br></br>
                        <input name="_empl" type="text" size={35} className="font-bold shadow border-top-0 border-end-0 border-start-0 rounded mx-2 mb-4" disabled defaultValue={empresa.empre_empl} />
                      </label>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </OwlCarousel>
      </div>





               <div className="border border-gray-200 shadow-md p-6">
                    <h1>{empresa.empre_name}</h1>
                    <h2>{empresa.empre_buss}</h2>
                    <p>{empresa.empre_type}</p>
                    <p>{empresa.empre_itype}</p>
                    <p>{empresa.empre_empl}</p>
                    <p>{empresa.empre_logo}</p>
                    <p>{empresa.empre_stat}</p>
                    <p>{empresa.createdAt}</p>
                    <p>{empresa.modificAt}</p>
                  </div>




  
   








            <div className="container my-4 w-50">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card bg-dark text-white m-width-100">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Card title 1</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src="https://i.stack.imgur.com/yyE56.png" alt="..." width="100%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-dark text-white m-width-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Card title 2</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src="https://i.stack.imgur.com/yyE56.png" alt="..." width="100%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-dark text-white m-width-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Card title 3</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src="https://i.stack.imgur.com/yyE56.png" alt="..." width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="#carouselExampleControls">
            <a className="carousel-control-prev"  role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
          </Link>
          <Link href="#carouselExampleControls">
            <a className="carousel-control-next"  role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </Link>
        </div>
      </div>

*/