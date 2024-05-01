import express from 'express';
import morgan from 'morgan';
import router from './Api/Routes/index.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';  
// import exphbs from 'express-handlebars'
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', exphbs.engine({ 
//     defaultLayout: 'main',
//     extname: '.hbs',
// }));
// app.set('view engine', '.hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(router);
// app.use(express.static(join(__dirname, 'public'))); 

export default app;
