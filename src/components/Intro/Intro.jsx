import './Intro.css'

function Intro() {
  return (
    <div id='intro' className='container'>
      <span className="name">
        <i className="fa-solid fa-house"></i>
        introduction
      </span>
      <p className="intro_main_text">Hi, I’m <span className='text_span'>Movses</span>!</p>
      <p className="intro_text">I’m a Full Stack Developer, and I love building websites and apps that work fast and look great.</p>
    </div>
  )
}

export default Intro