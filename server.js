// Question 2a: server.js file setup

import express from 'express'; // Importing Express (using ES module syntax)
import mongoose from 'mongoose'; // Importing Mongoose

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Question 3a: MongoDB Connection Setup
mongoose.connect('mongodb+srv://Issia:znd5ZRCjHNIqQUVJ@cluster0.guicr.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Question 2b: Default Route Setup
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio API');
});

// Question 3d: Importing and Using Routes
import contactRoutes from './routes/contactRoutes.js'; // Assuming the path relative to backend
import userRoutes from './routes/userRoutes.js'; // Define userRoutes similarly

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes); // Replace with actual routes for users

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
