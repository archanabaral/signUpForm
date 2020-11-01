
const User = require("../models/user");

//Register User
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name)
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ msg: `User with this email ${email} already exists` });
    }
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(200).json({ data: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};

//Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "please provide an email and password" });
    }

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    return res.status(200).json({ msg: "User loggedIn", data: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
};
