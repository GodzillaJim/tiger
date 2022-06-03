import Signsay from "../images/signsay.PNG";
import Pigeon from "../images/pigeon.PNG";
import Spurs from "../images/spursoft.PNG";

export const projects = [
  {
    title: "signsay",
    name: "SignSay - Sign Language Recognition App",
    github: "https://github.com/godzillajim/signsay",
    description:
      "This project was completed in partial fulfillment of the BSc. in Informatics." +
      " This application aims to facilitate communication between the deaf and hearing-impaired whose first language is sign language and the rest of the community. " +
      "The hard of hearing have trouble interacting with people in informal settings such as at a coffee shop because few people in the community understand sign language." +
      " In addition, the high number of people who do not understand sign language limits how often the hearing impaired can air their views even when the subject at hand is of " +
      " significant concern. This project develops SignSay, which bridges this communication gap by translating sign language into English text " +
      "in real-time, allowing signers to interact with non-signers. SignSay applies computer vision to capture BSL gestures and machine learning to associate the gestures with their meaning in textual format." +
      " SignSay will increase the hearing impaired involvement in communities and improve their social interaction by bridging the communication gap between signers and no-signers.",
    link: "https://signsay.herokuapp.com",
    stack: ["Python", "PyTorch", "Keras", "Tensorflow"],
    datePublished: Date.now(2021, 5, 28),
    image: Signsay,
    show: false,
  },
  {
    title: "spursoft",
    name: "Spursoft Online Software Store",
    github: "http://github.com/godzillajim/spursoft",
    description:
      "I completed this project to fulfill the requirements of INF 470E Software Engineering course. " +
      "This online store mimics other online retailers but is customized to sell" +
      "Software only on one-time purchase or on license terms. A registered user selects software, " +
      "checks out and links to each product are generated and sent to an email address provided during checkout. " +
      "These links point to a folder containing the software, activation keys or licenses. This process is automated.",
    link: "https://spursoft.herokuapp.com",
    stack: ["MongoDB", "NodeJS", "ExpressJS", "React/Redux"],
    datePublished: new Date(2021, 3, 21),
    image: Spurs,
    show: false,
  },
  {
    title: "pigeon",
    show: false,
    name: "Pigeon",
    github: "https://github.com/godzillajim",
    description:
      "A simple Bible reading application for accessing the King James Version. Read your Bible and pray everyday if you want to grow.",
    link: "https://pigeon-bible.herokuapp.com",
    stack: ["NodeJS", "ExpressJS", "React/Redux"],
    datePublished: new Date(2021, 2, 8),
    image: Pigeon,
  },
];
