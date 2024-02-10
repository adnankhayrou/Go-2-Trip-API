const Joi = require('joi');

function commentValidation(reqBody){
    const AddComment = Joi.object({
        name: Joi.string().required(),
        user_id: Joi.string().required(),
        product_id: Joi.string().required(),
    });
    return AddComment.validate(reqBody);
}

module.exports = {
    commentValidation,
};