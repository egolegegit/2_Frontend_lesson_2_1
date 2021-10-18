export const professionsObject = {
    doctor: { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    waiter: { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    physics: { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    cook: { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
    programmer: { _id: "67rdca3eeb7f6fgeed471839", name: "Программист" }
};
export const professions = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Доктор" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Официант" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" },
    { _id: "67rdca3eeb7f6fgeed471839", name: "Программист" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professionsObject);
        }, 2000);
    });

export default {
    fetchAll
};
