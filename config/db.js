import { createPool } from 'mysql2/promise';

const pool = createPool({

    /*
    //para trabajar con la base de datos en la nube
    host: 'us-east.connect.psdb.cloud',
    user: '5hq1jhi12k04n845pu63',
    password: 'pscale_pw_JKhNfTAAVW6iluVmrrNllhdZTxRBGGtXMc3jXxAGIfP',
    port: 3306,
    database: 'gentprevdb'
    */

    //para uso y pruebas en local
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gentprevdb'
})

export { pool };