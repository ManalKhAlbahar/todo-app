import React, { useState, useEffect } from 'react'

export const contextSettings = React.createContext()

const Settings = (props) => {
  const [show, setShow] = useState(true)
  const [itemsPerPage, setItemsPerPage] = useState(2)

  useEffect(() => {
    const storageShow = JSON.parse(localStorage.getItem('show'))
    const storageItemsPerPage = JSON.parse(localStorage.getItem('itemsPerPage'))
    if (storageShow ===false) { setShow(false) }else{setShow(true)}
    if (storageItemsPerPage) { setItemsPerPage(storageItemsPerPage) }
  }, []);
  useEffect(() => {
    localStorage.setItem('show', JSON.stringify(show));
    localStorage.setItem("itemsPerPage", JSON.stringify(itemsPerPage));
  }, [show, itemsPerPage]);
  const state = {
    itemsPerPage: itemsPerPage,
    sort: 'asc',
    showCompleted: show,
    updateShow: function () { setShow(!show) },
    updateItemsPerPage: function (itemsPerPagex) { setItemsPerPage(itemsPerPagex) }
  }
  return (
    <contextSettings.Provider value={state}>
      {props.children}
    </contextSettings.Provider>
  )
}

export default Settings