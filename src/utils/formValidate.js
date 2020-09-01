import * as Yup from 'yup';

export const clearFields = async ({ formRef }) => {
  Object.entries(formRef.current.getData()).forEach(([key]) => {
    const el = formRef.current.getFieldRef(key);

    if (el?.input?.textMaskInputElement?.state) {
      return el.clear();
    }
    if (el.inputElement) {
      el.textMaskInputElement.state.previousConformedValue = '';
      el.inputElement.value = '';
      return;
    }
    if (el.state) {
      el.state.value = '';
      return;
    }
    if (el.value) {
      el.value = '';
    }
  });
};

export const validation = async ({
  formRef,
  schema,
  clean = true,
  getErrorField = true,
}) => {
  function returnValue(res) {
    return res;
  }
  let result = true;
  try {
    await schema.validate(formRef.current.getData(), {
      abortEarly: false,
    });
    formRef.current.setErrors({});
    if (clean) clearFields({ formRef });

    return result;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errorMessages = {};
      err.inner.forEach(error => {
        errorMessages[error.path] = error.message;
      });
      formRef.current.setErrors(errorMessages);
    }
    if (getErrorField) {
      const firstInputError = Object.keys(formRef.current.getErrors())[0];
      const input = formRef.current.getFieldRef(firstInputError);

      if (input?.input?.inputElement) input.input.inputElement.focus();
      if (input?.inputElement) input.inputElement.focus();
      if (input?.value) input.focus();
    }
    result = false;
    return result;
  } finally {
    returnValue(result);
  }
};

export const fieldValidation = async ({ formRef, schema, field }) => {
  function returnValue(res) {
    return res;
  }
  let result = true;
  try {
    await Yup.reach(schema, field).validate(
      formRef.current.getFieldValue(field)
    );
    formRef.current.setFieldError(field, '');
    return result;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      formRef.current.setFieldError(field, err.message);
    }
    result = false;
    return result;
  } finally {
    returnValue(result);
  }
};
