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
    sequelize.sync({
        force: true
    })
        .then(function () {
        Supplier.create({
            id: '311fff50-56ae-4071-a4f2-2b4a3963d85f',
            name: 'juretestet',
            phone: '041567497',
            email: 'jure.trtnik@student.um.si',
            createdAt: '2022-05-30 15:42:22',
            updatedAt: '2022-05-30 15:42:22'
        });
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
