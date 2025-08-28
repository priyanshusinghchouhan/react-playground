import { atom ,selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "networkAtomSelectors",
        get: async() => {
            const res = await axios.get("https://dummyjson.com/c/7e07-a27d-46ef-8a71")
            return res.data;
        }
    })
});


export const totalnotificationSelector = selector({
    key: "totalnotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notifications);

        return allNotifications.network +
        allNotifications.jobs +
        allNotifications.messaging +
        allNotifications.notifications
    }
})