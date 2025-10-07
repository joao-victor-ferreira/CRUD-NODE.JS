const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    error.name = "ValidationError";
    return next(error);
  }
  next();
};

export default validate;
