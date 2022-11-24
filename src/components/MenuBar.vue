<template>
    <aside :class="[isExpanded?'is-expanded':'' || textTheme=='Clair'?'menu-light':'menu-dark']">
        <div class="logo">
            <img src="../../public/images/logocscts.png" alt="logocscts">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <i class="menu-icon pi pi-angle-double-right"></i>
            </button>
        </div>

        <div class="menu">
            <router-link class="button" to="/">
                <i class='menu-icon bx bxs-home'></i>
                <span class="text">Accueil</span>
            </router-link>
            <router-link class="button" to="/list">
                <i class='menu-icon bx bx-trophy'></i>
                <span class="text">Compétitions</span>
            </router-link>
            <router-link class="button" to="/player">
                <i class='menu-icon bx bx-group' ></i>
                <span class="text">Joueurs</span>
            </router-link>
            <router-link class="button" to="/setting">
                <i class='menu-icon bx bxs-cog'></i>
                <span class="text">Paramètres</span>
            </router-link>
            <button class="button dark-light" @click="themeChange">
                <i class='menu-icon' :class="buttonIcon"></i>
                <span class="text">{{textTheme}}</span>
            </button>
        </div>
    </aside>
    
</template>

<script>
import { ref } from 'vue';

export default {
    emits: ["changeTheme"],
    data() {
        return {
            isExpanded: ref(false),
            buttonIcon: 'pi pi-sun',
            textTheme: 'Clair',
        }
    },
    methods: {
        toggleMenu() {
            this.isExpanded = !this.isExpanded;
        },
        themeChange() {
            this.buttonIcon=='pi pi-moon'?this.buttonIcon='pi pi-sun':this.buttonIcon='pi pi-moon';
            this.textTheme=='Sombre'?this.textTheme='Clair':this.textTheme='Sombre';
            this.$emit('changeTheme');
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-dark {
    --background-menu-color:#404258;
    --text-menu-color:#ededed;
    --primary-menu-color:#22313f;
    --secondary-menu-color:#a4fbe3;
}

.menu-light {
    --background-menu-color:#404258;
    --text-menu-color:#ededed;
    --primary-menu-color:#22313f;
    --secondary-menu-color:#a4fbe3;
}

aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    padding: 1rem;
    overflow: hidden;

    background-color: var(--background-menu-color);
    color: var(--text-menu-color);

    transition: 0.2s ease-out;

    .dark-light {
        margin-top: 40vh;
        background-color: transparent;
        border: none;
        width: 100%;
    }

    .logo {
        margin-bottom: 1rem;
        
        img {
            width: 2rem;
            background-color: var(--background-menu-color);
            filter: brightness(300%);
            border-radius: 50%;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
            background-color: transparent;
            border: none;
            
            .menu-icon {
                font-size: 2rem;
                color: var(--text-menu-color);   
                transition: 0.2s ease-out;
            }

            &:hover {
                .menu-icon {
                    color: #a4fbe3;
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    .text {
        opacity: 0;
        transition: 0.3 ease-out;
        padding-left: 1rem;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .menu-icon {
                font-size: 2rem;
                color: var(--text-menu-color);  
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--text-menu-color);  ;
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--primary-menu-color);
                .menu-icon, .text {
                    color: var(--secondary-menu-color);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--secondary-menu-color);
            }
        }
    }

    &.is-expanded {
        width: 200px;

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        .text {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
        height: 100%;
    }
}
</style>