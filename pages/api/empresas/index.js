import { pool } from '../../../config/db';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getEmpresas(req, res)
    case 'POST':
      return await saveEmpresas(req, res)
    default:
      break;
  }
}

const getEmpresas = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM tblempresas")
  //console.log(result);
  return res.status(200).json(result)
}

const saveEmpresas = async (req, res) => {
  const { _name, _buss, _type, _itype, _empl, _logo, _stat} = req.body;
  const [result] = await pool.query("INSERT INTO tblempresas SET ?", {
    empre_name: _name,
    empre_buss: _buss,
    empre_type: _type,
    empre_ityp: _itype,
    empre_empl: _empl,
    empre_logo: _logo,
    empre_stat: _stat,
  });
  return res
    .status(200)
    .json({ _name, _buss, _type, _itype, _empl, _logo, _stat, id: result.insertId })
}