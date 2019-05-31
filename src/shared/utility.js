export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = isValid && value.trim() !== "";
  }

  if (rules.isEmail) {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    isValid = isValid && re.test(value);
  }

  if (rules.minLength) {
    isValid = isValid && value.trim().length >= rules.minLength;
  }

  console.log(isValid);

  return isValid;
};
