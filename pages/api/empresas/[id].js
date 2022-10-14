import {pool} from '../../../config/db';

export default async function handler(req, res) { 
  
    switch (req.method) {
      case 'GET':
        return await getEmpresa(req, res)  
      case 'DELETE':
        return await deleteEmpresa(req, res)
      case 'PUT':
        return await updateEmpresa(req, res)
      default:
        break;
    }

   
  }

  const getEmpresa = async (req, res) => {
    const {id} = req.query
    const [result] = await pool.query('SELECT * FROM tblempresas WHERE empre_id = ?', [id])
    return res.status(200).json(result[0])

  }

  const deleteEmpresa = async (req, res) => {
    const {id} = req.query;
    const result = await pool.query('DELETE FROM tblempresas WHERE empre_id ?', [id])
    return res.status(204).json()
  }

  const updateEmpresa = async (req, res) => {
    const {id} = req.query;
    try {
      const result = await pool.query('UPDATE tblempresas SET empre_stat = ? WHERE empre_id ?', ['1', id])
      console.log(result)
      return res.status(204).json()
    } catch (error) {
      console.error(error.message);
    }
  }
