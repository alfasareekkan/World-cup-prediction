import User from "../model/User.js";

export const userHome = (req, res) => {
    res.render('home')
}

const handleErrors = (err) => {
    let error = { email: "", phoneNumber: "", };
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
          error[properties.path] = properties.message;
        });
      }
    if (err.code === 11000) {
        if (err.keyPattern.phoneNumber === 1) {
            error.phoneNumber ="Phone Number Already Exists"
        }
        if (err.keyPattern.email === 1) {

            error.email = "email already in use";
         }
      return error;
    }
    
    return error;
  };

export const userPrediction =async (req, res) => {
  console.log(req.body);
  try {
       const user=await User.create({
            ...req.body
       })
        res.status(200).json('success')
    } catch (error) {
    const err = handleErrors(error)
    console.log(err);
        res.status(401).json(err)
    }

}