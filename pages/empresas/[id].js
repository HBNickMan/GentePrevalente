import axios from "axios";
import Container from "../../components/container"
import {useRouter} from 'next/router';


function EmpresasView({ empresa }) {

  const router = useRouter()

  const handelDelete = async (id) =>{
    await axios.delete('/api/empresa/'+id)
    router.push('/')
  }
  const handelCambiaEstado = async (id, res) => {
    await axios.put('/api/empresas/'+id)
    router.push('/')
  }
  
  return (
    <Container title='Mantenimiento'>
      <div className="row">
        <div className="col-md-12">
          <div className="card  d-flex flex-column bd-highlight justify-content-center">
            <div className="card-header"><h1>Mantenimiento de Empresas</h1></div>
            <div className="card-body">
              <p>Nombre de la Empresa: </p><h1>{empresa.empre_name}</h1>
              <p>Razon Social: </p><h2>{empresa.empre_buss}</h2>
              <p>Tipo de Identificación: {empresa.empre_type}</p>
              <p>Numero de Identificación: {empresa.empre_itype}</p>
              <p>Numero de Empleados: {empresa.empre_empl}</p>
              <p>Marca: {empresa.empre_logo}</p>
              <p>Estatus: {empresa.empre_stat}</p>
              <p>Registrada: {empresa.createdAt}</p>
              <p>Actualizada: {empresa.modificAt}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-warning text-white mx-2 px-3 py-2">
                Modificar
              </button>
              <button className="btn btn-danger text-white px-3 py-2"
              onClick={() => {
                handelDelete(empresa.empre_id);
              }}>
                Eliminar
              </button>
              <button className="btn btn-info text-white mx-2 px-3 py-2"
              onClick={() => {
                handelCambiaEstado(empresa.empre_id, empresa.empre_stat);
              }}>
                {(empresa.empre_stat==='0')?"Aprobar":"Rechazar"}
              </button>
            </div>
          </div>
        </div>
      </div>

    </Container>

  )
}

export const getServerSideProps = async (context) => {

  const { data: empresa } = await axios.get('http://localhost:3000/api/empresas/' + context.query.id);

  return {
    props: {
      empresa,
    },
  };
};

export default EmpresasView