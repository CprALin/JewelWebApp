const express = require('express');
const AuditLogController = require('../constrollers/AuditLogController');

const router = express.Router();

router.post('/auditLog' , AuditLogController.auditLog);

module.exports = router;