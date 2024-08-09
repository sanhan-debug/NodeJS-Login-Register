import { userModel } from "../Schema/userSchema.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);

    if (username && email && password) {
      const user = await userModel.create({
        username,
        email,
        password: hashedPass,
      });
      console.log(user);
      res.redirect("/login");
    } else {
      res.send("problem");
    }
  } catch (err) {
    console.log("err :", err);
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const user = await userModel.findOne({ username });
    const match = await bcrypt.compare(password, user.password);
    console.log(user);
    if(match){
      res.json({
        message: "he abi girdin",
        user,
      });
    }
   
  } else {
    res.send("username ve ya password yanlsihdir...:(");
  }
};
