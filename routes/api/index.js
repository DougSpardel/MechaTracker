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