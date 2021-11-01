const Joi = require("joi");

const signupSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).alphanum().required(),
    password: Joi.string()
        .min(5)
        .trim()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

async function signupSchemaVerify(req, res, next) {
    req.body.username = req.body.username.trim() 
    req.body.password = req.body.password.trim() 

    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res
            .json({ success: false, massage: error.details });
    }
    return next();
}






module.exports =  signupSchemaVerify 