const router = require('express').Router();

// api prepended to every route
//underscore in front of req shows that this is not being used.
router.get('/', (_req, res) => {
    res.send('Hello');
});

module.exports = router;