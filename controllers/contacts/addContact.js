const { Contact } = require('../../models');
const { addSchema } = require('../../schemas/contacts');
const { createError } = require('../../helpers');

const addContact = async (req, res, next) => {
    try {
        const { error } = addSchema.validate(req.body);
        if (error) {
            throw createError(404, error.message);
        }
        const { id: owner } = req.user;
        const result = await Contact.create({ ...req.body, owner });
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = addContact;