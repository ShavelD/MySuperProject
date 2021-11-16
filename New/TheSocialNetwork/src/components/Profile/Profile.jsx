import s from './Profile.module.css';
import MyContacts from './MyContacts/MyContacts';
import group from './group.png';
import Ava from './Ava.png';


const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.container}>
        <img className={s.fonts} src={group} />
        <img className={s.card} src={Ava} />
      </div>
      <MyContacts />
      </div>
  );
};

export default Profile;
