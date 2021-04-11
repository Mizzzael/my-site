<template>
    <header class="header w-full full-height">
        <section class="header.backdrop">
            <section class="container mx-auto relative">
                <section class="w-full absolute top-0 left-0">
                    <HomeMenuBanner />
                </section>
                <section class="flex flex-wrap items-center full-height">
                    <div class="md:w-full w-11/12 mx-auto">
                        <h2
                            class="header.title lg:text-5xl md:text-4xl text-sm font-light text-custom-1"
                        >
                            Olá, este é o meu site pessoal!
                        </h2>
                        <p
                            class="header.subtitle lg:text-xl md:text-lg text-xs font-light text-custom-1 my-2"
                        >
                            Desenvolvido de forma singular!
                        </p>
                    </div>
                    <button
                        class="home.chevron absolute left-0 right-0 bottom-12 mx-auto text-center focus:outline-none"
                    >
                        <svg
                            class="inline-block"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke-width="0.3"
                            stroke="#F5D6AB"
                        >
                            <path
                                d="M10.59 0.294983L6 4.87498L1.41 0.294983L0 1.70498L6 7.70498L12 1.70498L10.59 0.294983Z"
                                fill="transparent"
                                fill-opacity="1"
                            />
                        </svg>
                    </button>
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
            const subtitle = document.querySelector('.header\\.subtitle')
            title.innerHTML = title.textContent.replace(
                /\S/g,
                '<span class="letter inline-block">$&</span>'
            )

            subtitle.innerHTML = subtitle.textContent.replace(
                /\S/g,
                '<span class="letter inline-block">$&</span>'
            )

            anime
                .timeline({ loop: false })
                .add({
                    targets: '.header\\.title .letter',
                    opacity: [0, 1],
                    translateX: ['1.1em', 0],
                    duration: 1500,
                    color: ['#ffffff', '#F5D6AB', '#FFFAF2'],
                    elasticity: 600,
                    delay: (el, i) => 45 * (i + 1),
                })
                .add({
                    targets: '.header\\.subtitle .letter',
                    translateY: ['1.1em', 0],
                    scale: [2, 1],
                    translateZ: 0,
                    color: ['#ffffff', '#F5D6AB', '#FFFAF2'],
                    opacity: [0, 1],
                    duration: 750,
                    elasticity: 400,
                    delay: (el, i) => 80 * i,
                })

            anime
                .timeline({ loop: false })
                .add({
                    targets: '.home\\.chevron svg path',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    duration: 1400,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                })
                .add({
                    targets: '.home\\.chevron svg path',
                    fill: ['#ffffffff', '#F5D6AB'],
                    strokeDashoffset: [0, anime.setDashoffset],
                    duration: 800,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                })
                .add({
                    targets: '.home\\.chevron svg',
                    scale: [1, 1.4, 1],
                    duration: 600,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                })
        },
    },
}
</script>
<style scoped>
/*
    - 5k - 5120pz
    - 4k - 3840
    - Full HD - 1920
    - HD - 720
 */
.header {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
}

.header\.title,
.header\.subtitle {
    letter-spacing: 2px;
}

.header\.backdrop {
    background-color: rgba(198, 108, 73, 0.4);
}

.home\.chevron {
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 220ms transform;
}

.home\.chevron:hover {
    transform: translateY(-5px);
}

@media only screen and (max-width: 640px) {
    .header {
        background-image: url('~/assets/images/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg');
    }

    .home\.chevron svg {
        width: 36px; /* width: 18px */
        height: 24px; /* width: 12px */
    }
}

@media only screen and (min-width: 640px) {
    .header {
        background-image: url('~/assets/images/Full-HD-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }
}

@media only screen and (min-width: 720px) {
    .header {
        background-image: url('~/assets/images/origins/Full-HD-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }

    .home\.chevron svg {
        width: 63px; /* width: 18px */
        height: 42px; /* width: 12px */
    }
}

@media only screen and (min-width: 1920px) {
    .header {
        background-image: url('~/assets/images/4k-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }
}

@media only screen and (min-width: 3840px) {
    .header {
        background-image: url('~/assets/images/5k-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }
}
</style>
