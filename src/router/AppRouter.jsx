import { Route, Routes } from "react-router-dom"
import { About, Contact, Galery, Home, Menu, Process } from '../pages';
import { Navbar, Footer } from "../components";

export const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/process" element={<Process />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/galery" element={<Galery />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
    </>
  )
}
