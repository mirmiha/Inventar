import Seq, {
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    HasManyGetAssociationsMixin,
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManyRemoveAssociationMixin,
    HasManyRemoveAssociationsMixin,
    HasManySetAssociationsMixin,
    Model,
    Optional,
    Sequelize,
} from "sequelize";
import {ProductAttributes, ProductInstance} from "./product.js";

const {DataTypes} = Seq;

export interface CategoryAttributes {
    id: string;
    name: string;
    description?: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;

    // to access associations when eager loading
    products?: ProductAttributes[] | ProductAttributes["id"][];
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, "id"> {}

export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes {
    dataValues?: any;

    // model associations
    getProducts: HasManyGetAssociationsMixin<ProductInstance>;
    countProducts: HasManyCountAssociationsMixin;
    hasProduct: HasManyHasAssociationMixin<ProductInstance, ProductInstance["id"]>;
    hasProducts: HasManyHasAssociationsMixin<ProductInstance, ProductInstance["id"]>;
    setProducts: HasManySetAssociationsMixin<ProductInstance, ProductInstance["id"]>;
    addProduct: HasManyAddAssociationMixin<ProductInstance, ProductInstance["id"]>;
    addProducts: HasManyAddAssociationsMixin<ProductInstance, ProductInstance["id"]>;
    removeProduct: HasManyRemoveAssociationMixin<ProductInstance, ProductInstance["id"]>;
    removeProducts: HasManyRemoveAssociationsMixin<ProductInstance, ProductInstance["id"]>;
    createProduct: HasManyCreateAssociationMixin<ProductAttributes>;
}

export const CategoryFactory = (sequelize: Sequelize) => {
    const Category = sequelize.define("Category", {
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
        description: {
            type: DataTypes.TEXT,
            unique: false,
            allowNull: true,
        },
    }, {
        tableName: "categories",
    })
    sequelize.sync({
        force: true 
    })
    .then(function() {
        Category.create({
            id: 'cf87334c-7a30-459a-8bb5-ba6765b26cef99',
            name: 'Laptop',
            description: 'zelo zmogljiv',
            createdAt: '2022-05-30 13:10:48',
            updatedAt: '2022-05-30 13:10:48'

        })

    });

    // @ts-ignore
    Category.associate = (models: any) => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: {
                name: "categoryId",
                allowNull: false
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    }
    return Category;
}
