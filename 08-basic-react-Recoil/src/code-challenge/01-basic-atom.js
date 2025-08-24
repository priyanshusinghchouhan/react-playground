import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});

export const messageAtom = atom({
    key: "messageAtom",
    default: 10
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 10
});


export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const messageAtomCount = get(messageAtom);
        const jobsAtomCount = get(jobsAtom);

        return networkAtomCount + messageAtomCount + jobsAtomCount;
    }
})