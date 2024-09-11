import { Button } from "@mui/material";
import TodoItem from "../todoItem/TodoItem";
import styles from "./TodoForm.module.scss";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InputAdornment from "@mui/material/InputAdornment";
import { FilledInput } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

// we can also use crypto.randomUUID() to get random id

const loadData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoForm() {
  const [newItem, setNewItem] = useState("");
  const [itemsLabels, setItemLabels] = useState(loadData());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(itemsLabels));
  }, [itemsLabels]);

  const handleIsCompleted = (id) => {
    setItemLabels((prevItemLabels) => {
      return prevItemLabels.map((item) => {
        if (item.id === id) return { ...item, completed: !item.completed };
        else return item;
      });
    });
  };

  const handleIsRemoved = (id) => {
    setItemLabels((prevItemLabels) => {
      return (prevItemLabels = prevItemLabels.filter((item) => item.id !== id));
    });
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItemLabels((prevItemLabels) => {
        return (prevItemLabels = [
          ...prevItemLabels,
          { text: newItem, id: uuidv4(), completed: false },
        ]);
      });
      setNewItem("");
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Todos</h1>
      <div className={styles.todoFormContainer}>
        <div className="items-container">
          {itemsLabels.map((i) => {
            return (
              <TodoItem
                key={i.id}
                item={i.text}
                handleIsCompleted={() => handleIsCompleted(i.id)}
                handleIsRemoved={() => handleIsRemoved(i.id)}
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
