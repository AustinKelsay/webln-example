import Footer from "./Footer/index.js"
import Sidebar from "./Sidebar/index.js"

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  )
}