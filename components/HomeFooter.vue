<template>
    <section class="bg-custom-2 w-full">
        <section
            id="homefooter"
            class="container mx-auto min-middle-height flex flex-wrap items-center justify-center relative"
        >
            <section class="w-full">
                <header class="w-full py-4 my-8">
                    <h4
                        class="footer.title text-custom-5 xl:text-xl lg:text-lg font-bold"
                    >
                        Fale Comigo
                    </h4>
                </header>
                <section
                    class="w-full flex flex-wrap items-center justify-center"
                >
                    <section class="w-6/12">
                        <ul class="w-full footer.text">
                            <li class="w-full py-1 px-1">
                                <a
                                    href="javascript: void(0)"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                    >Linkedin</a
                                >
                            </li>
                            <li class="w-full py-1 px-1">
                                <a
                                    href="javascript: void(0)"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                    >Github</a
                                >
                            </li>
                            <li class="w-full py-1 px-1">
                                <a
                                    href="javascript: void(0)"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                    >Facebook</a
                                >
                            </li>
                        </ul>
                    </section>
                    <section class="w-6/12">
                        <ul class="w-full footer.text">
                            <li class="w-full py-1 px-1">
                                <a
                                    href="mailto: nemeses606@gmail.com"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                >
                                    nemeses606@gmail.com
                                </a>
                            </li>
                            <li class="w-full py-1 px-1">
                                <a
                                    href="mailto: zxmaster01@gmail.com"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                >
                                    zxmaster01@gmail.com
                                </a>
                            </li>
                            <li class="w-full py-1 px-1">
                                <a
                                    href="mailto: mizzzael606@gmail.com"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                >
                                    mizzzael606@gmail.com
                                </a>
                            </li>
                            <li class="w-full py-1 px-1">
                                <a
                                    href="tel: (11) 94540-2949"
                                    target="_blank"
                                    class="xl:text-md lg:text-sm text-custom-5"
                                >
                                    (11) 94540-2949
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
            <a
                href="#app"
                class="footer.up absolute bottom-0 right-0 px-2 py-2"
            >
                <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 0.294983L0 6.29498L1.41 7.70498L6 3.12498L10.59 7.70498L12 6.29498L6 0.294983Z"
                        fill="#333333"
                        fill-opacity="0.54"
                    />
                </svg>
            </a>
        </section>
    </section>
</template>
<script>
import imagesloaded from 'imagesloaded'
import anime from 'animejs'
export default {
    name: 'Homeafooter',
    data() {
        return {
            active: false,
        }
    },
    mounted() {
        imagesloaded(document.querySelector('body'), () => {
            this.triggerAnimation()
            window.addEventListener(
                'scroll',
                () => {
                    this.triggerAnimation()
                },
                false
            )
        })
    },
    methods: {
        initAnimation() {
            anime
                .timeline({ loop: false })
                .add({
                    targets: '.footer\\.title',
                    opacity: [0, 1],
                    translateY: ['-45px', 0],
                    duration: 600,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                })
                .add({
                    targets: '.footer\\.text',
                    opacity: [0, 1],
                    translateY: ['-45px', 0],
                    duration: 600,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                })
                .add({
                    targets: '.footer\\.up',
                    opacity: [0, 1],
                    scale: [0, 1],
                    duration: 600,
                    easing: 'easeOutElastic(1, .6)',
                    elasticity: 700,
                })
        },
        triggerAnimation() {
            const footerPage = document.getElementById('homefooter')
            if (!this.active && window.scrollY >= footerPage.offsetTop * 0.8) {
                this.active = true
                this.initAnimation()
            }
        },
    },
}
</script>
<style scoped>
.footer\.up {
    margin-bottom: 40px;
}

.footer\.up svg {
    width: 36px;
    height: 24px;
}

@media only screen and (max-width: 640px) {
    .min-middle-height {
        height: 100vh;
    }
}
</style>
