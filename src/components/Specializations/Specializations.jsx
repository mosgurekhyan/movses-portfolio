import { SPECIALIZATIONS } from '../../constants/specializations'
import './Specializations.css'

function Specializations() {
  return (
    <div id='specializations' className='container'>
      <span className="name">
        <i className="fa-solid fa-bars-staggered"></i>
        expertise
      </span>
      <p className='title'>My <span className='text_span'>Specializations</span></p>
      <div className="specializations">
        {
          SPECIALIZATIONS?.map(e => 
            <div className='specialization' key={e.id}>
              <div className="specialization_container">
                <p className="specialization_title">{e.title} Development</p>
                <p className="specialization_text">{e.text}</p>
                <p className="specialization_projects">{e.projects} projects</p>
              </div>
              <i className="fa-solid fa-code"></i>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Specializations