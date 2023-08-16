import express from 'express'
import { sequelize } from './database/seeders';
import { adminJs, adminJsRouter } from './adminjs/index';

const app = express();

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfuly at port  ${PORT}`)
})