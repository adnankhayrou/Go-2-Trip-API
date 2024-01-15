const Joi = require('joi');

function categoryValidation(reqBody){
    const AddCategory = Joi.object({
        name: Joi.string().required(),
    });
    return AddCategory.validate(reqBody);
}

module.exports = {
    categoryValidation,
};