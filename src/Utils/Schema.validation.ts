import joi from "joi";

export const schemaValidation = joi.object({
    title : joi.string().required(),
    startDate: joi.string().required(),
    endDate: joi.string().required(),
    assignTo: joi.string().required()
});