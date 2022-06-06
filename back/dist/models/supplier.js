import Seq from "sequelize";
//import {PurchaseAttributes, PurchaseInstance} from "./purchase.js";
const { DataTypes } = Seq;
export const SupplierFactory = (sequelize) => {
    const Supplier = sequelize.define("Supplier", {
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
        phone: {
            type: DataTypes.STRING(9),
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        },
    }, {
        tableName: "suppliers",
    });
    // @ts-ignore
    Supplier.associate = (models) => {
        Supplier.hasMany(models.Product, {
            as: "products",
            foreignKey: {
                name: "supplierId",
                allowNull: false
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };
    return Supplier;
};
