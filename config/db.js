import { createPool } from 'mysql2/promise';

const pool = createPool({
    /*
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gentprevdb'*/
    
    host: 'us-east.connect.psdb.cloud',
    user: 'v5vtftktj9c733x1c0m9',
    password: 'pscale_pw_Y2N6LE64l7PkCVgky7Dgpr9R0Iq3pqaaoES7JrQsUyg',
    database: 'gentprevdb',
    ssl:{
        rejectUnauthorized: false
    }
})

export { pool };