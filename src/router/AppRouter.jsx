import { Route, Routes } from "react-router-dom"
import { About, Contact, Galery, Home, MenuPage, Process } from '../pages';
import { Header, Footer } from "../components";

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/process" element={<Process />}/>
      <Route path="/galery" element={<Galery />}/>
      <Route path="/menu" element={<MenuPage />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
    <Footer />
    </>
  )
}
