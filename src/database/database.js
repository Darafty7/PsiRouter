import { Sequelize } from "sequelize";
export const sequelize = new Sequelize('aa', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres',
    // port:"5433",
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },

})