class Event {

    constructor({id, event_id, title, place, photo, description, date, creator, maxPerson, max_person, joined, count_person, countPerson}) {
        this.id = id || event_id
        this.title = title //string
        this.place = place // string
        this.photo = photo //url
        this.description = description //string
        this.date = new Date(date) // string
        this.creator = creator // number, creatorId
        this.countPerson = countPerson || count_person// int
        this.maxPerson = maxPerson || max_person// int
        this.joined = joined // boolean
    }
}

export default Event