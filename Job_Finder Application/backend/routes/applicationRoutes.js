import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticated, postApplication);  // post job 
router.get("/employer/getall", isAuthenticated, employerGetAllApplications); // to get employer how mnay appliction are there 
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications); // to get user how many application submitted to job 
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);  // uer can delete our own submitted application 

export default router;