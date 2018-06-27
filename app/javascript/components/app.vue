<template>
    <div class="enter">
            <input type="text" placeholder="Введите логин">
            <input type="password" placeholder="Введите пароль">
            <input v-show="register" type="password" placeholder="Повторите пароль">
            <button v-show="!register">Войти</button>
            <button @click="register = !register">Зарегестрироваться</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            register: false
        }
    }
}
</script>

<style>

</style>

