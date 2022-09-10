const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'Shop',
    username: 'postgres',
    password: 'Admin12345',
    dialect: 'postgres',
    port: '5432'
});
//sequelize.authenticate();
const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
// sequelize.sync().then()
//     .catch(err => console.log(err));

const Products= sequelize.define("products", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.STRING,
        allowNull: true
    },
    img:{
        type: Sequelize.STRING,
        allowNull:true
    }
});
const Categories= sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
const Product_Categories= sequelize.define("product_categories", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});
sequelize.sync().then()
    .catch(err => console.log(err));
module.exports = {
    sequelize, User, Products,Categories,Product_Categories
};