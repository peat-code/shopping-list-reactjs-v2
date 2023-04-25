import React from 'react'
import { useState } from 'react'
import Button from './shared/Button'

function InputForm({handleAdd}) {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
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
                qty : 1
            }
            handleAdd(newItem)
            setText('')
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