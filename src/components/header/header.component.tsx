import { BsCart3 } from "react-icons/bs";

import "./header.styles.css";

const Header = () => {
  const CartIcon = BsCart3 as any;

  return (
    <div className="header-container">
      <h2 className="header-title">CLUB CLOTHING</h2>
      <div className="header-items">
        <div className="header-items">
          <div className="header-item">Explorar</div>
          <div className="header-item">Login</div>
          <div className="header-item">Criar conta</div>
          <div className="header-item">
            <CartIcon size={25} />
            <p style={{ marginLeft: 5 }}>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
