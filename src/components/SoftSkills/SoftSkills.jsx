import { SOFT_SKILLS } from '../../constants/softSkills'
import './SoftSkills.css'

function SoftSkills() {
  return (
    <div id='skills' className='container'>
      <span className="name">
        <i className="fa-solid fa-shapes"></i>
        skills
      </span>
      <p className='title'>Soft <span className='text_span'>Skills</span></p>
      <div className="skills">
        {
          SOFT_SKILLS?.map(e =>
          <div className='skill' key={e.id}>
            <i className={e.icon}></i>
            <p className="skill_name">{e.name}</p>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default SoftSkills