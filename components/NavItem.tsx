import Link from "next/link";

interface navBtnProps { 
    btnName: string, 
    btnLink: string,
    btnClass:string,
}

const NavItem = (props: navBtnProps) => {
    return (
        <>
            <Link href={props.btnLink} className={props.btnClass}>{props.btnName}</Link>
        </>
    )
}

export default NavItem