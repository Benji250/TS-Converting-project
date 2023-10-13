import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main>
      <img src={require('./CAMSY-LOGO.jpg')} alt="logo" />
      <header>
        <a href="./" className="logo">CAMSY</a>

        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <div className='entry'>
        {/* <img src={require('./CAMSY-LOGO.jpg')} alt="logo"/> */}
        <h3>You're trusted source for high end and affordable cameras</h3>
        <p>Whether you are looking for a high end camera or a certified used camera, we have what you are looking for.</p>
      </div>

      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex={0} className="carousel__slide1">
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2" className="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex={0} className="carousel__slide2">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3" className="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3" tabIndex={0} className="carousel__slide3">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4" className="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4" tabIndex={0} className="carousel__slide4">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1" className="carousel__next">Go to first slide</a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a href="#carousel__slide1" className="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide2" className="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide3" className="carousel__navigation-button">Go to slide 3</a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide4" className="carousel__navigation-button">Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>

      <img src={require('./images/Home/camera.jpeg')} alt="cover" />
      <img src={require('./images/Home/594C8AE7-7D3F-4161-B226-DE06D7B7A653.jpg')} alt="cover2" />
    </main>
  );
}

export default Home;
