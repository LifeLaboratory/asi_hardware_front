import User from "../models/User";
import Lunch from "../models/Lunch";
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

const pendingLunch = new Lunch({
    person: userPerson,
    connectionPerson: null,
    status: LunchStatus.pending,
    dateMatched: null,
    dateFinished: null
})

const connectionPerson = new User({
    id: 2,
    firstName: 'Петя',
    lastName: 'Петин',
    role: 'USER',
    city: 'Novosibirsk',
    phone: '9999999991',
    vk: 'vk_link2',
    email: 'email2@host.com',
    birthDate: '791575100000'
})

const approvedLunch = new Lunch({status: LunchStatus.approved, person:userPerson, connectionPerson})


export default { pendingLunch, approvedLunch}