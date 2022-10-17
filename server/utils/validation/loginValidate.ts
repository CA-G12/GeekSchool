import Joi from 'joi';

interface loginValidateInterface {
  email: string,
  loginPassword: string
}

const loginValidate = (body: loginValidateInterface) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    loginPassword: Joi.string().required().alphanum(),
  });

  return schema.validateAsync(body);
};
export default loginValidate;
