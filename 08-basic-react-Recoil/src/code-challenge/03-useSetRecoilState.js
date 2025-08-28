import { atom } from "recoil";

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
    default: 2
});