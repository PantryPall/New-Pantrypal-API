const express = require('express');
const routerBahan = require('./routes/bahan');
const routerAwal = require('./routes/awal');
const routerResep = require('./routes/resep');
const logmiddleware = require('./middleware/logs');

const app = express();
const PORT = 4000;

//daerah middleware
app.use(express.json());
app.use(logmiddleware);
//app.use(express.text());


//daerah route
app.get("/", routerAwal);
app.use("/Dashboard/bahan", routerBahan);
app.use("/Dashboard/resep", routerResep);


app.listen(PORT, () =>{
    console.log(`server anda berjalan pada http://localhost:${PORT}`);
})