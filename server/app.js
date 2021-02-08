require('dotenv');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const { sequelize } = require('./models');

const main = async ()=>{
    await sequelize.sync();
}  
main();

const { configs } = require('./configs');

const routes = require('./routes');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

app.use('/api',routes);

app.listen(configs.PORT,(error,res)=>{
    console.log(`server run in port ${configs.PORT}`)
})