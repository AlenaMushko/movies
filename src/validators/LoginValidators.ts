import Joi from 'joi';

export const LoginValidators = Joi.object({
    email: Joi.string()
        .email({tlds: {allow: false}})
        .required()
        .messages({
            'string.email': 'Email must be a valid email',
            'string.required': 'Email is required',
        }),
    password: Joi.string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,20}$/)
        .required()
        .messages({
            'string.pattern.base':
                'Password must have at least one uppercase letter, one lowercase letter, one digit, and be between 7 to 20 characters long',
            'string.required': 'Password is required',
        }),
});
