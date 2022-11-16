<template>
    <Button :icon="buttonIcon" class="p-button-rounded" :class="colorButton" @click="themeChange"/>
</template>

<script>
export default {
    emits: ["changeTheme"],
    data() {
        return {
            buttonIcon: 'pi pi-sun',
            colorButton: 'button-light'
        }
    },
    methods: {
        themeChange() {
            this.buttonIcon=='pi pi-moon'?this.buttonIcon='pi pi-sun':this.buttonIcon='pi pi-moon';
            this.colorButton=='button-dark'?this.colorButton='button-light':this.colorButton='button-dark';
            this.$emit('changeTheme');
        }
    }
}
</script>