import { Link } from "react-router";

const Header = () =>{
    return(
        <header className="header flex justify-between align-items">
            <Link to="/">
                <div className="logo-wrapper">
                    <img className="logo" src="/logo.png" alt="Logo" />
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="grey">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="flex">
                <li className="mr-30">
                    <img width={18} height={18} src="cart.svg" alt="Корзина" />
                    <span>2300 руб.</span>
                </li>
                <li className="mr-30">
                    <Link to="/favorites">
                        <img width={18} height={18} src="heart.svg" alt="Закладки" />
                        <span>Закладки</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="user.svg" alt="Пользователь" />
                        <span>Профиль</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;