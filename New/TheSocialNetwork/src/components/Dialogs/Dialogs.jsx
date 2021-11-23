import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          <DialogItem name="Dmitry" id="1" />
          <DialogItem name="Polina" id="2" />
          <DialogItem name="Sveta" id="3" />
          <DialogItem name="Sasha" id="4" />
          <DialogItem name="Alex" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Why" />
        <Message message="This is good" />
        <Message message="This is ga" />
      </div>
    </div>
  );
};

export default Dialogs;
