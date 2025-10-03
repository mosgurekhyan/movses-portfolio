import { WORKPLACES } from '../../constants/workplaces'
import './Education.css'

function Education() {
  return (
    <div id='education' className='container'>
      <span className="name">
        <i className="fa-solid fa-briefcase"></i>
        resume
      </span>
      <p className='title'>Education & <span className='text_span'>Experience</span></p>
      {
        WORKPLACES?.map(e => 
          <div key={e.id} className="education_container">
            <div className="education_container_limit_frame">
              <span className="education_container_limit_circle"></span>
              <span className="education_container_limit_line"></span>
            </div>
            <div className="education_data">
              <p className="education_date">{e.date}</p>
              <div className="education_detail">
                <p className="education_detail_title">{e.position}</p>
                <a href={e.link} target="_blank" rel="noopener noreferrer" className="education_detail_organization">{e.company}</a>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Education