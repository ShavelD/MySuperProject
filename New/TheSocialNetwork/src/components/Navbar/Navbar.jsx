import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import User from './User.png';
import Chat from './Chat.png';
import Newspaper from './Newspaper.png';
import Music from './Music.png';
import Setting from './Setting.png';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.fons}>
      <div className={s.item}>
      <img className={s.icon} src={User} />
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Chat} /> 
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Newspaper} />
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Music} />
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
      <img className={s.icon} src={Setting} />
        <NavLink to="/setting" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
