const router = require('express').Router();
//apiRoutes is being declared as the export of index.js which is router object
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;