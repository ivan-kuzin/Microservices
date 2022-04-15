const ProductLogicService = require('../products-logic-service');

module.exports = (app) => {
    
    const service = new ProductLogicService();

    app.post('/product/create', async (req, res, next) => {
        try {
            const { title, description, category, price, sale_price } = req.body; 
            const { data } = await service.CreateProduct({ title, description, category, price, sale_price });
            return res.json(data);
        } catch (err) {
            next (err);    
        }
    });

    app.get('/category/:type', async (req, res, next) => {
        const category = req.params.type;
        try {
            const { data } = await service.GetProductsByCategory(category);
            return res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    });

    app.get('/:id', async (req, res, next) => { 
        const productId = req.params.id;
        try {
            const { data } = await service.GetProductDescription(productId);
            return res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    });

     
    app.get('/', async (req, res, next) => {
        try {
            const { data } = await service.GetProducts();        
            return res.status(200).json(data);
        } catch (error) {
            next(err);
        }
    });
}