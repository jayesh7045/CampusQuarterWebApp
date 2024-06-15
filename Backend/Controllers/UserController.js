// Controllers/UserController.js
import { users } from "../Modelss/Registration.model.js";
import { querymodel } from "../Modelss/query.model.js";
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Fill all the fields",
        success: false,
      });
    }

    const existingUser = await users.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const newUser = new users({
      username,
      email,
      password,
    });

    await newUser.save();

    return res.status(201).json({
      message: "Registration Successful",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error in the registration",
      success: false,
      error: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });

    if (user && user.password === password) {
      return res.status(200).json({
        message: "Login Successful",
        success: true,
        datavalue: user,
      });
    } else {
      return res.status(401).json({
        message: "Invalid username or password",
        success: false,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: err.message,
    });
  }
};

export const sendQueryData = async (req, res) => {
  try {
    const { query, id } = req.body;
    console.log(query);
    console.log(id);
    const datatobeinserted = new querymodel({
      query,
      id,
    });
    
    await datatobeinserted.save();  // Corrected line

    console.log("sent");
    res.status(200).json({
      message: "Success",
      success: true,
    });
  } catch (err) {
    console.error(err);  // Added logging for errors
    res.status(500).json({
      message: "Failed",
      success: false,
      error: err.message,
    });
  }
};
