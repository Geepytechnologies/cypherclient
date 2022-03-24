import { Navbar,Transactions,Footer,Welcome,Services } from "./components";
import "./App.css"
import { BottomNav } from "./components/BottomNav";
const App = ()=> {
  return (
    <div className="min-h-screen">
      <div className="gradient">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      <div className="md:hidden sm:hidden lg:hidden sl:hidden">
       <BottomNav />
      </div>
    </div>
  )
}

export default App
