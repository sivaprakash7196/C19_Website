/**
 * @file jobPostingRoutes.js
 * @author Rahul Handoo
 * @version 1.0
 * createdDate: 03/28/2020
 */

//Importing the Job Posting Controller.
const jobApplicationController = require('../controller/jobApplicationController')
const express = require('express')
const router = express.Router()

//Add a new Job application
router.post('/submitapplication/:volunteerID', function (req, res,next) {
  jobApplicationController.addNewJobApplication(req, res,next)
})

//Get a particular job application
router.get('/:applicationID', function (req, res,next) {
  jobApplicationController.getjobApplicationbyID(req, res,next)
})

//Update a job application
router.put('/update/:applicationID', function (req, res,next) {
  jobApplicationController.updateJobApplication(req, res,next)
})

//Delete a job application
router.delete('/delete/:applicationID', function (req, res,next) {
  jobApplicationController.deleteJobApplication(req, res,next)
})

//Get Job Applications based on volunteer id
router.get('/myapplications/:volunteerID', function (req, res,next) {
  jobApplicationController.getmyJobApplications(req, res,next)
})

module.exports = router
