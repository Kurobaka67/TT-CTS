<template>
    <Card class="main-layout">
        <template #title>
            <h1 class="title">Paramètres</h1>
        </template>
        <template #content>
            <div class="main-dark"></div>
            <div class="main-light"></div>
            <Divider align="left">
                <div class="inline-flex align-items-center">
                    <h5><i class='bx bxs-palette'></i>Panel de couleurs du site</h5>
                </div>
            </Divider>
            <div class="flex flex-row justify-content-between">
                <div class="flex flex-row align-items-center">
                    <h6>Couleur de fond : </h6>
                    <ColorPicker v-model="background" style="padding-left: 10px; padding-bottom: 10px;" @change="setBackground"/>
                </div>
                <div class="flex flex-row align-items-center">
                    <h6>Couleur du texte : </h6>
                    <ColorPicker v-model="text" style="padding-left: 10px; padding-bottom: 10px;" @change="setText"/>
                </div>
                <div class="flex flex-row align-items-center">
                    <h6>Couleur principal : </h6>
                    <ColorPicker v-model="primary" style="padding-left: 10px; padding-bottom: 10px;" @change="setPrimary"/>
                </div>
                <div class="flex flex-row align-items-center">
                    <h6>Couleur secondaire : </h6>
                    <ColorPicker v-model="secondary" style="padding-left: 10px; padding-bottom: 10px;" @change="setSecondary"/>
                </div>
            </div>
            <Divider align="left">
                <div class="inline-flex align-items-center">
                    <h5><i class='bx bxs-palette'></i>Panel de couleurs du menu</h5>
                </div>
            </Divider>
            <div class="flex flex-row justify-content-between">
                <div class="flex flex-row align-items-center">
                    <h6>Couleur de fond : </h6>
                    <ColorPicker v-model="backgroundM" style="padding-left: 10px; padding-bottom: 10px;" @change="setBackground"/>
                </div>
                <div class="flex flex-row align-items-center">
                    <h6>Couleur du texte : </h6>
                    <ColorPicker v-model="textM" style="padding-left: 10px; padding-bottom: 10px;" @change="setText"/>
                </div>
                <div class="flex flex-row align-items-center">
                    <h6>Couleur principal : </h6>
                    <ColorPicker v-model="primaryM" style="padding-left: 10px; padding-bottom: 10px;" @change="setPrimary"/>
                </div>
                <div class="flex flex-row align-items-center">
                    <h6>Couleur secondaire : </h6>
                    <ColorPicker v-model="secondaryM" style="padding-left: 10px; padding-bottom: 10px;" @change="setSecondary"/>
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
            this.background = getComputedStyle(document.querySelector('.'+this.theme)).getPropertyValue('--background-color').substring(1);
            this.text = getComputedStyle(document.querySelector('.'+this.theme)).getPropertyValue('--text-color').substring(1);
            this.primary = getComputedStyle(document.querySelector('.'+this.theme)).getPropertyValue('--primary-color').substring(1);
            this.secondary = getComputedStyle(document.querySelector('.'+this.theme)).getPropertyValue('--secondary-color').substring(1);
        },
        setBackground() {
            document.querySelector('.'+this.theme).style.setProperty('--background-color', '#'+this.background);
        },
        setText() {
            document.querySelector('.'+this.theme).style.setProperty('--text-color', '#'+this.text);
        },
        setPrimary() {
            document.querySelector('.'+this.theme).style.setProperty('--primary-color', '#'+this.primary);
        },
        setSecondary() {
            document.querySelector('.'+this.theme).style.setProperty('--secondary-color', '#'+this.secondary);
        }
    }
}
</script>