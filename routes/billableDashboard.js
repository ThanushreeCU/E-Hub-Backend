const express = require('express');
const router = express.Router();
const billableDashboardController = require('../controllers/billabledashboard');


//Getting billableEmployees details count
router.get('/getBillableEmployeesDetailsCount', billableDashboardController.getBillableEmployeesDetailsCount);

router.get('/getBillableExperienceCount',billableDashboardController.getBillableExperienceCount);



router.get('/getBillEmployeesBasedOnClient',billableDashboardController.getBillableToClientsCount);



module.exports = router;