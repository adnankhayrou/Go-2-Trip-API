const Joi = require('joi');

function productValidation(reqBody) {
    const AddProduct = Joi.object({
        name: Joi.string().required(),
        images: Joi.array().items(Joi.string().uri()).required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        phone: Joi.string().required(),
        user_id: Joi.string().required(),
        city_id: Joi.string().required(),
        category_id: Joi.string().required(),
        subCategory_id: Joi.string().required(),
    });

    const fileSchema = Joi.object({
        mimetype: Joi.string().valid('image/jpeg', 'image/png').required(),
        size: Joi.number().max(5000000).required()
    });

    AddProduct.images = Joi.array().items(fileSchema);

    return AddProduct.validate(reqBody);
}

module.exports = {
    productValidation,
};
