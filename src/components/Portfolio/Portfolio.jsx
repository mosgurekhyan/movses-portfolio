import { WORKS } from '../../constants/works'
import './Portfolio.css'

function Portfolio() {
  return (
    <div id='portfolio' className='container'>
      <span className="name">
        <i className="fa-solid fa-grip-vertical"></i>
        portfolio
      </span>
      <p className='title'>Featured <span className='text_span'>Projects</span></p>
      <div className="works">
        {
          WORKS?.map(e => 
            <a href={e.link} target="_blank" rel="noopener noreferrer" key={e.id} className="work">
              <p className="work_name">{e.name}</p>
              <img loading='lazy' src={e.img} alt="" className="work_img" />
            </a>
          )
        }
      </div>
    </div>
  )
}

export default Portfolio