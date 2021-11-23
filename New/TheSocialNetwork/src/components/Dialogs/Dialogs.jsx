import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to="/dialogs/1">Dmitry</NavLink>
            </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/2">Polina</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/3">Sveta</NavLink>
            </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/4">Sasha</NavLink>
            </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/5">Alex</NavLink>
            </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Why</div>
        <div className={s.message}>This is good</div>
      </div>
    </div>
  );
};

export default Dialogs;
