import React from 'react'

const Home = () => {
    return (

        <section class="home container" id="home">
            <div class="swiper home-swiper">
                <div class="swiper-wrapper">
                    {/* HOME SLIDER 1  */}
                    <section class="swiper-slide">
                        <div class="home__content grid">
                            <div class="home__group">
                                <img src="https://assets.codepen.io/7773162/home3-img.png" alt="" class="home__img" />
                                <div class="home__indicator"></div>
                                <div class="home__details-img">
                                    <h4 class="home__details-title">Captain Sem</h4>
                                    <span class="home__details-subtitle">Veteran Spooky Ghost</span>
                                </div>
                            </div>
                            <div class="home__data">
                                <h3 class="home__subtitle">#1 Top Scariest Ghost</h3>
                                <h1 class="home__title">RESPAWN <br /> THE SPOOKY <br /> SKULL </h1>
                                    <p class="home__description">In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of <strong>ghostkind. </strong></p>
                                    <div class="home__buttons">
                                        <a href="#" class="book--now">
                                            <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="" />
                                        </a>
                                        <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </section>
                    {/* HOME SLIDER 2 */}
                    <section class="swiper-slide">
                        <div class="home__content grid">
                            <div class="home__group">
                                <img src="https://assets.codepen.io/7773162/home2-img.png" alt="" class="home__img" />
                                <div class="home__indicator"></div>
                                <div class="home__details-img">
                                    <h4 class="home__details-title">Adino & Grahami</h4>
                                    <span class="home__details-subtitle">No words can describe them</span>
                                </div>
                            </div>
                            <div class="home__data">
                                <h3 class="home__subtitle">#2 top Best duo</h3>
                                <h1 class="home__title">BRING BACK <br /> MY COTTON <br /> CANDY </h1>
                                    <p class="home__description">Adino steals cotton candy from his brother and eats them all in one bite, a hungry beast. Grahami can no longer contain his anger towards Adino. </p>
                                    <div class="home__buttons">
                                        <a href="#" class="book--now">
                                            <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="" />
                                        </a>
                                        <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </section>

                    {/* HOME SLIDER 3 */}
                    <section class="swiper-slide">
                        <div class="home__content grid">
                            <div class="home__group">
                                <img src="https://assets.codepen.io/7773162/home1-img.png" alt="" class="home__img" />
                                    <div class="home__indicator"></div>
                                    <div class="home__details-img">
                                        <h4 class="home__details-title">The Labu “Reiza”</h4>
                                        <span class="home__details-subtitle">The Living Pumpkin</span>
                                    </div>
                            </div>
                            <div class="home__data">
                                <h3 class="pumpkin__subtitle">#3 Top Scariest Ghost 2020</h3>
                                <h1 class="home__title">UOOOO <br /> TRICK OR <br /> TREAT!! </h1>
                                    <p class="home__description">Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn something new, building my own bike with parts only made from Malaysia. </p>
                                    <div class="home__buttons">
                                        <a href="#" class="book--now">
                                            <img src="https://assets.codepen.io/7773162/svgviewer-output+%282%29_2.svg" alt="" />
                                        </a>
                                        <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </section>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    )
}

export default Home