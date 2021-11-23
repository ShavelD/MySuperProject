import s from './ProfileInfo.module.css';
import group from './group.png';
import Ava from './Ava.png';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.container}>
        <img className={s.fonts} src={group} />
        <img className={s.card} src={Ava} />
      </div>
      </div>
  );
};

export default ProfileInfo;
