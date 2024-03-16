import userAuth from "../model/AuthModel.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

export const signupUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    let ciphertext = CryptoJS.AES.encrypt(password, "fardeen").toString();
    const user = await userAuth.create({ name, email, password: ciphertext });
    return response.status(200).json(user);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error.message);
  }
};
export const loginUser = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await userAuth.findOne({ email: email });
    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, "fardeen");
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      if (password === originalText && email === user.email) {
        const token = jwt.sign(
          { email: user.email, name: user.name },
          "fardeen9113",
          { expiresIn: "1d" }
        );
        return response.status(200).json(token);
      } else {
        return response
          .status(400)
          .json({ success: false, error: "Invalid credentials" });
      }
    } else {
      return response
        .status(400)
        .json({ success: false, error: "Invalid user" });
    }
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
