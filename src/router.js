import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Post from "./components/Post"

const router = () => {
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="post/:id" element={<Post />}></Route>
    </Routes>
}

export default router