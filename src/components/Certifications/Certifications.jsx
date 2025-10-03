import { CERTIFICATIONS } from '../../constants/certifications'
import './Certifications.css'

function Certifications() {
  return (
    <div id='certifications' className='container'>
      <span className="name">
        <i className="fa-solid fa-ribbon"></i>
        certifications
      </span>
      <p className='title'>Certifications</p>
      <div className="certifications">
        {
          CERTIFICATIONS?.map(e => 
            <div key={e.id} className="certification">
              <p className="certification_text">{e.text}</p>
              <i className='fas fa-ribbon'></i>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Certifications