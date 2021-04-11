<template>
    <section class="w-full bg-custom-1 relative">
        <section
            id="about"
            class="container mx-auto w-full py-2 min-full-height flex flex-wrap items-center"
        >
            <section class="w-full">
                <header class="header md:w-full w-11/12 mx-auto">
                    <h4
                        class="about.title text-custom-5 xl:text-xl md:text-lg text-md font-bold opacity-0"
                    >
                        Sobre Mim
                    </h4>
                </header>
                <section class="body md:w-full w-11/12 mx-auto">
                    <p
                        class="about.text text-custom-5 lg:text-md text-xs opacity-0"
                    >
                        Olá, sou Mizael, como costumo dizer, um desenvolvedor em
                        busca da singularidade, é um prazer conhece-lo(a),
                        espero que esteja tudo bem, esse é o meu site pessoal,
                        apenas um espaço para que eu possa partilhar um pouco da
                        minha carreira, a 6 anos no mercado, sou um programador
                        FullStack de {{ new Date().getFullYear() - 1995 }} anos,
                        me formei no SENAC em 2014, e desde então tenho
                        ingressado na carreira de desenvolvedor web, já atuei em
                        inúmeros cenários, e posso dizer que estou em um nível
                        pleno na minha carreira, porém toda a escada se sobe de
                        degrau em degrau e hoje tenho estudado técnicas de
                        Machine Learning, não por uma tendência de mercado, mas
                        simplesmente pelo prazer de aprender, e um dia poder
                        criar algo que você e outros possam usufruir, afinal de
                        contas, no final são nossos atos que contam nossas
                        histórias, e gostaria de um final feliz nas minhas, e
                        espero que na suas também, e falando nisso, fique a
                        vontade para me mandar uma mensagem, desde já, muito
                        obrigado pela visita, e que a força esteja com você!
                    </p>
                </section>
            </section>
        </section>
    </section>
</template>
<script>
import imagesloaded from 'imagesloaded'
import anime from 'animejs'
export default {
    name: 'Homeaboutme',
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
                    targets: '.about\\.title',
                    opacity: [0, 1],
                    translateY: ['-45px', 0],
                    duration: 600,
                    easing: 'easeInOutExpo',
                    elasticity: 700,
                })
                .add({
                    targets: '.about\\.text',
                    opacity: [0, 1],
                    translateY: ['-45px', 0],
                    duration: 600,
                    easing: 'easeInOutExpo',
                    elasticity: 800,
                    delay: (el, i) => 80 * (i + 1),
                })
        },
        triggerAnimation() {
            const aboutPage = document.getElementById('about')
            if (!this.active && window.scrollY >= aboutPage.offsetTop) {
                this.active = true
                this.initAnimation()
            }
        },
    },
}
</script>

<style scoped>
.about\.text {
    word-break: unset;
}

@media only screen and (max-width: 640px) {
    .header {
        margin-bottom: 60px;
    }
}

@media only screen and (min-width: 720px) {
    .header {
        margin-bottom: 20px;
    }
}

@media only screen and (min-width: 1920px) {
    .header {
        margin-bottom: 40px;
    }
}
</style>
