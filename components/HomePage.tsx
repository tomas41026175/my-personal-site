
interface HomePageProps {
    content:String
}

const HomePage = ({content}:HomePageProps) =>{
    return (
        <h1 className="text-5xl">{content}</h1>
    )
}

//另一種介面宣告方式
// const HomePage = ({title}:{title:String}) =>{
//     return (
//         <h1>{title}</h1>
//     )
// }

export default HomePage