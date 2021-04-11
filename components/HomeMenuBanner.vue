<template>
    <section>
        <section class="w-full flex flex-wrap items-center justify-center">
            <section class="lg:w-6/12 md:w-4/12 w-11/12 mx-auto my-2 py-4">
                <figure
                    class="text-custom-1 lg:text-xl md:text-md text-lg uppercase md:inline-block block md:mx-none mx-auto text-center"
                >
                    <hr />
                    Mizael - The Web Dev
                    <hr />
                </figure>
            </section>
            <section class="lg:w-6/12 md:w-8/12 py-4">
                <nav class="w-full">
                    <ul
                        class="w-full flex flex-wrap items-center md:justify-end justify-center"
                    >
                        <li class="px-2 mx-2">
                            <a
                                href="#app"
                                class="lg:text-md md:text-sm text-xs menu.link hover:text-custom-2 text-custom-1"
                            >
                                Home
                                <hr />
                            </a>
                        </li>
                        <li class="px-2 mx-2">
                            <a
                                href="#about"
                                class="lg:text-md md:text-sm text-xs menu.link hover:text-custom-2 text-custom-1"
                            >
                                Sobre Mim
                                <hr />
                            </a>
                        </li>
                        <li class="px-2 mx-2">
                            <a
                                href="#homeskills"
                                class="lg:text-md md:text-sm text-xs menu.link hover:text-custom-2 text-custom-1"
                            >
                                Habilidades
                                <hr />
                            </a>
                        </li>
                        <li class="px-2 mx-2">
                            <a
                                href="#homecarouselbox"
                                class="lg:text-md md:text-sm text-xs menu.link hover:text-custom-2 text-custom-1"
                            >
                                Certificados
                                <hr />
                            </a>
                        </li>
                        <li class="px-2 mx-2">
                            <a
                                href="#homefooter"
                                class="lg:text-md md:text-sm text-xs menu.link hover:text-custom-2 text-custom-1"
                            >
                                Fale Comigo
                                <hr />
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    </section>
</template>
<style scoped>
.menu\.link {
    transition: ease 220ms color;
}

.menu\.link hr {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 220ms transform;
    transform-origin: left center;
}

.menu\.link:not(:hover) hr {
    transform: scaleX(0);
}
</style>
