import logo from '../logo.png'
import './styles.css'

const Navbar = ()=> {
  return (
    <header>
      <div className="w-screen flex h-[80px] sticky top-0">
        <div className="logo basis-[60%] sm:basis-[30%] md:basis-[30%]  flex justify-start items-center">
          <img src={logo} alt="logo" className='w-[70px] md:w-[100px] mr-2' style={{height: 'auto', marginLeft: 10}}/>
          <span className='font-[Montserrat] text-[20px] md:text-[30px] font-bold text-[white]'>Cypher</span>
        </div>
        <div className="list hidden sm:flex sm:basis-[50%] md:basis-[50%] md:flex justify-center items-center">
          <ul className="flex flex-row  w-[100%] justify-around text-white ">
            <li>Market</li>
            <li>Exchange</li>
            <li>Tutorials</li>
            <li>Wallet</li>
          </ul>
        </div>
        <div className="btn basis-[40%] sm:basis-[20%] md:basis-[20%] flex justify-end items-center">
          <button className="butn rounded-full p-2 text-[white] w-20 mr-2 font-semibold">LOGIN</button>
        </div>
      </div>
    </header>
  )
};

export default Navbar;