import Seq from "sequelize";
const { DataTypes } = Seq;
export const CategoryFactory = (sequelize) => {
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
    });
    sequelize.sync({
        force: true
    })
        .then(function () {
        Category.create({
            id: 'cf87334c-7a30-459a-8bb5-ba6765b26cef',
            name: 'testtest',
            description: 'tetetetetest',
            createdAt: '2022-05-30 13:10:48',
            updatedAt: '2022-05-30 13:10:48'
        });
    });
    // @ts-ignore
    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: {
                name: "categoryId",
                allowNull: false
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        });
    };
    return Category;
};
