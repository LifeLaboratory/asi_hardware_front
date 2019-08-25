<template>
    <div id="header">
        <header class="header">
            <div class="header-menu header__menu">
                <a href="#" class="header__logo"><img src="../assets/img/logo.png" alt="logo"></a>

                <router-link to="/events" class="header-menu__item">События</router-link>
                <router-link to="/lunch" class="header-menu__item">Ланч</router-link>
            </div>

            <div class="header-user header__user">
                <div class="header-user__name">Сергей Мавроди</div>
                <div class="header-user__avatar">
                    <img src="../assets/img/avatar-mini.png" alt="">
                </div>
                <div class="header-user__submenu hidden">
                    <a href="#">Профиль</a>
                    <a href="#">Выйти</a>
                </div>
            </div>
        </header>
    </div>
</template>