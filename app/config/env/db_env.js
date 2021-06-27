const development = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_express',
        charset: 'utf8'
    },
    pool: {
        min: 2,
        max: 10
    }
};

export default development;