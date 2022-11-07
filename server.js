const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.locals.title = "Dog Meme Generator";

app.locals.happyDog = [
    {
        id: 1,
        image: "https://st2.depositphotos.com/2313517/7759/i/450/depositphotos_77599638-stock-photo-german-shepherd-dog-sticking-head.jpg",
      },
      {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Happy_Dog_%2814591980751%29.jpg",
      },
      {
        id: 3,
        image: "https://i.pinimg.com/originals/7f/64/3f/7f643f0db514d7971349c416e29e42a8.jpg",
      },
      {
        id: 4,
        image: "https://img.freepik.com/premium-photo/smiling-cute-puppy-dachshund-funny-happy-dog-face_609048-1068.jpg",
      },
      {
        id: 5,
        image: "https://i.pinimg.com/originals/51/67/b6/5167b6f7d4edd024a02793a81a9071be.jpg",
      },
      {
        id: 6,
        image: "https://static8.depositphotos.com/1426049/999/i/600/depositphotos_9991714-stock-photo-swiss-shepherd-dog-smiles.jpg",
      },
      {
        id: 7,
        image: "https://www.rd.com/wp-content/uploads/2019/10/shutterstock_706603864-scaled.jpg",
      },
      {
        id: 8,
        image: "https://www.publicdomainpictures.net/pictures/40000/nahled/happy-dog.jpg",
      },
      {
        id: 9,
        image: "https://wallpaperaccess.com/full/2564868.jpg",
      },
      {
        id: 10,
        image: "https://basicdogmom.com/wp-content/uploads/2021/08/Happy-Dog-Pictures-Photos-Images-Pics-Smiling-Schnauzer-Dog-333x500.jpg",
      },
]

app.locals.sadDog = [
    {
        id: 1,
        image: "",
      },
      {
        id: 2,
        image: "",
      },
      {
        id: 3,
        image: "",
      },
      {
        id: 4,
        image: "",
      },
      {
        id: 5,
        image: "",
      },
      {
        id: 6,
        image: "",
      },
      {
        id: 7,
        image: "",
      },
      {
        id: 8,
        image: "",
      },
      {
        id: 9,
        image: "",
      },
      {
        id: 10,
        image: "",
      },
    ]

app.locals.tiredDog = [
    {
        id: 1,
        image: "",
      },
      {
        id: 2,
        image: "",
      },
      {
        id: 3,
        image: "",
      },
      {
        id: 4,
        image: "",
      },
      {
        id: 5,
        image: "",
      },
      {
        id: 6,
        image: "",
      },
      {
        id: 7,
        image: "",
      },
      {
        id: 8,
        image: "",
      },
      {
        id: 9,
        image: "",
      },
      {
        id: 10,
        image: "",
      },
    ]    

app.get('/api/v1/happy_dog', (request, response) => {
    const happy = app.locals.happyDog;

    response.json({ happy })
});

app.get('/api/v1/sad_dog', (request, response) => {
    const sad = app.locals.sadDog;

    response.json({ sad })
});

app.get('/api/v1/tired_dog', (request, response) => {
    const tired = app.locals.tiredDog;

    response.json({ tired })
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});