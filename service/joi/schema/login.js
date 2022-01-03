const Joi = require("joi");

const loginSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).alphanum().required(),
    password: Joi.string()
        .min(5)
        .trim()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    role: Joi.string()
});

async function loginSchemaVerify(req, res, next) {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res
            .json({ success: false, massage: error.details });
    }
    return next();
}

module.exports = loginSchemaVerify 