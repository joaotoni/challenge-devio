import Logo from "../../assets/Icons/logo.png"

export default function Header(){
    return(
        <header className="flex bg-[#125c12] ">
            <div className="">
                <img src={Logo} alt="" />
            </div>
            <nav className="absolute top-2 right-3 ">
                <button className=" text-white rounded {`${card.isEditing? 'bg-cyberyellow':'bg-[#001B42] text-[#FAFAFA]'}`}">Pedidos</button>
                <button className=" text-white px-4 {`${card.isEditing? 'bg-cyberyellow':'bg-[#001B42] text-[#FAFAFA]'}`}">Cozinha</button>
                <button className="  text-white {`${card.isEditing? 'bg-cyberyellow':'bg-[#001B42] text-[#FAFAFA]'}`}">Retirada</button>
            </nav>
        </header>
    )
}