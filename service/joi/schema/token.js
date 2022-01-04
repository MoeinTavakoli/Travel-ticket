const Joi = require("joi");

const signupSchema = Joi.object().keys({
    token: Joi.string().trim().min(10).required(),

}).options({ allowUnknown: true })

async function signupSchemaVerify(req, res, next) {


    const { error } = signupSchema.validate(req.headers);
    if (error) {
        return res
            .json({ success: false, massage: error.details });
    }
    return next();
}






module.exports = signupSchemaVerify 