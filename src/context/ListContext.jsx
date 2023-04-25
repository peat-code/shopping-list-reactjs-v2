import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const ListContext = createContext()


export const ListProvider = ({ children }) => {
    const [list, setList] = useState([
        {
            id: 1,
            name: "eggs",
            qty: 1
        }, {
            id: 2,
            name: "Oranges",
            qty: 4,
        },
        {
            id: 3,
            name: "Mangoes",
            qty: 1,
        }
    ])
    const [listEdit,setListEdit] = useState({
        item: {},
        edit:false
    })
    const addItem = (newItem) => {
        newItem.id = uuidv4()
        setList([newItem, ...list])
    }
    const deleteItem = function (id) {
        if (window.confirm("Remove the item?")) {
            setList(list.filter((item) => item.id !== id))
        }
    }
    const renameItem = (item) => {
        setListEdit({item,edit:true})
    }
    const updateItem =(id,updItem) =>{
        setList(list.map((item)=> item.id === id ? {...item, ...updItem} :item))
    }
    const addQty = (id)=>{

    }
    return <ListContext.Provider 
    value={{ listData: list,
        listEdit:listEdit,
        deleteItem :deleteItem,
        addItem:addItem, 
        renameItem:renameItem,
        updateItem:updateItem
        }}>{children} </ListContext.Provider>
}


export default ListContext