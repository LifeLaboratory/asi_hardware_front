import Lunch from "../models/Lunch";
import User from "../models/User";
import LunchStatus from "../enums/LunchStatus";

const userPerson = new User({
    id: 1,
    firstName: 'Вася',
    lastName: 'Васин',
    role: 'USER',
    city: 'Novosibirsk',
    phone: '9999999999',
    vk: 'vk_link',
    email: 'email@host.com',
    birthDate: '791575200000'
}) 

export default class Api {
    static async createLunch() {
        return new Lunch({
            person: userPerson,
            connectionPerson: null,
            status: LunchStatus.pending,
            dateMatched: null,
            dateFinished: null
        })
    }
    static async getAllSessions() {
        return null
    }
    static async getActiveSession() {
        return null
    }
}