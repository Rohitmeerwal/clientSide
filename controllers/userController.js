import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

const userController = {
  async register(req, res, next) {
    try {
      const { name, email, password, cpassword, tc } = req.body;

      if (name && email && password && cpassword && tc) {
        const emailExist = await userModel.findOne({ email: email });

        if (emailExist) {
          return res.status(401).json({ message: "Email already exists" });
        } else {
          if (password !== cpassword) {
            return res
              .status(402)
              .json({ message: "Passwords do not match" });
          } else {
            const hashPassword = await bcrypt.hash(password, 10);
            const user = new userModel({
              name,
              email,
              password: hashPassword,
              tc,
            });

            await user.save();

            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "30d" }
            );

            return res
              .status(200)
              .json({ message: "Registration successful", token });
          }
        }
      } else {
        return res.status(403).json({ message: "All fields are required" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (email && password) {
        const user = await userModel.findOne({ email: email });

        if (user) {
          const isPassMatch = await bcrypt.compare(password, user.password);

          if (isPassMatch) {
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "3d" }
            );

           
            return res
              .status(200)
              .json({ message: "Login successful", token: token });
          } else {
            return res.status(401).json({ message: "Password mismatch" });
          }
        } else {
          return res.status(404).json({ message: "Email not found" });
        }
      } else {
        return res.status(400).json({ message: "Email and password are required" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async changePassword(req, res) {
    try {
      const { password, cpassword } = req.body;
  
      if (password && cpassword) {
        if (password !== cpassword) {
          return res.status(400).json({ message: "Passwords do not match" });
        } else {
          const newHashPassword = await bcrypt.hash(password, 10);
  
          await userModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } });
  
          return res.status(200).json({ message: "Password changed successfully" });
        }
      } else {
        return res.status(400).json({ message: "Please provide both password and confirmation password" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  async loggedUser(req, res){
    res.send({user: req.user});
  },

  async emailSendPasswordReset(req, res){
  
    const{email} = req.body
    if (email) {
      const user = await userModel.findOne({email: email})
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY
        const token = jwt.sign({userID: user._id}, secret,{ expiresIn:'15m'})
        const link = `https://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
        console.log(link);
        return res.status(200).json({ message: "please check the email" });

      } else {
        return res.status(401).json({ message: "the email doesnot exits" });
      }
    } else {
      return res.status(400).json({ message: "please enter the email" });
    }
  },
 
  async passwordRest(req , res){
    const {password, cpassword}=  req.body
    const{id, token}= req.params
    const user =  await userModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
   
    try {
      jwt.verify(token, new_secret)

      if (password && cpassword) {
        if (password !== cpassword) {
          return res.status(400).json({ message: "please enter same password" });
        } else {
          const newHashPassword = await bcrypt.hash(password,10)
          await userModel.findByIdAndUpdate(user._id,{$set:{password:newHashPassword}})
          return res.status(201).json({ message: "your password is reset" });
        }
      } else {
        return res.status(400).json({ message: "please enter the password" });
      }
    } catch (error) {
      return res.status(400).json({ message: "something went wrong" });
    }
  }

};

export default userController;
