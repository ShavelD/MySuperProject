import s from './MyContacts.module.css';
import Contact from './Contact/Contact';

const MyContacts = () => {
  return (
      <div className={s.black}>
        <div className={s.firstname}>
        Olga Tihonova
        </div>
        <div className={s.description}>
      <div className={s.posts}>
        <Contact message="Hi, how are you?" count='15' />
        <Contact message="It's my first post" count='15' />
    </div>
    </div>
    </div>
  );
};

export default MyContacts;
