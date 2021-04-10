<template>
    <header class="header w-full full-height">
        <section class="header.backdrop">
            <section class="container mx-auto relative">
                <section class="w-full absolute top-0 left-0">
                    Menu Here!
                </section>
                <section class="flex flex-wrap items-center full-height">
                    <div class="w-full">
                        <h2
                            class="header.title xl:text-5xl font-light text-custom-1"
                        >
                            Olá, este é o meu site pessoal!
                        </h2>
                        <p
                            class="header.subtitle xl:text-xl font-light text-custom-1 my-4"
                        >
                            Desenvolvedor de Guarulhos, São Paulo
                        </p>
                    </div>
                </section>
            </section>
        </section>
    </header>
</template>
<script>
import anime from 'animejs'
export default {
    name: 'HomeBanner',
    mounted() {
        this.initAnimationOnLetter()
    },
    methods: {
        initAnimationOnLetter() {
            const title = document.querySelector('.header\\.title')
            title.innerHTML = title.textContent.replace(
                /\S/g,
                '<span class="letter inline-block">$&</span>'
            )

            anime.timeline({ loop: false }).add({
                targets: '.header\\.title .letter',
                scale: [0, 1],
                duration: 1500,
                elasticity: 600,
                delay: (el, i) => 45 * (i + 1),
            })
        },
    },
}
</script>
<style scoped>
.header {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.header\.title {
    letter-spacing: 2px;
}

.header\.backdrop {
    background-color: rgba(198, 108, 73, 0.4);
}

@media only screen and (min-width: 1536px) {
    .header {
        background-image: url('~/assets/images/vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }
}

@media only screen and (min-width: 1536px) {
    .header {
        background-image: url('~/assets/images/vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }
}
</style>
