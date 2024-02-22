import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
        title: {
                type: String,
                required: [true, "Please provide Job Title"],
                minLength: [3, "title must contain at least 3 characters..!"],
                maxLength: [30, "title can not exceed 30 characters..!"],
        },
        description: {
                type: String,
                required: [true, "Please provide Job description"],
                minLength: [10, "Description must contain at least 10 characters..!"],
                maxLength: [1000, "Description can not exceed 1000 characters..!"],
        },
        category: {
                type: String,
                required: [true, "Please Provide Job Category"],
        },
                country: {
                type: String,
                required: [true, "Please provide Job Country"],
        },
        city: {
                type: String,
                required: [true, "Please Provide Job City"],
        },
        location: {
                type: String,
                required: [true, "Please Provide Job Location."],
                minLength: [20, "Location must contian at least 20 characters!"],
        },
        fixedSalary: {
                type: Number,
                minLength: [4, "Salary must contain at least 4 digits"],
                maxLength: [9, "Salary cannot exceed 9 digits"],
        },
        salaryFrom: {
                type: Number,
                minLength: [4, "Salary must contain at least 4 digits"],
                maxLength: [9, "Salary cannot exceed 9 digits"],
        },
        salaryTo: {
                type: Number,
                minLength: [4, "Salary must contain at least 4 digits"],
                maxLength: [9, "Salary cannot exceed 9 digits"],
        },
        expired: {
                type: Boolean,
                default: false,
        },
        jobPostedOn: {
                type: Date,
                default: Date.now,
        },
        postedBy: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
        },
});

export const Job = mongoose.model("Job", jobSchema);
