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
            error.phoneNumber ="phone number already exists"
        }
        if (err.keyPattern.email === 1) {

            error.email = "email already in use";
         }
      return error;
    }
    
    return error;
  };

export const userPrediction =async (req, res) => {
    const { firstName, lastName, email, phoneNumber, teamOne, teamTwo, teamOneScore, teamTwoScore } = req.body
    try {
       const user=await User.create({
            firstName, lastName,email,phoneNumber,teamOne,teamTwo,teamOneScore,teamTwoScore
       })
        res.status(200).json('success')
    } catch (error) {
        const err=handleErrors(error)
        res.status(401).json(err)
    }

}