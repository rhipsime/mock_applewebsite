import { appleImg, bagImg, searchImg } from "../utils"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
          <img src={appleImg} alt="Apple" width={14} height={18} />  
          <div>
            {['Phones','Macbooks','Tablets'].map((nav,i)=>(
                <div key={i}>
                    {nav}
                </div>))}
                <div>
                  <img src={searchImg} alt="search" width={18}
                  height={18} /> 
                   <img src={bagImg} alt="bag" width={18}
                  height={18} /> 
                </div>
          </div>
        </nav>
    </header>
  )
}

export default Navbar