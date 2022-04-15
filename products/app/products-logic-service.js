const { ProductsFunctions } = require("./database");
const { FormateData } = require("./secondary-functions");
const { APIError } = require('./app-errors');

class ProductLogicService {

    constructor(){
        this.repository = new ProductsFunctions();
    }

    async CreateProduct(productInputs){
        try{
            const productResult = await this.repository.CreateProduct(productInputs);
            return FormateData(productResult);
        } catch (err){
            throw new APIError('Data Not found');
        }
    }
    
    async GetProducts(){
        try {
            const products = await this.repository.Products();
            //console.log(products);
            let categories = {};
            products.map(({ category }) => {
                categories[category] = category;
            });
            return FormateData({
                products,
                categories:  Object.keys(categories),
            });
        } catch (err) {
            throw new APIError('Data Not found');
        }
    }

    async GetProductDescription(productId){
        try {
            const product = await this.repository.FindById(productId);
            return FormateData(product);
        } catch (err) {
            throw new APIError('Data Not found');
        }
    }

    async GetProductsByCategory(category){
        try {
            const products = await this.repository.FindByCategory(category);
            return FormateData(products);
        } catch (err) {
            throw new APIError('Data Not found');
        }
    }

    async GetProductById(productId){
        try {
            return await this.repository.FindById(productId);
        } catch (err) {
            throw new APIError('Data Not found');
        }
    }

}

module.exports = ProductLogicService;