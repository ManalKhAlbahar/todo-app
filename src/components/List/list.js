import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

const List = ({list,toggleComplete,data}) => {
  return (
      <Card className='bp3-elevation-3 card2021' 
       interactive={true} elevation={Elevation.TWO} key={list.id}>
        
        <p>{list.text}</p>
        <p><small>Assigned to: {list.assignee}</small></p>
        <p><small>Difficulty: {list.difficulty}</small></p>
        <Button intent={list.complete?"bp3-button bp3-fill bp3-intent-success":"bp3-button bp3-fill bp3-intent-danger"}
         onClick={() => toggleComplete(list.id)}
         > Complete: {list.complete.toString()}</Button>
      </Card>
  );
};

export default List;