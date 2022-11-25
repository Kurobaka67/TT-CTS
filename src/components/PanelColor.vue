<template>
    <div class="flex flex-column ">
        <div class="flex flex-column" style="width: 100px;">
            <div :style="{'background-color': panel[0]}" style="height: 15px;"></div>
            <div :style="{'background-color': panel[1]}" style="height: 15px;"></div>
            <div :style="{'background-color': panel[2]}" style="height: 15px;"></div>
            <div :style="{'background-color': panel[3]}" style="height: 15px;"></div>
        </div>
        <Button label="Appliquer" style="padding: 5px; margin-top: 20px" @click="submit"/>
    </div>
</template>

<script>

export default {
    props: ['panel'],
    methods: {
        submit() {
            this.$emit('changeColors', this.panel);
        }
    }
}
</script>