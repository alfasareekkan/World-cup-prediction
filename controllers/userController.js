import User from "../model/User.js";

export const userHome = (req, res) => {
    res.render('home')
}

const handleErrors = (err) => {
    let error = { email: "", phoneNumber: "", };
    if (err.message.includes("User validation failed")) {
        // to take values only form object
        Object.values(err.errors).forEach(({ properties }) => {
          console.log(properties);
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
    console.log(req.body);
    const { firstName, lastName, email, phoneNumber, teamOne, teamTwo, teamOneScore, teamTwoScore } = req.body
    try {
       const user=await User.create({
            firstName, lastName,email,phoneNumber,teamOne,teamTwo,teamOneScore,teamTwoScore
       })
        console.log(user);
        res.status(200).json('success')
    } catch (error) {
        console.log(error);
        const err=handleErrors(error)
        res.status(401).json(err)
    }

}