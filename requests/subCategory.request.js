const Joi = require('joi');

function subCategoryValidation(reqBody){
    const AddSubCategory = Joi.object({
        name: Joi.string().required(),
        category_id: Joi.string().required(),
    });
    return AddSubCategory.validate(reqBody);
}

module.exports = {
    subCategoryValidation,
};