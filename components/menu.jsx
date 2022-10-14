import Link from 'next/link';
import logo from '../public/imglogo.png';
import Image from 'next/image'

const $title_emp0 = "Gente Prevalente";
export default function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Image
                src={logo}
                alt="GentePrevalente"
                width={50}
                height={50}
            />
            <Link href='/'>
              <a className="navbar-brand active">{$title_emp0}</a>
            </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className=" mx-5 my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <form className="d-flex">
                  <i aria-hidden={true} className='mx-1 my-2 text-white fas fa-search'></i>
                  <input className=" me-2" type="search" placeholder="Buscar...." aria-label="Search" />
                </form>
              </li>
            </ul>
            <ul className=" m-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link href='/empresas'>
                  <a className="nav-link"><i aria-hidden={true} className="text-white mx-2 fas fa-cogs"></i>Administración</a>
                </Link>
              </li>
            </ul>
            <ul className=" m-auto d-flex justify-content-evenly">
              <li className="nav-item dropdown">
                <Link href='/'>
                  <a className="nav-link dropdown-toggle" id="dropdown-empleo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i aria-hidden={true} className="text-white mx-1 fas fa-suitcase"/>Empleo</a>
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-empleo">
                  <a className="dropdown-item" href="top_pvp.html">Cargos</a>
                  <a className="dropdown-item" href="top_pk.html">Propuestas</a>
                </div>
              </li>
              <li className="nav-item">
                <Link href='/'>
                  <a className="nav-link"><i aria-hidden={true} className="text-white mx-1 fas fa-clipboard-list"></i>My Cv</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href='/'>
                  <a className="nav-link dropdown-toggle" id="dropdown-usuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i aria-hidden={true} className="text-white mx-1 fas fa-user-circle"/>Empleo</a>
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown-usuario">
                  <a className="dropdown-item" href="raid_boss.html">Configuración</a>
                  <a className="dropdown-item" href="grand_boss.html">Salir</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}



