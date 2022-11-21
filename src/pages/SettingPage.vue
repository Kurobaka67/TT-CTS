<template>
    <Card class="main-layout ">
        <template #title>
            <h1 class="title">Paramètres</h1>
        </template>
        <template #content>
            <div class="main-dark"></div>
            <div class="main-light"></div>
            <div class="menu-dark"></div>
            <div class="menu-light"></div>
            <Divider align="left">
                <div class="inline-flex align-items-center">
                    <h5><i class='bx bxs-palette'></i>Panel de couleurs du site</h5>
                </div>
            </Divider>
            <div class="flex flex-row justify-content-between grid">
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur de fond : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="background" style="padding-bottom: 20px;" @change="setBackground"/>
                </div>
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur du texte : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="text" style="padding-bottom: 20px;" @change="setText"/>
                </div>
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur principal : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="primary" style="padding-bottom: 20px;" @change="setPrimary"/>
                </div>
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur secondaire : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="secondary" style="padding-bottom: 20px;" @change="setSecondary"/>
                </div>
            </div>
            <Divider align="left">
                <div class="inline-flex align-items-center">
                    <h5><i class='bx bxs-palette'></i>Panel de couleurs du menu</h5>
                </div>
            </Divider>
            <div class="flex flex-row justify-content-between grid">
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur de fond : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="backgroundM" style="padding-bottom: 20px;" @change="setBackgroundMenu"/>
                </div>
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur du texte : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="textM" style="padding-bottom: 20px;" @change="setTextMenu"/>
                </div>
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur principal : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="primaryM" style="padding-bottom: 20px;" @change="setPrimaryMenu"/>
                </div>
                <div class="flex flex-row align-items-center md:col-3 col-12">
                    <h6 class="col-10">Couleur secondaire : </h6>
                    <ColorPicker class="col-2 pl-0" v-model="secondaryM" style="padding-bottom: 20px;" @change="setSecondaryMenu"/>
                </div>
            </div>
        </template>
    </Card>
</template>

<script>
export default {
    props:['theme'],
    data() {
        return {
            background: null,
            text: null,
            primary: null,
            secondary: null,
            backgroundM: null,
            textM: null,
            primaryM: null,
            secondaryM: null,
        }
    },
    mounted() {
        this.loadColors();
    },
    watch: {
        theme(val, oldVal) {
            if(val != oldVal){
                this.loadColors();
            }
        }
    },
    methods: {
        loadColors() {
            this.background = getComputedStyle(document.querySelector('.main-'+this.theme)).getPropertyValue('--background-color').substring(1);
            this.text = getComputedStyle(document.querySelector('.main-'+this.theme)).getPropertyValue('--text-color').substring(1);
            this.primary = getComputedStyle(document.querySelector('.main-'+this.theme)).getPropertyValue('--primary-color').substring(1);
            this.secondary = getComputedStyle(document.querySelector('.main-'+this.theme)).getPropertyValue('--secondary-color').substring(1);
            this.backgroundM = getComputedStyle(document.querySelector('.menu-'+this.theme)).getPropertyValue('--background-menu-color').substring(1);
            this.textM = getComputedStyle(document.querySelector('.menu-'+this.theme)).getPropertyValue('--text-menu-color').substring(1);
            this.primaryM = getComputedStyle(document.querySelector('.menu-'+this.theme)).getPropertyValue('--primary-menu-color').substring(1);
            this.secondaryM = getComputedStyle(document.querySelector('.menu-'+this.theme)).getPropertyValue('--secondary-menu-color').substring(1);
        },
        setBackground() {
            document.querySelector('.main-'+this.theme).style.setProperty('--background-color', '#'+this.background);
        },
        setText() {
            document.querySelector('.main-'+this.theme).style.setProperty('--text-color', '#'+this.text);
        },
        setPrimary() {
            document.querySelector('.main-'+this.theme).style.setProperty('--primary-color', '#'+this.primary);
        },
        setSecondary() {
            document.querySelector('.main-'+this.theme).style.setProperty('--secondary-color', '#'+this.secondary);
        },
        setBackgroundMenu() {
            document.querySelector('.menu-'+this.theme).style.setProperty('--background-menu-color', '#'+this.backgroundM);
        },
        setTextMenu() {
            document.querySelector('.menu-'+this.theme).style.setProperty('--text-menu-color', '#'+this.textM);
        },
        setPrimaryMenu() {
            document.querySelector('.menu-'+this.theme).style.setProperty('--primary-menu-color', '#'+this.primaryM);
        },
        setSecondaryMenu() {
            document.querySelector('.menu-'+this.theme).style.setProperty('--secondary-menu-color', '#'+this.secondaryM);
        }
    }
}
</script>