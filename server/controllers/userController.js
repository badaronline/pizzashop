import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  {
    try {
      newUser.save();
      res.status(200).json({
        success: true,
        message: "Registered Successfully",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something went Wrong ",
    });
  }
};
