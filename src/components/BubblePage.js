import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from '../helpers/axiosWithAuth';

import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';


const BubblePage = (props) => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
useEffect(() => {  
  axiosWithAuth()
  fetchColorService(setColors);
}, [editing]);

  const toggleEdit = (value) => {
    setEditing(value);
  };
//2. Complete saveEdit, deleteColor functions
  const saveEdit = (editColor) => {
    editColorService(editColor);
    fetchColorService(setColors);
    props.history.push('/bubble');
    toggleEdit(false);
  };

  const deleteColor = (colorToDelete) => {
    deleteColorService(colorToDelete.id);
    fetchColorService(setColors);
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;
