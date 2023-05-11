const Categories = require('../../api/v1/categories/model');

const { NotFoundError, BadRequestError } = require('../../errors');

const gettAllCategories = async () => {
    const result = await Categories.find();

    return result;
}

module.exports = { gettAllCategories }