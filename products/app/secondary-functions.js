const jwt  = require('jsonwebtoken');
const { APP_SECRET } = require('./config');

//Secondary functions
module.exports.ValidateSignature  =  async(req) => {
        const signature = req.get('Authorization');
        console.log(signature);
        if(signature){
            const payload = await jwt.verify(signature.split(' ')[1], APP_SECRET);
            req.user = payload;
            return true;
        }
        return false;
};

module.exports.FormateData = (data) => {
        if (data){
            return { data };
        } else {
            throw new Error('Data Not found!');
        }
};

