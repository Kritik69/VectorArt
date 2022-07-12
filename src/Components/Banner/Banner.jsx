import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BannerImg from './../MediaFiles/BannerImg.webp'
import BannerImg2 from './../MediaFiles/BannerImg2.webp'
import './Banner.css'


function Banner() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            >
                <div className='image-item' style={{backgroundImage: `url(${BannerImg})` }}>
                    <div className="content container">
                        <h1 className='text-white'>6 YEARS OF ACTION</h1>
                        <p className='text-white contentText'>We Strive to make sure that the service we deliver is not just complete high quality service, but also an innovative solution that can assure returns on investment for our clients and ourselves</p>
                    </div>
                </div>
                <div className='image-item' style={{backgroundImage: `url(${BannerImg2})` }}>
                    <div className="content container text-center">
                        <h1 className='text-white display-1'>TIMELESS</h1>
                        <h1 className='text-white display-1'>DISTICNTIVE</h1>
                        <h1 className='text-white display-1'>BEAUTIFUL</h1>
                    </div>
                </div>
        </Carousel>
    </>
  )
}

export default Banner