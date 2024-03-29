import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import Auth from '../Auth/auth'

const List = ({list,toggleComplete,deleteItem}) => {
  return (
    <Auth capability="read">
      <Card className='bp3-elevation-3 card2021' 
       interactive={true} elevation={Elevation.TWO} key={list.id}>
           <Auth capability="delete">
         <Button intent="bp3-button  bp3-intent-danger bp3-small" className='delete'
         onClick={() => deleteItem(list.id)}
         >✘</Button></Auth>
         <p style={{color:"Blue"}}>{list.text}</p>
        <p><small>Assigned to: {list.assignee}</small></p>
        <p><small>Difficulty: {list.difficulty}</small></p>
        <Button intent={list.complete?"bp3-button bp3-intent-success":" bp3-button bp3-intent-warning"}
         onClick={() => toggleComplete(list.id)}
         > Complete : {list.complete? '✔':'❌'}</Button>
      </Card>
      </Auth>
  );
};

export default List;