import './HardSkills.css'
import { HARD_SKILLS } from '../../constants/hardSkills'

function HardSkills() {
  return (
    <div id='skills' className='container'>
      <span className="name">
        <i className="fa-solid fa-shapes"></i>
        skills
      </span>
      <p className='title'>Hard <span className='text_span'>Skills</span></p>
      <div className="skills">
        {
          HARD_SKILLS?.map(e =>
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

export default HardSkills