import { SKILLS } from '../../constants/Skills'
import './Skills.css'

function Skills() {
  return (
    <div id='skills' className='container'>
      <span className="name">
        <i className="fa-solid fa-shapes"></i>
        skills
      </span>
      <p className='title'>My <span className='text_span'>Skills</span></p>
      <div className="skills">
        {
          SKILLS?.map(e =>
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

export default Skills