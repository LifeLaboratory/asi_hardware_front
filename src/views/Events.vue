<script>
    import Api from '../utils/Api';
    import store from '../store'
    import LunchProfile from '../components/lunch/ActiveLunch'
    import LunchPending from "../components/lunch/LunchPending";
    import LunchStart from "../components/lunch/StartSearch"
    import LunchStatus from "../enums/LunchStatus";
    import Lunch from "../models/Lunch";
    import Mocks from "../utils/Mocks";

    export default {
        name: 'Events',
        components: {},
        data: () => {
            return {
                lunchStatus: LunchStatus
            }
        },
        mounted: () => {
            Api.getEvents().then((events) => store.commit('setEvents', events)).catch(e => console.error(e))
        },
        computed: {
            events() {
                return this.$store.state.events
            }
        },
        methods: {
            onClick: async () => {
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
                    <button class="button button--green">присоедениться</button>
                </div>

            </div>
        </div>

    </div>
</template>