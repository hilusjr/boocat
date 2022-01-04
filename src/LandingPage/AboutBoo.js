import head from './head.svg'
import paw from './paw.svg'
import boo from './boo.svg'

function AboutBoo() {
  return (
    <section className="about-boo">
      <div className="about-boo-container">
        <div>
          <p>
            Sorry, I had to try! But don't worry. I'm actually not that scary, I
            make managing really simple and easy! Try and see on your very own
            eyes!
          </p>
          <button className="bg-gradient">open panel</button>
        </div>
        <img className="head" src={head} alt="head" />
        <img className="left-paw" src={paw} alt="paw" />
        <img className="right-paw" src={paw} alt="paw" />
        <img className="boo" src={boo} alt="boo" />
      </div>
    </section>
  )
}

export default AboutBoo
