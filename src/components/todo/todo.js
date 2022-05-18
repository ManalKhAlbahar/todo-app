import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import List from '../List/list'
import { v4 as uuid } from 'uuid';
import { contextSettings } from '../../context/setting'
import Pagination from '../Pagination/pagination'
const ToDo = () => {

  const settings = useContext(contextSettings)
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [incomplete, list]);

  const lastItem = currentPage * settings.itemsPerPage;
  const firstItem = lastItem - settings.itemsPerPage;
  const filteredList = list.filter(item => settings.showCompleted ? item : !item.complete)
  const itemsInPage = filteredList.slice(firstItem, lastItem);

  const changePage = (page) => {
    setCurrentPage(page);
  }
  const changeItems = (e) => {
    settings.updateItemsPerPage(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container bp3-elevation-3">
        <br />
        <h2>Add To Do Item</h2>
        <label>
          <span><b>To Do Item</b></span><br />
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>
        <label>
          <span><b>Assigned To</b></span><br />
          <input className=" bp3-fill bp3-intent-primary" onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>
        <label>
          <span><b>Difficulty</b></span><br />
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={10} name="difficulty" />
        </label>
        <label>
          <button type="submit" className="bp3-button bp3-fill bp3-intent-primary">Add Item</button>
        </label>
        <label>
          <button type="button" className={settings.showCompleted ? "bp3-button  bp3-intent-success bp3-fill" : "bp3-button  bp3-intent-danger bp3-fill"}
            onClick={settings.updateShow}>{settings.showCompleted ? 'Hide Completed' : 'Show Completed'} </button>
        </label>
        <br />
        <select className="form-select form-select-sm" aria-label="Default select example" onChange={(e) => changeItems(e)}>
          <option defaultValue value={settings.itemsPerPage}>{settings.itemsPerPage}</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
        </select>
        <br />
        <h5>To Do List: {incomplete} items pending</h5>
      </form>

      <div className="cardsContainer" >
        {itemsInPage.map(item => (
          <List list={item} toggleComplete={toggleComplete} deleteItem={deleteItem} />))}
        <br />
        <Pagination itemsPerPage={settings.itemsPerPage} totalItems={filteredList.length}
          currentPage={currentPage} changePage={changePage} />
      </div>
    </>
  );
};

export default ToDo;