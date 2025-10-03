import './About.css'

function About() {
  return (
    <div id='about' className='container'>
      <span className="name">
        <i className="fa-solid fa-user"></i>
        about
      </span>
      <p className="title">Every great website begin with <br /> an even <span className='text_span'>better story</span></p>
      <p className="about_story">Since beginning my journey as a web developer two years ago, I've worked in onsite, offsite and hybrid environments, building dynamic web applications for businesses and startups. I've collaborated with talented teams across different work settings, contributed to scalable solutions, and focused on creating seamless user experiences. I'm passionate about writing clean, efficient code, naturally curious, and always striving to improve my skills—one challenge at a time.</p>
    </div>
  )
}

export default About