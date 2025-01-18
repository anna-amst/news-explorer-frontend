import "./About.css";
import photo from "../../assets/avatar.png";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={photo} alt="authors photo" />
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hi! I'm Anna, a software developer & designer who skillfully blends
          functionality with creativity to craft captivating and engaging
          digital experiences
        </p>
        <br />
        <p className="about__description">
          Once I discovered the power of communication through visual work, a
          new world opened up to me. As I created graphic and web designs, my
          interest naturally shifted towards bringing these ideas to life as
          fully realized projects. This journey led me to web development, which
          offered a way to channel my creativity into the technical side of
          building intuitive and engaging digital experiences.
        </p>
        <br />
        <p className="about__description">Let's connect!</p>
      </div>
    </section>
  );
}

export default About;
