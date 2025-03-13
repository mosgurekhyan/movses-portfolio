import './Profile.css'
import profile from '../../assets/images/profile.jpg'

function Profile() {
  return (
    <div className='profile'>
      <div className="profile_name_container">
        <p className="profile_name">Movses</p>
        <p className="profile_ocupation">Full Stack JS Developer</p>
      </div>
      <img src={profile} className='profile_video' />
      {/* <div className="profile_video">My Intro video</div> */}
      <a href="mailto:gurekhyanmovses2001@gmail.com" target="_blank" rel="noopener noreferrer" className="profile_email">gurekhyanmovses2001@gmail.com</a>
      <p className="profile_location">Based in Yerevan, AM</p>
      <div className="profile_links_container">
        <a href="https://github.com/mosgurekhyan" target="_blank" rel="noopener noreferrer" className="profile_link_circle">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/movses-gurekhyan-319233256" target="_blank" rel="noopener noreferrer" className="profile_link_circle">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <a href="mailto:gurekhyanmovses2001@gmail.com" target="_blank" rel="noopener noreferrer" className="profile_btn">
        <i className="fa-solid fa-envelope"></i>
        Hire me
      </a>
    </div>
  )
}

export default Profile