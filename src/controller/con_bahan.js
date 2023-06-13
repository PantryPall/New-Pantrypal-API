const bahanModel = require('../models/dataset_bahan');



const getBahanUsingMoney = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await bahanModel.getBahanUsingMoney(body);
        res.json({
            message: "result",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            serverMessage: error,
        })
    }
};

const getAllBahan = async (req, res) => {
    try {
        const [data] = await bahanModel.getAllBahan();
        res.json({
            message: "Get All Bahan berhasil terhubung",
            data: data,
        });   
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
};

module.exports = {
    getBahanUsingMoney,
    getAllBahan,
};