const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    return { error: "Please fill all the fields" };
  }

  const user = new userModel({
    fullname: {
      firstname: firstname,
      lastname: lastname,
    },
    email,
    password,
  });
  return user;
};
