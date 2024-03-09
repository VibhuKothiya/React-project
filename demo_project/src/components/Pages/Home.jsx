import React from 'react'
import Card from '../Card'
import data from './data'
import Footer from '../footer/Footer'

const Home = () => {
    return (
        <>
        <section class="mt-5">
       <div class="main">
            <div class="area">
                <h1>Unlimited movies, TV <br />shows, and more.</h1>
                <h3>Watch anywhere. Cancel anytime.
                </h3>

                <div class="search">
                    <input type="text" class="box" placeholder="Email" />
                    <span class="try">
                        Try 30 days free <i class="fas fa-chevron-right"></i>
                    </span>
                </div>
                <h4>Ready to watch? Enter your email to create or access your account
                </h4>
            </div>
        </div>
        </section>
        <section class="mt-5">
            <div className="row">
            <div className='row'>
            {data.map((val) => {
              return (
                <Card
                  key={val.id}
                  title={val.title}
                  desc={val.description}
                  imgSrc={val.imgSrc}
                />
              )
            })}
          </div>
            </div>
            

        </section>
        <section class="mt-5">
            <Footer/>
        </section>
    
        </>
    )
}

export default Home
