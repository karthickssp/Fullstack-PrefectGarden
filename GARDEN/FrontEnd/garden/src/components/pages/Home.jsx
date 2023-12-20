import "../../assets/styles/Home.css";
import bee from "../../assets/images/bee.png";
import notes from "../../assets/images/notes.png";
import question from "../../assets/images/question.png";
import { Link } from "react-router-dom";
import guide from "../../assets/images/guide.jpg";
import fertilizer from "../../assets/images/fertilizer.jpg";
import maintain from "../../assets/images/maintain.jpg";
import organise from "../../assets/images/organise.jpg";
import seeding from "../../assets/images/seeding.jpg";

function Home() {
  return (
    <div className="home-background">
      <div className="explore-container">
        <div className="image-content">
          <img
            src="https://www.thespruce.com/thmb/XoRg5ZDKDhX_XDIu618RYOLHH_s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegetable-gardening-in-small-spaces-1403451-01-aa94b9199ba145079de2417b219c89b4.jpg"
            alt="Perfect Garden"
          />
        </div>
        <div className="description-content">
          <div className="description-title">Welcome to PerfectGarden!</div>
          <p className="description-para">
            We provide a wide range of gardening solutions for all enthusiasts.
            Discover our hand-picked selection of premium plants and tools
            crafted to elevate your gardening experience and create stunning
            outdoor spaces.
          </p>
          <Link to="/explore" className="explore-link">
            <button className="explore-btn">Explore</button>
          </Link>
        </div>
      </div>
      <div className="container clearfix">
        <div className="nobottomborder bottommargin-sm text-center">
          <h1 className="guide-title">
            The complete guide to growing food in your own backyard
          </h1>
          <h2 className="guide-subtitle">Suitable for gardeners worldwide</h2>
        </div>

        <div className="row clearfix">
          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <img src={bee} alt="Organic" className="feature-icon" />
              <h3 className="feature-title">Organic Gardening</h3>
              <p className="feature-description">
                How to grow and maintain your own organic garden
              </p>
            </div>
          </div>

          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <img src={notes} alt="Guides" className="feature-icon" />
              <h3 className="feature-title">Growing Guides</h3>
              <p className="feature-description">
                Grow a variety of foods with our fuss-free growing guides
              </p>
            </div>
          </div>

          <div className="col bottommargin-sm">
            <div className="feature-box media-box text-center">
              <img
                src={question}
                alt="Troubleshooting"
                className="feature-icon"
              />
              <h3 className="feature-title">Troubleshooting</h3>
              <p className="feature-description">
                Troubleshoot pests and diseases by using our handy charts and
                guides
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="product-background">
        <div className="product-list">
          <div className="product-card">
            <img src={seeding} alt="Seeding" className="product-image" />
            <Link to="/plantview"><button className="button">Seeding</button></Link>
          </div>
          <div className="product-card">
            <img src={organise} alt="Organize" className="product-image" />
            <Link to="/plantview"><button className="button">Organize</button></Link>
          </div>
          <div className="product-card">
            <img src={fertilizer} alt="Fertilize" className="product-image" />
            <Link to="/plantview"><button className="button">Fertilize</button></Link>
          </div>
          <div className="product-card">
            <img src={guide} alt="Guides" className="product-image" />
            <Link to="/guide">
              <button className="button">Guides</button>
            </Link>
          </div>
          <div className="product-card">
            <img src={maintain} alt="Maintain" className="product-image" />
            <Link to="/guide"><button className="button">Maintain</button></Link>
          </div>
        </div>
      </section>
      <div className="container-main">
        <div className="row-main">
          <div className="col-md-12">
            <h1>Why Grow Your Own?</h1>
            <p>
              Growing your own food has many health benefits both physically and
              mentally. The nutrients you receive from eating homegrown produce
              are second to none. Being amongst nature is also great for the
              mind, and garden therapy is often used to relieve symptoms of
              stress and anxiety.
            </p>
            <p>
              Having an edible garden encourages you and your loved ones to eat
              more fruit and vegetables. It makes produce more readily
              accessible, and because of the effort you have put into growing
              it, you are less likely to let it go to waste.
            </p>
            <div className="main-image">
              <img
                src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/blogs/IMG_20200217_074034_643/74c5bbd22dee65731d6d3bb2d2264a6d.jpg"
                alt="Main Image"
              />
            </div>
            <p>
              Another benefit of an edible garden is that you can decide what
              fertilizers and pesticides come in contact with your food. You are
              also able to eat organic produce without the hefty price tag.
            </p>
            <p>
              Having your own home garden allows you to control when you harvest
              your food. Crops that ripen on the plant are at their peak in
              terms of nutrition and flavor. Their taste is often better than
              store-bought produce, which is generally harvested early so it
              does not spoil before reaching supermarket shelves.
            </p>
            <p>
              An exciting benefit of a home garden is that you can experiment
              with growing crops that are not readily accessible in the
              supermarkets. Once you have mastered the basics, you may even find
              yourself branching out and growing things that you have never
              tasted before.
            </p>
            <p>
              Be warned, gardening can very quickly become addictive, but what
              better addiction to have!
            </p>
            <p>
              Check out our Growing Guides for a range of exciting foods to
              start growing in your home garden.
            </p>
            <p>
              For more on creating an edible garden, check out our Preparing
              Your Garden Guide.
            </p>
            <p>Happy Gardening!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
