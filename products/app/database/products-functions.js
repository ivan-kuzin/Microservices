const { ProductModel } = require("./models");
const { APIError } = require('../app-errors')

class ProductsFunctions {

    /*    
        title: String,
        description: String,
        category: String,
        price: Number,
        sale_price: Number 
    */

    async CreateProduct({ title, description, category, price, sale_price }){
        try {
            const product = new ProductModel({ title, description, category, price, sale_price });
            const productResult = await product.save();
            return productResult;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Create Product')
        }
    }

    async Products(){
        try {
            return await ProductModel.find();
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Get Products');
        }
    }
   
    async FindById(id){
        try{
            return await ProductModel.findById(id);
        } catch(err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Product')
        }
    }

    async FindByCategory(category){
        try {
            const products = await ProductModel.find({ category: category});
            return products;  
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to Find Category');
        }
    }
}

module.exports = ProductsFunctions;