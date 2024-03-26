const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger'); 



const app = express();

const PORT = 3001;
const router = require('./routes/email')
const { corsOptions } = require('./utils/cors-config')



app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})



app.use(requestLogger);
app.use(express.json())
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(router)
app.use(errorLogger);
app.use(errors());

