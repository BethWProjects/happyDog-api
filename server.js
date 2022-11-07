const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.locals.title = "HappyDog";

app.locals.happyDog = []

app.get('/api/v1/happy_dog', (request, response) => {
    const happy = app.locals.happyDog;

    response.json({ happy })
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});