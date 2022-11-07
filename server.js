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

app.locals.sillyDog = [
    {
        id: 1,
        image: "https://st.depositphotos.com/1146092/4811/i/950/depositphotos_48115167-stock-photo-very-funny-dog.jpg",
      },
      {
        id: 2,
        image: "https://www.rdasia.com/wp-content/uploads/sites/2/2021/10/15-dog-beanie-GettyImages-114516871-770.jpg",
      },
      {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Silly_Dog_%282277051513%29.jpg",
      },
      {
        id: 4,
        image: "https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg",
      },
      {
        id: 5,
        image: "https://st.depositphotos.com/1000423/2642/i/600/depositphotos_26421547-stock-photo-funny-dog-portrait.jpg",
      },
      {
        id: 6,
        image: "https://americaware.com/wp-content/uploads/2018/11/Funny_Dog.jpg",
      },
      {
        id: 7,
        image: "https://cdn.designbump.com/wp-content/uploads/2014/07/funny-dog-pictures-3.jpg",
      },
      {
        id: 8,
        image: "https://www.erblicken.com/wp-content/uploads/2017/10/Funny_Rosa_2.jpg",
      },
      {
        id: 9,
        image: "https://www.erblicken.com/wp-content/uploads/2017/10/Funny_Grobi-1.jpg",
      },
      {
        id: 10,
        image: "http://www.mypetsname.com/wp-content/uploads/2019/07/Funny-Dog-Names-Feature.jpg",
      },
    ]

app.locals.tiredDog = [
    {
        id: 1,
        image: "https://i.pinimg.com/736x/d5/89/64/d58964d9f260412f691098c9d33c0c97.jpg",
      },
      {
        id: 2,
        image: "https://www.rd.com/wp-content/uploads/2019/09/shutterstock_626363315-scaled.jpg",
      },
      {
        id: 3,
        image: "https://lifeanddogs.com/wp-content/uploads/2019/12/iStock-868098474.jpg",
      },
      {
        id: 4,
        image: "https://tractive.com/blog/wp-content/uploads/2021/12/header_image_cat_dog_not_moving-1.jpg",
      },
      {
        id: 5,
        image: "https://happydoginstitute.com/wp-content/uploads/2018/01/a-tired-dog-is-a-good-dog.jpg",
      },
      {
        id: 6,
        image: "http://2.bp.blogspot.com/-mPvjOS5XeVo/UAhoiGzLZoI/AAAAAAAAbMU/eJpQaT8EHzk/s1600/exhausted%2Bfrenchie.jpg",
      },
      {
        id: 7,
        image: "https://www.petcompanionmag.com/wp-content/uploads/2018/01/f00dfbadbd90fac651696d827e76c70a78661545.jpg",
      },
      {
        id: 8,
        image: "https://i.pinimg.com/originals/ee/2c/c0/ee2cc0ae0ef22f31487b7b619cbcf17c.jpg",
      },
      {
        id: 9,
        image: "https://i.pinimg.com/736x/72/46/8a/72468afd0542afcef9aee7031ca44713.jpg",
      },
      {
        id: 10,
        image: "https://i.pinimg.com/originals/79/d0/9b/79d09be444056339432dd9e9dd57c562.jpg",
      },
    ]    

app.get('/api/v1/happy_dog', (request, response) => {
    const happy = app.locals.happyDog;

    response.json({ happy })
});

app.get('/api/v1/silly_dog', (request, response) => {
    const silly = app.locals.sillyDog;

    response.json({ silly })
});

app.get('/api/v1/tired_dog', (request, response) => {
    const tired = app.locals.tiredDog;

    response.json({ tired })
});

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});