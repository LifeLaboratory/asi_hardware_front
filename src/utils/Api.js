import Lunch from "../models/Lunch";
import Errors from "../enums/Errors";
import User from "../models/User";
import Event from "../models/Event";


export default class Api {


    static async createLunch() {
        const response = await fetch('http://172.16.27.7:8080/lunch', {
            method: "POST",
            headers: {
                "user_id": 1,
                "Content-Type": "application/json"
            }
        })

        switch (response.status) {
            case 200:
                const json = await response.json()
                return new Lunch(json)
            case 500:
                throw new Error(Errors.API_INTERNAL_SERVER_ERROR)
            default:
                throw new Error(Errors.API_UNKNOWN_STATUS_CODE)
        }
    }

    static async getAllSessions() {
        const response = await fetch('http://172.16.27.7:8080/lunch/all', {
            headers: {user_id: 1}
        })
 
        switch (response.status) {
            case 200:
                const lunches = await response.json()
                return lunches.map((lunch) => (new Lunch(lunch)))
            case 500:
                throw new Error(Errors.API_INTERNAL_SERVER_ERROR)
            default:
                throw new Error(Errors.API_UNKNOWN_STATUS_CODE)
        }
    }

    static async setLunchStatus(status) {
        await fetch('http://172.16.27.7:8080/lunch', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                user_id: 1
            },
            body: JSON.stringify({'status': status})
        })

    }

    static async getActiveLunch() {
        const response = await fetch('http://172.16.27.7:8080/lunch', {
            headers: {user_id: 1}
        })

        switch (response.status) {
            case 200:
                const lunch = await response.json()
                return new Lunch(lunch)
            case 404:
                return null
            case 500:
                throw new Error(Errors.API_INTERNAL_SERVER_ERROR)
            default:
                throw new Error(Errors.API_UNKNOWN_STATUS_CODE)
        }
    }

    static async getProfile(userId) {
        const response = await fetch(`http://172.16.27.7:8080/user/${userId}`)

        switch (response.status) {
            case 200:
                const user = await response.json()
                return new User(user)
            case 404:
                return null
            case 500:
                throw new Error(Errors.API_INTERNAL_SERVER_ERROR)
            default:
                throw new Error(Errors.API_UNKNOWN_STATUS_CODE)
        }
    }

    static async getEvents() {
        const response = await fetch(`http://172.16.27.7:8080/event/all`, {
            headers: {user_id: 1}
        })

        switch (response.status) {
            case 200:
                const events = await response.json()
                return events.map(event => (new Event(event)))
            case 500:
                throw new Error(Errors.API_INTERNAL_SERVER_ERROR)
            default:
                throw new Error(Errors.API_UNKNOWN_STATUS_CODE)
        }
    }
}