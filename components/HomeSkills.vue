<template>
    <section class="w-full bg-custom-2">
        <section id="homeskills" class="container mx-auto w-full">
            <section
                class="w-full flex flex-wrap items-center justify-center min-full-height"
            >
                <section
                    class="w-full flex flex-wrap items-center justify-start skills.title"
                >
                    <header class="md:w-full mx-auto w-11/12 py-4 my-8">
                        <h4
                            class="text-custom-5 xl:text-xl md:text-lg text-md font-bold skills.title opacity-0"
                        >
                            Habilidades
                        </h4>
                    </header>
                    <figure class="avatar overflow-hidden relative opacity-0">
                        <img
                            src="~/assets/images/avatar.jpg"
                            class="w-8/12 avatar.image"
                            alt="Eu segurando uma boia de unicórno."
                        />
                    </figure>
                    <section class="skill">
                        <section
                            class="flex flex-wrap items-center justify-start py-4 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Perfil
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <p
                                    class="xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"
                                >
                                    Desenvolvedor Fullstack
                                    <b class="text-custom-4">Pleno</b>
                                </p>
                            </div>
                        </section>
                        <section
                            class="flex flex-wrap items-center justify-start py-2 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Front-End
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <div
                                    class="frontend.box w-full bg-custom-1 py-2 relative opacity-0"
                                >
                                    <div
                                        id="frontend"
                                        class="absolute top-0 left-0 bg-custom-3 py-2"
                                    ></div>
                                </div>
                            </div>
                        </section>
                        <section
                            class="flex flex-wrap items-center justify-start py-2 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Ferramentas
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <p
                                    class="xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"
                                >
                                    VueJS, ReactJS, Angular, ES6, Sass,
                                    Stylus...
                                </p>
                            </div>
                        </section>
                        <section
                            class="flex flex-wrap items-center justify-start py-2 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Back-End
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <div
                                    class="backend.box w-full bg-custom-1 py-2 relative opacity-0"
                                >
                                    <div
                                        id="backend"
                                        class="absolute top-0 left-0 bg-custom-3 py-2"
                                    ></div>
                                </div>
                            </div>
                        </section>
                        <section
                            class="flex flex-wrap items-center justify-start py-2 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Ferramentas
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <p
                                    class="xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"
                                >
                                    Python, PHP, NodeJS, JAVA, Scala, Elixir...
                                </p>
                            </div>
                        </section>
                        <section
                            class="flex flex-wrap items-center justify-start py-2 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Frameworks
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <div
                                    class="frameworks.box w-full bg-custom-1 py-2 relative opacity-0"
                                >
                                    <div
                                        id="frameworks"
                                        class="absolute top-0 left-0 bg-custom-3 py-2"
                                    ></div>
                                </div>
                            </div>
                        </section>
                        <section
                            class="flex flex-wrap items-center justify-start py-1 w-full"
                        >
                            <div class="xl:w-3/12 lg:w-4/12">
                                <p
                                    class="xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"
                                >
                                    Ferramentas
                                </p>
                            </div>
                            <div class="xl:w-9/12 lg:w-8/12">
                                <p
                                    class="xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"
                                >
                                    Phoenix, Laravel, AdonisJS, Tailwindcss...
                                </p>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </section>
</template>
<style scoped>
.frontend\.box,
.backend\.box,
.frameworks\.box {
    transform-origin: left center;
}

.skills\.items,
.skills\.title,
.skills\.label {
    letter-spacing: 2px;
}

@media only screen and (min-width: 1024px) {
    .avatar {
        width: 420px;
        max-height: 420px;
    }

    .skill {
        width: 604px;
    }
}

@media only screen and (min-width: 1280px) {
    .skill {
        width: 860px;
    }

    .skills\.triggerOverlay {
        width: 40px;
        height: 40px;
        margin-top: 40px;
        transition: cubic-bezier(0.215, 0.61, 0.355, 1) 220ms background-color;
    }

    .skills\.triggerOverlay svg {
        width: 28px;
        height: 18px;
    }
}

@media only screen and (min-width: 1536px) {
    .skill {
        width: 1116px;
    }

    .skills\.overlay {
        width: 60px;
        height: 60px;
        transform: translateY(60px);
    }
}
</style>
<script>
import anime from 'animejs'
import imagesloaded from 'imagesloaded'
export default {
    name: 'HomeSkills',
    data() {
        return {
            isExecuted: false,
        }
    },
    mounted() {
        imagesloaded(document.querySelector('body'), () => {
            this.initListengScroll()
        })
    },
    methods: {
        runAnimations() {
            anime.timeline({ loop: false }).add({
                targets: '.skills\\.label',
                opacity: [0, 1],
                translateX: ['-45px', 0],
                duration: 400,
                easing: 'easeOutElastic(1, .6)',
                elasticity: 700,
                delay: (_, i) => 80 * i,
            })

            anime.timeline({ loop: false }).add({
                targets: '.avatar',
                opacity: [0, 1],
                translateY: ['45px', 0],
                duration: 1400,
                easing: 'easeOutElastic(1, .6)',
                delay: (_, i) => 80 * i,
            })

            anime.timeline({ loop: false }).add({
                targets: '.skills\\.triggerOverlay',
                opacity: [0, 1],
                scale: [0, 1],
                duration: 1400,
                easing: 'easeOutElastic(1, .6)',
                delay: (_, i) => 80 * i,
            })

            anime.timeline({ loop: false }).add({
                targets: '.skills\\.triggerOverlay svg',
                opacity: [0, 1],
                duration: 1400,
                delay: (_, i) => 80 * i,
            })

            anime.timeline({ loop: false }).add({
                targets: '.skills\\.words',
                opacity: [0, 1],
                scale: [1.8, 1],
                translateX: [10, 0],
                duration: 100,
                easing: 'spring(1, 80, 10, 0)',
                delay: (_, i) => 40 * i,
            })

            anime.timeline({ loop: false }).add({
                targets: '.skills\\.title',
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 400,
                easing: 'spring(1, 80, 10, 0)',
                delay: (_, i) => 40 * i,
            })

            anime
                .timeline({ loop: false })
                .add({
                    targets: [
                        '.frontend\\.box',
                        '.backend\\.box',
                        '.frameworks\\.box',
                    ],
                    opacity: [0, 1],
                    scaleX: [0, 1],
                    translateZ: 0,
                    duration: 400,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                    delay: (_, i) => 80 * i,
                })
                .add({
                    targets: '.frontend\\.box div',
                    width: [0, '93%'],
                    duration: 400,
                    easing: 'easeOutElastic(1, .6)',
                    elasticity: 700,
                })
                .add({
                    targets: '.backend\\.box div',
                    width: [0, '74%'],
                    duration: 400,
                    easing: 'easeOutElastic(1, .6)',
                    elasticity: 700,
                })
                .add({
                    targets: '.frameworks\\.box div',
                    width: [0, '82%'],
                    duration: 400,
                    easing: 'easeOutElastic(1, .6)',
                    elasticity: 700,
                })
        },
        initListengScroll() {
            const HomeSkills = document.getElementById('homeskills')
            const items = document.querySelectorAll('.skills\\.items')
            items.forEach((v) => {
                v.innerHTML = v.textContent.replace(
                    /\S/g,
                    '<span class="skills.words inline-block opacity-0">$&</span>'
                )
            })
            const startAnimation = () => {
                if (
                    window.scrollY >= HomeSkills.offsetTop * 0.98 &&
                    !this.isExecuted
                ) {
                    this.isExecuted = true
                    this.runAnimations()
                }
            }
            startAnimation()
            window.addEventListener(
                'scroll',
                () => {
                    startAnimation()
                },
                false
            )
        },
    },
}
</script>
