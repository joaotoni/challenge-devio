import Logo from "../../assets/Icons/logo.png"
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="flex bg-[#125c12] p-2  ">
            <Link className="" to={"/"}>
                <img src={Logo} alt="" />
            </Link>
            <nav className="absolute top-3 right-4  ">
                <Link className=" text-white rounded {`${card.isEditing? 'bg-cyberyellow':'bg-[#001B42] text-[#FAFAFA]'}`}" to={"/"}>Pedidos</Link>
                <Link className=" text-white px-4 md:px-12 {`${card.isEditing? 'bg-cyberyellow':'bg-[#001B42] text-[#FAFAFA]'}`}" to={"/kitchen"}>Cozinha</Link>
                <Link className=" text-white md:mr-8 {`${card.isEditing? 'bg-cyberyellow':'bg-[#001B42] text-[#FAFAFA]'}`}" to={"/withdrawal"}>Retirada</Link>
            </nav>
        </header>
    )
}