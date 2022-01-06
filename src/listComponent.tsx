import React from "react";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import "./styles/List.css";

interface Props {
  list: string[];
  deleteItem: (index: number) => void;
}

const List: React.FC<Props> = (props) => {
  const deleteItem = (index: number) => {
    props.deleteItem(index);
  };

  return (
    <div className="cardContainer">
      {props.list.map((item: string, index: number) => {
        return (
          <Card key={index}>
            <CardContent className="items" id={index.toString()}>
              {item}
            </CardContent>
            <CardActions>
              <Button onClick={() => deleteItem(index)}>
                <LocalFireDepartmentIcon />
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
