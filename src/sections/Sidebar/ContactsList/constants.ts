import { INIT_CHAT_ID, sunflowerLink } from "../../../utils/constantsGlobal";
import dolzhanskyPhoto from "./assets/dolzhanskyPhoto.jpg";
import elonPhoto from "./assets/elonPhoto.jfif";
import frodoPhoto from "./assets/frodo.jfif";
import gatesPhoto from "./assets/gates.jfif";
import keanuPhoto from "./assets/keanu.jpg";
import pashaPhoto from "./assets/pashaPhoto.jpg";
import sashaPhoto from "./assets/sasha.jfif";
import shrekPhoto from "./assets/shrek.jfif";
import trumpPhoto from "./assets/trump.jfif";
import yodaPhoto from "./assets/yoda.jfif";

export const contactsMock = [
  {
    id: 0,
    name: "Саша Белый",
    photo: sashaPhoto,
    lastMessage: "Ну как там с деньгами",
    time: "06:08",
  },
  {
    id: 1,
    name: "D. Trump",
    photo: trumpPhoto,
    lastMessage: "Ты все лампочки в подъезде разбил?",
    time: "15:54",
  },
  {
    id: 2,
    name: "bill gates",
    photo: gatesPhoto,
    lastMessage: "Когда обновишь уже винду???!!!!",
    time: "12:00",
  },
  {
    id: 3,
    name: "фродо",
    photo: frodoPhoto,
    lastMessage:
      "Гендальф, а почему мы не полетели туда на орлах, не напомнишь?",
    time: "11:32",
  },
  {
    id: INIT_CHAT_ID,
    name: "Рабочий чат компании ООО Подсолнух",
    photo: sunflowerLink,
    lastMessage: "Босс: еще одно опоздание, и вам хана",
    time: "11:32",
  },
  {
    id: 9,
    name: "Николай",
    photo: dolzhanskyPhoto,
    lastMessage: "Погнали с тобой в клубешник, зажигаем как в старые добрые!",
    time: "08:22",
  },
  {
    id: 10,
    name: "Паша",
    photo: pashaPhoto,
    lastMessage:
      "Каждая молекула наша создана из маленьких... маленьких... а можно чайку",
    time: "00:12",
  },

  {
    id: 5,
    name: "Elon Musk",
    photo: elonPhoto,
    lastMessage: "Всё, решил: колонизируем Марс!",
    time: "09:45",
  },
  {
    id: 6,
    name: "Keanu Reeves",
    photo: keanuPhoto,
    lastMessage: "Ты breathtaking!",
    time: "18:20",
  },
  {
    id: 7,
    name: "Shrek",
    photo: shrekPhoto,
    lastMessage: "Кто-то сказал про болото?",
    time: "23:59",
  },
  {
    id: 8,
    name: "Master Yoda",
    photo: yodaPhoto,
    lastMessage: "Да прибудет с тобой сила, юный падаван.",
    time: "04:13",
  },
];
