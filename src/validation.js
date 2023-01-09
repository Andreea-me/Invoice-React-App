const validation = (values) => {
  const users = [{ email: "dinu@gmail.com", password: "testpassword" }];
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  }else if (values.email !== users.email) {
    errors.email = "Email is incorrect";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }else if(values.password !== users.password){
    errors.password = "Password is incorrect";
  }

  return errors;
};

export default validation;
