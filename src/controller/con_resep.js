const resepModel = require('../models/resep');

const getResepByCategori = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await resepModel.getResepByCategori(body);
        res.json({
            message: "result",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
};

const getResepByLove = async (req, res) => {
    const {body} = req;
    try {
        const [data] = await resepModel.getResepByLove(body);
        res.json({
            message: "result",
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
    getResepByCategori,
    getResepByLove,
}