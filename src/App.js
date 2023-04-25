import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Wrapper from "./components/shared/Wrapper"
import { useState } from "react"
import ListData from "./data/ListData"
import ShoppingList from "./components/ShoppingList"
import ShoppingStats from "./components/ShoppingStats"
import InputForm from "./components/InputForm"
import { v4 as uuidv4 } from 'uuid'
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"

function App() {
    const [list, setList] = useState(ListData)

    const deleteItem = function (id) {
        if (window.confirm("Remove the item?")) {
            setList(list.filter((item) => item.id !== id))
        }
    }
    const addItem = (newItem) => {
        newItem.id = uuidv4()
        setList([newItem, ...list])
    }
    const addQty = function (id) {
        setList(...list,)
    }

    return (
       
            <Router >

            <Wrapper>
                
                <Routes>
                    <Route  path='/' element={ <>
                        <Header day="Monday" />
                            <InputForm handleAdd={addItem} />
                            <ShoppingList listData={list} handleDeleteApp={deleteItem} />

                            <ShoppingStats list={list} />
                        </>}></Route>

                    <Route path='/about' element={<About />} />

                </Routes>
                <AboutIconLink/>
            </Wrapper>
        </Router >
       
    )
}

export default App

