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
        name: 'Lunch',
        components: {
            LunchPending,
            LunchStart,
            LunchProfile
        },
        data: () => {
            return {
                lunchStatus: LunchStatus
            }
        },
        mounted: () => {
        },
        computed: {
            lunch() {
                return this.$store.state.lunch
            }
        },
        methods: {
            onClick: async () => {
                const lunch = await Api.createLunch()
                store.commit('setLunch', lunch)
            }
        }
    }
</script>
<template>
    <div class="page">
        <div class="authorize">
            <div class="authorize__title">Авторизация</div>
            <form action="">
                <div class="authorize__input-container authorize__input-container--login">
                    <input type="text" placeholder="Логин"/>
                </div>
                <div class="authorize__input-container authorize__input-container--pass">
                    <input type="password" placeholder="Пароль"/>
                </div>
                <router-link class="button button--green" to="/events">войти</router-link>
            </form>
        </div>
    </div>
</template>