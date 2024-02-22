import mongoose from "mongoose";
import validator from "validator";  // used to validate email
import bcrypt from "bcrypt";   // used to hash password
import jwt from "jsonwebtoken";  // used to generate jwt(Means token- pass)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
    minLength: [3, "Name must contain at least 3 Characters!"],
    maxLength: [30, "Name cannot exceed 30 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password!"],
    minLength: [8, "Password must contain at least 8 characters!"],
    maxLength: [32, "Password cannot exceed 32 characters!"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "Please select a role"],
    enum: ["Job Seeker", "Employer"],  // means user has only job seeker or Employee
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// ENCRYPTION THE PASSWORD WHEN THE REGISTER OR MEDIFIES USER HIS PASSWORD
// BEFORE SAVING THE DATA INTO DATABASE FIRST HASHED THE PASSWORD
userSchema.pre("save", async function(next){
   if(!this.isModified("password")){
        next();
   }

   this.password = await bcrypt.hash(this.password,10);
});

// COMPARING THEN USER PASSWORD ENTERED BY USER WITH THE USER SAVED PASSWORD
userSchema.methods.comparePassword = async function (enteredPassword) {
     return await bcrypt.compare(enteredPassword, this.password);
};


//GENERATING A JWT TOKEN WHEN A USER REGISTERS OR LOGINS, IT DEPENDS ON OUR CODE THAT WHEN DO WE NEED TO GENERATE THE JWT TOKEN WHEN THE USER LOGIN OR REGISTER OR FOR BOTH.
userSchema.methods.getJWTToken = function () {
        return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRES,
        });
      };


export const User = mongoose.model("User",userSchema);
