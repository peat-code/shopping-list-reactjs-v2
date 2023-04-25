import Header from "./components/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Wrapper from "./components/shared/Wrapper"
import ShoppingList from "./components/ShoppingList"
import ShoppingStats from "./components/ShoppingStats"
import InputForm from "./components/InputForm"
import About from "./pages/About"
import AboutIconLink from "./components/AboutIconLink"
import { ListProvider } from "./context/ListContext"


function App() {
    return (
        <ListProvider>
            <Router >

                <Wrapper>

                    <Routes>
                        <Route path='/' element={<>
                            <Header  />
                            <InputForm />
                            <ShoppingList />
                            <ShoppingStats />
                        </>}></Route>
                        <Route path='/about' element={<About />} />

                    </Routes>
                    <AboutIconLink />
                </Wrapper>
            </Router >
        </ListProvider>
    )
}

export default App

