require('dotenv').config()
const path = require('path');

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cors = require('cors');
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to Database'))

app.use(express.json())

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for the API endpoints',
      },
      servers:[
        {
            url: 'http://localhost:3000/'
        }
      ]
    },
    apis: ['routes/authRoutes.js'],
  };
  
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'images', 'uploads')));

// routes
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const subCategoryRoutes = require('./routes/subCategoryRoutes')
const cityRoutes = require('./routes/cityRoutes')
const productRoutes = require('./routes/productRoutes')
const commentRoutes = require('./routes/commentRoutes')
const statisticsRoutes = require('./routes/statisticsRoute')



app.use('/api/auth/', authRoutes)
app.use('/api/user/', userRoutes)
app.use('/api/category/', categoryRoutes)
app.use('/api/subCategory/', subCategoryRoutes)
app.use('/api/city/', cityRoutes)
app.use('/api/product/', productRoutes)
app.use('/api/comment/', commentRoutes)
app.use('/api/statistics/', statisticsRoutes)

app.listen(3000, ()=> console.log('Server Started'))
