<template>
	<div class="app" :class="theme" @click="onWrapperClick">
        <MenuBar @changeTheme="changeTheme"/>
        
        <div :class="theme" class="main">
            <router-view />
        </div>
	</div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';

export default {
    components: {
        'MenuBar': MenuBar,
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

.app {
    display: flex;

    .main {
        flex: 1 1 0;
        padding: 2rem;

        @media (max-width: 768px) {
            padding-left: 6rem;
        }
    }
}
</style>
