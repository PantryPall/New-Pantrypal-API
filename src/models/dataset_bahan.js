const dbPool = require('../config/database-bahan');

const getBahanUsingMoney = (body) => {
    const SQLquery = `  SELECT Nama, Harga, image FROM bahan_pokok WHERE Harga <= ${body.Harga}`;

    return dbPool.execute(SQLquery);
};

const getAllBahan = () => {
    const SQLquery = 'SELECT * FROM bahan_pokok';

    return dbPool.execute(SQLquery);
};


module.exports = {
    getBahanUsingMoney,
    getAllBahan,
};