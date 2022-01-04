
const Joi = require("joi");

const Schema = Joi.object({
    user_id: Joi.number().min(1).required(),
    travel_id: Joi.number(),

    
});

async function SchemaVerify(req, res, next) {
    const { error } = Schema.validate(req.params);
    if (error) {
        return res
            .json({ success: false, massage: error.details });
    }
    return next();
}






module.exports = SchemaVerify 