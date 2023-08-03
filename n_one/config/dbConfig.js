module.exports = {
    HOST: 'http://localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'test1',
    dialect: 'mysql',
    port :3306,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}