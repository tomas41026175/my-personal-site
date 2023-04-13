import NavItem from "./NavItem"


const NavBar = () => {

    return (
        <nav className="fixed w-screen nav-bar flex justify-center items-center px-32 py-5 mx-auto sm:bg-transparent sm:justify-end">
            {/* <a href="#home" className="tracking-widest text-white font-semibold text-2xl hover:text-black">LOGO</a> */}
            <div className="flex sm:block justify-around left-0 mx-auto sm:mr-0 w-screen sm:w-auto fixed bottom-0 bg-amber-800/90 sm:bg-transparent sm:static">
                <NavItem btnClass="py-2 px-4 sm:px-6 text-center text-white outline-none hover:text-amber-800 sm:hover:text-black md:hover:bg-transparent hover:bg-white focus:bg-white focus:text-black" btnLink="#home" btnName="Home"></NavItem>
                <NavItem btnClass="py-2 px-4 sm:px-6 text-center text-white outline-none hover:text-amber-800 sm:hover:text-black md:hover:bg-transparent hover:bg-white focus:bg-white focus:text-black" btnLink="#About" btnName="About"></NavItem>
                <NavItem btnClass="py-2 px-4 sm:px-6 text-center text-white outline-none hover:text-amber-800 sm:hover:text-black md:hover:bg-transparent hover:bg-white focus:bg-white focus:text-black" btnLink="#Experience" btnName="Experience"></NavItem>
                <NavItem btnClass="py-2 px-4 sm:px-6 text-center text-white outline-none hover:text-amber-800 sm:hover:text-black md:hover:bg-transparent hover:bg-white focus:bg-white focus:text-black" btnLink="#Skill" btnName="Skill"></NavItem>
                <NavItem btnClass="py-2 px-4 sm:px-6 text-center text-white outline-none hover:text-amber-800 sm:hover:text-black md:hover:bg-transparent hover:bg-white focus:bg-white focus:text-black" btnLink="#Project" btnName="Project"></NavItem>
            </div>
        </nav>
    )
}


export default NavBar