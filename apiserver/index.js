const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API server.
*/
const users = {
  "user1@plantshop.com": {
    firstName: "User1",
    lastName: "User1",
    email: "user1@plantshop.com",
    password: "very-secret",
  },
  "user2@plantshop.com": {
    firstName: "User2",
    lastName: "User2",
    email: "user2@plantshop.com",
    password: "super-secret",
  },
};
let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/products", (req, res) => {
  let products = [
    {
      id: 1,
      description:
        "D'origine colombienne, cette plante a conquis bon nombre d'entre nous pour son magnifique feuillage et sa floraison généreuse en forme de lune.",
      name: "Fleur de Lune",
      imageName: "head-big-eye.png",
      category: "Plantes",
      price: 59,
      discount: 0.5,
    },
    {
      id: 17,
      description: "Le pot ARECA est un superbe objet de décoration de jardin. Lorsque vos plantes seront en période de floraison, votre pot dévoilera toute sa beauté.",
      name: "Pot En Résine ARECA - Haut 40 Cm",
      imageName: "base-spring.png",
      category: "Pots",
      price: 175,
      discount: 0.3,
    },
    {
      id: 6,
      description:
        "Romarin avec des fleurs bleu clair. Ses branches vigoureuses forment un excellent couvre-sol tapissant. Planté au sommet d'un mur, il peut retomber sur 2 à 3 m de hauteur, comme une tapisserie végétale plaquée au mur.",
      name: "Romarin rampant",
      imageName: "arm-articulated-claw.png",
      category: "Arbustes",
      price: 24,
      discount: 0,
    },
    {
      id: 2,
      description:
        "Cette plante grasse a tout plaire : une longue floraison, un bon caractère, des couleurs qui apportent de la gaieté dans la maison.",
      name: "KALANCHOE",
      imageName: "head-friendly.png",
      category: "Plantes",
      price: 15,
      discount: 0,
    },
    {
      id: 3,
      description:
        "Les marantes sont originaires des forêts tropicales d’Amérique. Rhizomateuses, en touffes basses, souvent tapissantes, elles offrent un feuillage ornemental d'exception.",
      name: "MARANTA",
      imageName: "head-shredder.png",
      category: "Plantes",
      price: 35,
      discount: 0,
    },
    {
      id: 16,
      description:
        "Pour donner un style moderne à votre terrasse, balcon ou jardin, pourquoi ne pas choisir les pots YUCCA en résine polyester et fibre de verre ? Jnina vous propose une alternative aux pots de fleurs classiques pour vos plantes d’intérieur, vos plantes à fleurs et vos plantes d’extérieur.",
      name: "Pot En Résine YUCCA - Haut 80 Cm",
      imageName: "base-single-wheel.png",
      category: "Pots",
      price: 285,
      discount: 0.1,
    },
    {
      id: 13,
      description: "Cette outil, doté d'une lame estampée en acier trempé pour éviter les déformations, offre une structure renforcée permettant une meilleure pénétration dans le sol. Compact et maniable, il dispose d'un manche en bois à poignée ergonomique pour un confort optimal durant l'utilisation.",
      name: "Pelle multi-usages",
      imageName: "torso-pouch.png",
      category: "Accessoires",
      price: 75,
      discount: 0,
    },
    {
      id: 7,
      description:
        "Cette plante grimpante offre de très nombreuses petites fleurs blanches en forme d’étoile, délicieusement parfumées.",
      name: "Jasmin Etoilé",
      imageName: "arm-dual-claw.png",
      category: "Arbustes",
      price: 34,
      discount: 0,
    },

    {
      id: 4,
      description: "Le fameux « coussin de belle-mère » ou Echinocactus est le cactus boule ayant le plus de succès depuis des années, tant il attire par sa forme régulière et élégante. ",
      name: "Cactus - Echinocactus grusonii",
      imageName: "head-single-eye.png",
      category: "Plantes",
      price: 320,
      discount: 0,
    },
    {
      id: 9,
      description:
        "Le bien nommé « Oiseau de Paradis » est une plante de belle envergure au port élégant et aux fleurs somptueusement colorées rappelant la forme d'un volatile.",
      name: "Oiseau de paradis",
      imageName: "arm-propeller.png",
      category: "Arms",
      price: 62 ,
      discount: 0.1,
    },
    {
      id: 15,
      description: "En fonction du style que vous souhaitez donner à votre extérieur, nous vous proposons le pot rond en résine haut de gamme, disponible en plusieurs couleurs (brillant ou mate). ",
      name: "Pot en résine Rond",
      imageName: "base-rocket.png",
      category: "Pots",
      price: 140,
      discount: 0.7,
    },
    {
      id: 10,
      description: "Le Cassia corymbosa est un arbuste poussant à l'état naturel en Argentine et en Uruguay. Il fait partie de la famille des Légumineuses et du genre 'Séné' dont il tire son nom vernaculaire.",
      name: "Cassie",
      imageName: "arm-stubby-claw.png",
      category: "Arbustes",
      price: 27,
      discount: 0,
    },
    {
      id: 11,
      description:
        "Substrat de tourbe de sphaigne avec fibre de bois «Forest Gold», une matière première innovante qui favorise considérablement le développement racinaire des plantes. Contient des nutriments pendant environ 4 semaines après la transplantation. Avec agent humidifiant pour une absorption correcte de l'eau.",
      name: "TOURBE PLUS SPECIAL 80L",
      imageName: "torso-flexible-gauged.png",
      category: "Accessoires",
      price: 45,
      discount: 0,
    },
    {
      id: 14,
      description: "En fonction du style que vous souhaitez donner à votre extérieur, nous vous proposons le bac PHOENIX haut de gamme, disponible en plusieurs couleurs (brillant ou mate) et plusieurs tailles.",
      name: "Pot Phoenix 100",
      imageName: "base-double-wheel.png",
      category: "Pots",
      price: 490,
      discount: 0.15,
    },
    {
      id: 5,
      description:
        "Le sansevieria, également appelé langue de belle-mère, est une plante originaire d’Afrique, utilisée en intérieur et très décorative.",
      name: "Sansevieria",
      imageName: "head-surveillance.png",
      category: "Plantes",
      price: 14,
      discount: 0,
    },
    {
      id: 8,
      description: "Parfumé, très florifère et facile à cultiver : plantez donc un buddléia, aussi appelé arbre aux papillons. Il vous enchantera de ses fleurs généreuses tout au long de l'été.",
      name: "Arbre aux papillons",
      imageName: "arm-grabber.png",
      category: "Arbustes",
      price: 42,
      discount: 0,
    },
    {
      id: 12,
      description: "Ces petits galets de rivière sont des silico-calcaire dur de dimensions 10-20mm. Il doit sa forme au courant de rivière par lequel les galets ont été transporté après l’érosion, ils deviennent lisses grâce aux frottements.",
      name: "Galets de rivière - 20kg",
      imageName: "torso-gauged.png",
      category: "Accessoires",
      price: 15,
      discount: 0,
    },
    {
      id: 18,
      description:
        "Ce terreau de grande qualité convient pour la plupart des plantes classiques ou exotiques, en pots, bacs, en intérieur ou extérieur.فلفل بقلوطي",
      name: "Terreau horticole",
      imageName: "base-triple-wheel.png",
      category: "Accessoires",
      price: 9,
      discount: 0,
    },
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));