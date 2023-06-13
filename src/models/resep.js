const dbPool = require('../config/database-bahan');

const getResepByCategori = (body) => {
    const SQLquery = `SELECT Title, Ingredients, Steps, Loves FROM dataset_resep WHERE category = "${body.category}";`;

    return dbPool.execute(SQLquery);
};

const getResepByLove = (body) => {
    const SQLquery = `SELECT Title, Ingredients, Steps, Loves FROM dataset_resep WHERE Loves >= ${body.Loves}`;

    return dbPool.execute(SQLquery);
};

module.exports = {
    getResepByCategori,
    getResepByLove
};