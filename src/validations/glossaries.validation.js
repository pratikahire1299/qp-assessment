const Joi = require('joi');

module.exports = (() => {
    return {
        add_glossary: {
            headers: Joi.object({ authorization: Joi.string().required() }).options({ allowUnknown: true }),
            payload: Joi.object({
                name: Joi.string().required(),
                price: Joi.number().positive().required(),
                description: Joi.string().optional(),
                inventory: Joi.number().integer().min(0).required()
            }),
            failAction: (request, h, err) => {
                return err;
            },
        },
        update_glossary: {
            headers: Joi.object({ authorization: Joi.string().required() }).options({ allowUnknown: true }),
            params: Joi.object({
                id: Joi.string().required()
            }),
            payload: Joi.object({
                name: Joi.string().optional(),
                price: Joi.number().positive().optional(),
                description: Joi.string().optional(),
                inventory: Joi.number().integer().min(0).optional()
            }),
            failAction: (request, h, err) => {
                return err;
            },
        },
        get_glossaries: {
            headers: Joi.object({ authorization: Joi.string().required() }).options({ allowUnknown: true }),
            query: Joi.object({
                search: Joi.string().trim(),
                page: Joi.number().default(null),
                limit: Joi.number().default(null),
            }),
            failAction: (request, h, err) => {
                return err;
            },
        },
        get_glossary: {
            headers: Joi.object({ authorization: Joi.string().required() }).options({ allowUnknown: true }),
            params: Joi.object({
                id: Joi.string().required()
            }),
            failAction: (request, h, err) => {
                return err;
            },
        },
        delete_glossary: {
            headers: Joi.object({ authorization: Joi.string().required() }).options({ allowUnknown: true }),
            params: Joi.object({
                id: Joi.string().required()
            }),
            failAction: (request, h, err) => {
                return err;
            },
        },
    };
})();