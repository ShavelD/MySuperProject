import s from './Navbar.module.css';
import User from './User.png';
import Chat from './Chat.png';
import Newspaper from './Newspaper.png';
import Music from './Music.png';
import Setting from './Setting.png';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.fons}>
      <div className={`${s.item} ${s.active}`}>
      <img className={s.icon} src={User} />
        <a>Profile</a>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Chat} /> 
        <a>Message</a>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Newspaper} />
        <a>News</a>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Music} />
        <a>Music</a>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Setting} />
        <a>Settings</a>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
