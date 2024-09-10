import styles from "./TodoItem.module.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

export default function TodoItem({ item, handleIsCompleted, handleIsRemoved }) {
  return (
    <div className={styles.TodoItem}>
      <Checkbox onClick={handleIsCompleted} />
      <label htmlFor="">{item}</label>
      <IconButton aria-label="delete" size="small" onClick={handleIsRemoved}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
