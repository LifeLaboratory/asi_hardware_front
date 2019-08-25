<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchStatus from "../enums/LunchStatus";

    const fetchEvents = () => {
        Api.getEvents().then((events) => store.commit('setEvents', events)).catch(e => console.error(e))
    }

    export default {
        name: 'Events',
        components: {},
        data: () => {
            return {
                lunchStatus: LunchStatus
            }
        },
        mounted: () => {
            fetchEvents()
        },
        computed: {
            events() {
                return this.$store.state.events
            }
        },
        methods: {
            handleExitEvent: async (eventId) => {
                await Api.exitEvent(eventId)
                fetchEvents()
            },
            handleJoinEvent: async (eventId) => {
                await Api.joinEvent(eventId)
                fetchEvents()
            }
        }
    }
</script>
<template>


    <div class="page">
        <div class="event-list">
            <div class="event-list__title">Список мероприятий</div>
            <div class="event-list__list">
                <div class="event-list-item event-list__item" v-for="event in events">
                    <div class="event-list-item__info-container">
                        <div class="event-list-item__photo">
                            <img v-bind:src="event.photo" alt=""/></div>
                        <div class="event-list-item__info">
                            <a href="#" class="event-list-item__title">{{event.title}}</a>
                            <div class="event-list-item__place">
                                <span class="event-list-item__city">{{event.place}}</span>,
                                <span class="event-list-item__date">{{event.date.toLocaleDateString()}}</span>
                            </div>
                            <div class="event-list-item__org">Организатор: Агентства стратегических инициатив</div>
                        </div>
                    </div>
                    <div class="event-list-item__right-container">
                        <div class="event-list-item__count">Идут человек:  <b>{{event.countPerson}} / {{event.maxPerson}}</b></div>
                        <button class="button button--green" v-on:click="handleJoinEvent(event.id)" v-bind:class="{ 'disabled': event.joined }">присоедениться</button>
                        <button class="button button--red-light" v-on:click="handleExitEvent(event.id)" v-bind:class="{'disabled':  !event.joined}">не пойду</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>