import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'guestbook',
    waitForConnections: true,
    connectionLimit: 10
});

export default pool;
