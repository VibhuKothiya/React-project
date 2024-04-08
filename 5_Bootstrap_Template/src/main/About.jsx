import React from 'react'

const About = () => {
  return (
    <section class="section about" id="about">
      <div class="about__container container grid">
        <div class="about__data">
          <h2 class="section__title about__title">About Halloween <br /> Night </h2>
          <p class="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a very fun international celebration, this celebration comes from ancient origins, and is already celebrated by everyone. </p>
          <a href="#" class="book--now">
            <img src="https://assets.codepen.io/7773162/svgviewer-output+%281%29_3.svg" alt="" />
          </a>
        </div>
        <img src="https://assets.codepen.io/7773162/about-img.png" alt="" class="about__img" />
      </div>
    </section>
  )
}

export default About