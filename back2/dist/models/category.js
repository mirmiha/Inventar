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
