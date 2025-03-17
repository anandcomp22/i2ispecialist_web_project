import User from "../models/userModel.js";
import  { hashPassword,comparePassword } from ' ../helper/authHelper.js';

export const registerUser = async (req, res) => {
  try {
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password:hashedPassword,
      phone,
      address
    }).save();

    res.status(201).send({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.error("Registration error", error);
    res.status(500).json({ message: error.message });
  }
};


export const loginController = async (req,res) => {
  try {
    const { email, password } = req.body;
    if(!email||!!password){
      return res.status(400).json({message: "Plaese enter both email and password"})
    }

    const user = await userModel.findOne({email});
    if(!user){
      return res.status(404).send({
        success: false,
        message: "Invalid password, Please try again!!"
      })
    }

    res.status(200).send({
      success: true,
      message: "User Login",
      
    })


  }
  catch(error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
  
};
