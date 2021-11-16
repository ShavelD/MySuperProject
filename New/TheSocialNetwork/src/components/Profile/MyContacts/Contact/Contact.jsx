import s from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={s.item}>
      <div>
        <span>Like</span>
        {props.count}
      </div>
    </div>
     
  );
};

export default Contact;
