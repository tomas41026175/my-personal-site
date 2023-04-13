import Link from 'next/link'
import NavBar from './NavBar'
// import bg from '../public/images/homepage-bg.jpeg'
// import TopSectionStyle from '../styles/topSectionStyle.module.css'

interface HomePageProps {
    // content: string,
    // pageClass: string
    h1Children: string,
    h2Children: string,
}

const TopSection = (props: HomePageProps) => {
    return (
        <div id='home' className="bg-cover bg-no-repeat bg-right sm:bg-center md:h-screen">
            <NavBar></NavBar>
            <div className="w-full sm:w-7/12 mx-auto">
                <div className="text-block pt-20 pb-20 text-center flex flex-col items-center sm:items-end">
                    <h1 className="text-white text-start py-10 px-10 text-3xl">{props.h1Children}</h1>
                    <h2 className="text-white text-start mb-10 py-10 px-10 text-2xl">{props.h2Children}</h2>
                    <a href="#About" className="mt-10 py-3 px-4 w-40 font-semibold text-white bg-amber-800 border-4 rounded sm:bg-transparent hover:border-amber-800 hover:text-amber-800 hover:bg-white sm:hover:bg-amber-800">View more</a>
                </div>
            </div>
        </div>
    )
}

//另一種介面宣告方式
// const HomePage = ({title}:{title:String}) =>{
//     return (
//         <h1>{title}</h1>
//     )
// }

export default TopSection