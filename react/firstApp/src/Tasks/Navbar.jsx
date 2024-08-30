import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    const logo = "../src/assets/logo.png"
    return (
        <>
            <div className="flex items-center box-border justify-evenly w-full bg-cyan-300 h-[64px]">
                <div className="logo">
                <img className='w-[50px]'src={logo} alt="" />
                </div>
                <div className='items-center flex '>
                <input className='rounded-lg p-[10px] h-[50px] w-[550px] border-solid border-x-[2px] border-t-[2px] border-black font-serif' type="text" placeholder="Search anything you want" />
                <button className='ml-3 w-15 h-[50px] flex items-center p-2 rounded border-solid border-x-2 border-t-2 border-black bg-slate-100 hover:bg-green-500 hover:text-white'>
                    <IoMdSearch size={24}/>
                    </button>
                </div>
                    <CgProfile size={50}/>

            </div>

        </>
    )
}

export default Navbar
