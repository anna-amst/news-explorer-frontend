import "./About.css";

function About() {
  return (
    <div className="about">
      <img className="about__image"/>
      <div className="about__info">
        <h1 className="about__title">About the author</h1>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.</p><br />
          <p className="about__paragraph">You can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.</p>
      </div>
    </div>
  );
}

export default About;
