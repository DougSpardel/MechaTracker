
const express = require('express');
const issuesRoutes = require('./routes/issuesRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

app.use(express.json());
app.use('/api/issues', issuesRoutes);
app.use('/api/vehicles', vehicleRoutes);

// ... (Rest of your Express server setup)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
=======
// api
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;

