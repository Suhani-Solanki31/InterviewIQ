import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const GoogleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, {
      http: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "User authorized successfully",
      User:user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `error in Authentication: ${error}`,
    });
  }
};

export const logOut = async (req, res) => {
  try {
    await res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "User logout successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Logout error : ${error}`,
    });
  }
};
