<template>
    <header class="header w-full full-height">
        <section class="header.backdrop">
            <section class="container mx-auto relative">
                <section class="w-full absolute top-0 left-0">
                    Menu Here!
                </section>
                <section class="flex flex-wrap items-center full-height">
                    <div class="w-full">
                        <h2 class="xl:text-5xl font-light text-custom-1">
                            Olá, este é o meu site pessoal!
                        </h2>
                        <p class="xl:text-xl font-light text-custom-1 my-4">
                            Desenvolvedor de Guarulhos, São Paulo
                        </p>
                    </div>
                </section>
            </section>
        </section>
    </header>
</template>
<script>
export default {
    name: 'HomeBanner',
    mounted() {},
}
</script>
<style scoped>
.header {
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
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
