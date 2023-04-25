import React from 'react'
import { useState,useEffect } from 'react'
import Button from './shared/Button'
import {useContext} from 'react'
import ListContext from '../context/ListContext'
import ListItem from './ListItem'
function InputForm() {
    
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const {addItem,listEdit,updateItem} = useContext(ListContext)
    const [qty,setQty] = useState(1)
    useEffect(()=>{
        //console.log("Use Effect Check.")
        if(listEdit.edit === true){
            setBtnDisabled(false)
            setText(listEdit.item.name)
            setQty(listEdit.item.qty)
        }
    }, [listEdit])

    const handleTextChange = (e) => {
        setText(e.target.value)
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length<=3){
            setMessage("item should be more than 3 characters")
            setBtnDisabled(true)
        }
        else {
            setMessage(null)
            setBtnDisabled(false)
        }
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length >3){
            const newItem ={
                name : text,
                qty : qty
            }
            if(listEdit.edit === true)
                updateItem(listEdit.item.id, newItem)
            else {
                addItem(newItem)
            }setText('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Item to shopping list.</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Add Item' value={text} />
                <Button type='submit' isDisabled={btnDisabled}>ADD</Button>
            </div>
            {message && <div class="message">{message}</div>}
        </form>
    )
}

export default InputForm