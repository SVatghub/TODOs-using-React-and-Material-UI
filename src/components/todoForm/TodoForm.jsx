import { Box, Button } from "@mui/material";
import TodoItem from "../todoItem/TodoItem";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import "./TodoForm.css"
import { useState } from "react";



export default function TodoForm() {
    const [newItem, setNewItem] = useState("");
    const [itemsLabels, setItemLabels] = useState(["HomeWork", "Code"])

    const handleIsCompleted = () => {
    }

    const handleIsRemoved = (index) => {
        setItemLabels((prevItemLabels) => {
            return prevItemLabels = prevItemLabels.filter((_, idx) => idx !== index)
        })
    }

    const handleAddItem = () => {
        if (newItem.trim()) {
            setItemLabels((prevItemLabels) => {
                return prevItemLabels = [...prevItemLabels, newItem]
            })
            setNewItem("")
        }
    }

    const handleChange = (e) => {
        setNewItem(e.target.value)
    }



    return (
        <div className="todoForm-container">
            <div className="items-container">
                {itemsLabels.map((i, idx) => {
                    return <TodoItem key={idx} item={i} handleIsCompleted={handleIsCompleted} handleIsRemoved={() => handleIsRemoved(idx)} />
                })}
            </div>

            <div className="addItem-container">
                <TextField id="outlined-basic" label="New Item" variant="outlined" value={newItem} onChange={handleChange} />
                <Button variant="text" onClick={handleAddItem}><AddIcon /></Button>
            </div>

        </div>
    )
}   