class Lunch {

    constructor({person, connectionPersonId, status, dateMatched, dateFinished, email, description}) {
        this.description = description
        this.email = email
        this.person = person
        this.connectionPerson = connectionPersonId
        this.status = status
        this.dateMatched = dateMatched
        this.dateFinished = dateFinished
    }
}

export default Lunch