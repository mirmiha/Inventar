import Seq from "sequelize";
//import {PurchaseAttributes, PurchaseInstance} from "./purchase.js";
//import {SaleAttributes, SaleInstance} from "./sale.js";
//import {TransferAttributes, TransferInstance} from "./transfer.js";
const { DataTypes } = Seq;
export var Stanje;
(function (Stanje) {
    Stanje["broken"] = "Pokvarjen";
    Stanje["using"] = "V uporabi";
    Stanje["storage"] = "V Skladi\u0161\u010Du";
})(Stanje || (Stanje = {}));
;
export const ProductFactory = (sequelize) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        serijskaStevilka: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0.00,
        },
        stevilkaInventarja: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0.00,
        },
        datum: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0,
        },
        stanje: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "V Skladišču",
        },
        description: {
            type: DataTypes.TEXT,
            unique: false,
            allowNull: true,
        },
    }, {
        tableName: "products",
    });
    // @ts-ignore
    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: {
                name: "categoryId",
                allowNull: false
            }
        });
        Product.belongsTo(models.Supplier, {
            as: "supplier",
            foreignKey: {
                name: "supplierId",
                allowNull: true
            }
        });
        /* Product.hasMany(models.Purchase, {
             as: "purchases",
             foreignKey: {
                 name: "productId",
                 allowNull: false
             },
             onDelete: "CASCADE",
             onUpdate: "CASCADE"
         });*/
        /* Product.hasMany(models.Sale, {
             as: "sales",
             foreignKey: {
                 name: "productId",
                 allowNull: false
             },
             onDelete: "CASCADE",
             onUpdate: "CASCADE"
         });*/
        /* Product.hasMany(models.Transfer, {
             as: "transfers",
             foreignKey: {
                 name: "productId",
                 allowNull: false
             },
             onDelete: "CASCADE",
             onUpdate: "CASCADE"
         });*/
    };
    return Product;
};
