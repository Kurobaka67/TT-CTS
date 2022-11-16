<template>
	<div :class="containerClass" @click="onWrapperClick">
        <MenuBar />
        
        <div :class="theme">
            <div class="button-theme">
                <ButtonTheme @changeTheme="changeTheme" />
            </div>
            <router-view :theme="theme"/>
        </div>
	</div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import ButtonTheme from './components/ButtonTheme.vue';

export default {
    components: {
        'MenuBar': MenuBar,
        'ButtonTheme': ButtonTheme
    },
    data() {
        return {
            theme: 'main-light'
        }
    },
    created() {
        if(localStorage.getItem('theme')){
            this.theme = localStorage.getItem('theme');
        }
    },
    methods: {
        changeTheme() {
            this.theme=='main-dark'?this.theme='main-light':this.theme='main-dark';
            localStorage.setItem('theme', this.theme);
        }
    },
    computed: {
        
    },
    
}
</script>

<style lang="scss">
@import './App.scss';
</style>
