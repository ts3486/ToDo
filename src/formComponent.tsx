import React, { useState } from "react";
import List from "./listComponent";
import { TextField, Button, Box } from "@mui/material";
import "./styles/Form.css";

interface Props {
  title: string;
}

const Form: React.FC<Props> = (props) => {
  const [list, setList] = useState([] as string[]);
  const [item, setItem] = useState("");

  const handleDelete = (index: number) => {
    console.log(list);
    console.log("delete index " + index);
    const newList = list.filter((_, _index) => _index !== index);
    console.log(newList);
    setList(newList);
  };

  return (
    <div className="formContainer">
      <h3>{props.title}</h3>
      <Box className="form">
        <div className="inputContainer">
          <TextField value={item} onChange={(e: any) => setItem(e.target.value)} placeholder="Type task..." />
          <Button
            onClick={() => {
              list.push(item);
              setList(list);
              setItem("");
              console.log(list);
            }}>
            ADD
          </Button>
        </div>
        <List list={list} deleteItem={(index) => handleDelete(index)} />
      </Box>
    </div>
  );
};

export default Form;
