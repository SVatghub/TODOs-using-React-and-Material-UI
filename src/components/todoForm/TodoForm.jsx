import { Button } from "@mui/material";
import TodoItem from "../todoItem/TodoItem";
import styles from "./TodoForm.module.scss";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InputAdornment from "@mui/material/InputAdornment";
import { FilledInput } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";

export default function TodoForm() {
  const [newItem, setNewItem] = useState("");
  const [itemsLabels, setItemLabels] = useState(["HomeWork", "Code"]);

  const handleIsCompleted = () => {};

  const handleIsRemoved = (index) => {
    setItemLabels((prevItemLabels) => {
      return (prevItemLabels = prevItemLabels.filter(
        (_, idx) => idx !== index
      ));
    });
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItemLabels((prevItemLabels) => {
        return (prevItemLabels = [...prevItemLabels, newItem]);
      });
      setNewItem("");
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Todos</h1>
      <div className={styles.todoFormContainer}>
        <div className="items-container">
          {itemsLabels.map((i, idx) => {
            return (
              <TodoItem
                key={idx}
                item={i}
                handleIsCompleted={handleIsCompleted}
                handleIsRemoved={() => handleIsRemoved(idx)}
              />
            );
          })}
        </div>
        <div className={styles.addItemContainer}>
          <FormControl sx={{ m: 1, width: "300px" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-item">New Item</InputLabel>
            <FilledInput
              id="filled-adornment-item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <Button onClick={handleAddItem}>
                    <EditIcon />
                  </Button>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
}
