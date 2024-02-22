import express from "express";
import { getAllJobs,postJob,getMyJobs,updateJob,deleteJob} from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs); // to get all Posted job
router.post("/post", isAuthenticated, postJob); // to Post job 
router.get('/getmypostsjobs',isAuthenticated,getMyJobs); // Employer can get how many job posted
router.put("/update/:id", isAuthenticated, updateJob); // Employer can update job
router.delete("/delete/:id", isAuthenticated, deleteJob); // Employer can delete job

export default router;