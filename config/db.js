import { createPool } from 'mysql2/promise';

const pool = createPool({

    /*
    //para trabajar con la base de datos en la nube
    host: 'us-east.connect.psdb.cloud',
    user: '5hq1jhi12k04n845pu63',
    password: 'pscale_pw_JKhNfTAAVW6iluVmrrNllhdZTxRBGGtXMc3jXxAGIfP',
    port: 3306,
    database: 'gentprevdb'
    
    //para uso y pruebas en local
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gentprevdb'

    */
    //Nuevos datos de coneccion a la tabla
    host: 'us-east.connect.psdb.cloud',
    user: 'v5vtftktj9c733x1c0m9',
    password: 'pscale_pw_Y2N6LE64l7PkCVgky7Dgpr9R0Iq3pqaaoES7JrQsUyg',
    database: 'gentprevdb',
    ssl:{
        rejectUnauthorized: false
    }
})

export { pool };