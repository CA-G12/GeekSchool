import Joi from 'joi';

const addNewFeedbackValidation = (
  obj: { id: string | number, classId: string, feedback: string },
) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    classId: Joi.number().required(),
    feedback: Joi.string().required(),
  });

  return schema.validateAsync(obj);
};

export default addNewFeedbackValidation;
