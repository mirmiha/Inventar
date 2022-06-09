import Seq, {
    Sequelize,
    Model,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin,
    BelongsToCreateAssociationMixin,
    Optional,
    HasManyGetAssociationsMixin,
    HasManyCountAssociationsMixin,
    HasManyHasAssociationMixin,
    HasManyHasAssociationsMixin,
    HasManySetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyAddAssociationsMixin,
    HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, HasManyCreateAssociationMixin,
} from "sequelize";
import {CategoryAttributes, CategoryInstance} from "./category.js";
import { SupplierAttributes } from "./supplier.js";
//import {PurchaseAttributes, PurchaseInstance} from "./purchase.js";
//import {SaleAttributes, SaleInstance} from "./sale.js";
//import {TransferAttributes, TransferInstance} from "./transfer.js";

const {DataTypes} = Seq;

export enum Stanje{
    broken =  "Pokvarjen",
    using = "V uporabi",
    storage = "V Skladišču"
};


export interface ProductAttributes {
    id: string;
    name: string;
    serijskaStevilka: string;
    stevilkaInventarja: string;
    datum: string;
    stanje: string;
    model: string;
    description?: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;

    // foreign key
    categoryId?: string;
    supplierId?: string;

    // to access associations when eager loading
    category?: CategoryAttributes | CategoryAttributes["id"][];
    supplier?: SupplierAttributes | SupplierAttributes["id"][];

    //purchases?: PurchaseAttributes[] | PurchaseAttributes["id"][];
    //sales?: SaleAttributes[] | SaleAttributes["id"][];
  //  transfers?: TransferAttributes[] | TransferAttributes["id"][];
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

export interface ProductInstance extends Model<ProductAttributes, ProductCreationAttributes>, ProductAttributes {
    dataValues?: any;

    // model associations
    getCategory: BelongsToGetAssociationMixin<CategoryInstance>;
    setCategory: BelongsToSetAssociationMixin<CategoryInstance, CategoryInstance["id"]>;
    createCategory: BelongsToCreateAssociationMixin<CategoryAttributes>;

   /* getPurchases: HasManyGetAssociationsMixin<PurchaseInstance>;
    countPurchases: HasManyCountAssociationsMixin;
    hasPurchase: HasManyHasAssociationMixin<PurchaseInstance, PurchaseInstance["id"]>;
    hasPurchases: HasManyHasAssociationsMixin<PurchaseInstance, PurchaseInstance["id"]>;
    setPurchases: HasManySetAssociationsMixin<PurchaseInstance, PurchaseInstance["id"]>;
    addPurchase: HasManyAddAssociationMixin<PurchaseInstance, PurchaseInstance["id"]>;
    addPurchases: HasManyAddAssociationsMixin<PurchaseInstance, PurchaseInstance["id"]>;
    removePurchase: HasManyRemoveAssociationMixin<PurchaseInstance, PurchaseInstance["id"]>;
    removePurchases: HasManyRemoveAssociationsMixin<PurchaseInstance, PurchaseInstance["id"]>;
    createPurchase: HasManyCreateAssociationMixin<PurchaseAttributes>;*/

   /* getSales: HasManyGetAssociationsMixin<SaleInstance>;
    countSales: HasManyCountAssociationsMixin;
    hasSale: HasManyHasAssociationMixin<SaleInstance, SaleInstance["id"]>;
    hasSales: HasManyHasAssociationsMixin<SaleInstance, SaleInstance["id"]>;
    setSales: HasManySetAssociationsMixin<SaleInstance, SaleInstance["id"]>;
    addSale: HasManyAddAssociationMixin<SaleInstance, SaleInstance["id"]>;
    addSales: HasManyAddAssociationsMixin<SaleInstance, SaleInstance["id"]>;
    removeSale: HasManyRemoveAssociationMixin<SaleInstance, SaleInstance["id"]>;
    removeSales: HasManyRemoveAssociationsMixin<SaleInstance, SaleInstance["id"]>;
    createSale: HasManyCreateAssociationMixin<SaleAttributes>;*/

   /* getTransfers: HasManyGetAssociationsMixin<TransferInstance>;
    countTransfers: HasManyCountAssociationsMixin;
    hasTransfer: HasManyHasAssociationMixin<TransferInstance, TransferInstance["id"]>;
    hasTransfers: HasManyHasAssociationsMixin<TransferInstance, TransferInstance["id"]>;
    setTransfers: HasManySetAssociationsMixin<TransferInstance, TransferInstance["id"]>;
    addTransfer: HasManyAddAssociationMixin<TransferInstance, TransferInstance["id"]>;
    addTransfers: HasManyAddAssociationsMixin<TransferInstance, TransferInstance["id"]>;
    removeTransfer: HasManyRemoveAssociationMixin<TransferInstance, TransferInstance["id"]>;
    removeTransfers: HasManyRemoveAssociationsMixin<TransferInstance, TransferInstance["id"]>;
    createTransfer: HasManyCreateAssociationMixin<TransferAttributes>;*/
}

export const ProductFactory = (sequelize: Sequelize) => {
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
        stanje:{
            type: DataTypes.STRING,
            allowNull:false,
            defaultValue:"V Skladišču",
        },
        description: {
            type: DataTypes.TEXT,
            unique: false,
            allowNull: true,
        },
    }, {
        tableName: "products",
    })
    sequelize.sync({
        force: true 
    })
    .then(function() {
        Product.create({
            id : '0f6de1b4-f116-40e1-bd91-1b0286042e77',
            name : 'laptopJure',
            serijskaStevilka: '768GHUG67',
            stevilkaInventarja: '768',
            datum: '2022-05-12',
            model: 'testni model',
            stanje: 'V Skladišču',
            descripton: 'jure laptop',
            createdAt: '2022-06-06 12:29:09',
            updatedAt: '2022-06-06 12:29:09',
            categoryId: 'cf87334c-7a30-459a-8bb5-ba6765b26cef',
            supplierId: '311fff50-56ae-4071-a4f2-2b4a3963d85f'

        })
    });



    // @ts-ignore
    Product.associate = (models: any) => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: {
                name: "categoryId",
                allowNull: false
            }
        });

    
        
        Product.belongsTo(models.Supplier, {
            as:"supplier",
            foreignKey:{
                name:"supplierId",
                allowNull: true
            }
        })

        /*
        Product.create(models.Supplier,{
            id:
        })
        */
    

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
    }
    return Product;
}

