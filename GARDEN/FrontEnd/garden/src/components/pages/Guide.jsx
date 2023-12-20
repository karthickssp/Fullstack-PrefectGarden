import guide1 from "../../assets/images/guide1.jpg";
import guide2 from "../../assets/images/guide2.jpg";
import guide3 from "../../assets/images/guide3.jpg";
import "../../assets/styles/Guide.css";

function Guide() {
  return (
    <div className="guide-back">
    <section className="guide-background">
        <div className="guide-list">
          <div className="guide-card">
            <img src={guide1} alt="guide1" className="guide-image" />
          </div>
          <div className="guide-card">
            <img src={guide2} alt="guide2" className="guide-image" />
          </div>
          <div className="guide-card">
            <img src={guide3} alt="guide3" className="guide-image" />
          </div>
        </div>
      </section>
      <p className="guide-para">
        Building an Edible Garden Building a garden is a very rewarding
        experience and edible gardens in particular are a point of pride to most
        gardeners. Edible gardens can be designed to suit any style or ability
        and should always be designed in a way that is practical for the users.
        If you are new to vegetable gardening, start small and focus on growing
        a handful of crops. Visit our Growing Guides and select the Easy To
        Grow option for more information. A small raised bed is the perfect way
        to get started as it is easy to set up and maintain. Most raised beds
        can be purchased from your local hardware store or nursery and come in
        flat packs, with pieces that slot together without the use of any tools.
        Once you have the hang of gardening, you can expand your growing space
        by adding more raised beds or by starting an in-ground garden. If you
        have a small space to work with, then try container gardening, see our
        Small Scale Gardening blog in the Kitchen & Garden section for more
        information. Site selection is another important consideration as most
        edible crops require a minimum of six to eight hours of sunlight each
        day in order to crop well. A full sun position is particularly important
        for fruiting crops such as eggplant, tomatoes, cucumbers, peppers and
        squash varieties. If your garden is on the shady side, there is still
        plenty you can grow including a large range of herbs and leafy greens!
        Visit our Growing Guides and select the Shade Tolerant option for
        more information
      </p>
    </div>
  );
}

export default Guide;
