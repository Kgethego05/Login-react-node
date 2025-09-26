const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const  UserRoutes = require('./Routes/UserRoute');

app.use(express.json());

app.use(cors({
    origin : 'http://localhost:5173'
}));


app.use('/api', UserRoutes);

app.listen(PORT, () =>{
  console.log(`Server is running on http://localhost:${PORT}`);
});