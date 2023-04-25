import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
const ListContext = createContext()


export const ListProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [list, setList] = useState([])
    const [listEdit, setListEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => { fetchList() }, [])

    const fetchList = async () => {
        const response = await fetch(`/items?sort=id&_order=asc`)
        const data = await response.json()
        setList(data)
        setIsLoading(false)
    }

    const addItem = async (newItem) => {
        const response = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( newItem)
        })

        const data = await response.json()

        setList([ ...list,data])
    }
    const deleteItem = async function (id) {
        if (window.confirm("Remove the item?")) {
            await fetch(`/items/${id}`,{method:'DELETE'})


            setList(list.filter((item) => item.id !== id))
        }
    }
    const renameItem = (item) => {
        setListEdit({ item, edit: true })
    }
    const updateItem = async (id, updItem) => {
        const response = await fetch(`/items/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setList(list.map((item) => item.id === id ? { ...item, ...data } : item))
    }
    const addQty = (id) => {

    }
    return <ListContext.Provider
        value={{
            listData: list,
            listEdit: listEdit,
            isLoading: isLoading,
            deleteItem: deleteItem,
            addItem: addItem,
            renameItem: renameItem,
            updateItem: updateItem
        }}>{children} </ListContext.Provider>
}


export default ListContext