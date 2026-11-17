import logo from '../assets/images/logo.png'
import searchIcon from '../assets/icons/search-icon.svg'
import heart from '../assets/icons/heart.svg'
import cartIcon from '../assets/icons/cart-icon.svg'

function Navbar() {
  return (
    <>
      <div className='top-bar'>
        <div className="container-fluid">
          <span className='new-badge'>NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>

      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <a href="/">
            <img src={logo} alt="ShopKart" className='shopkart-logo' />
          </a>

          <div className='dropdown catogory-dropdown'>
            <button className='category-btn dropdown-toggle' type='button' data-bs-toggle="dropdown" aria-expanded="false">All Categories</button>

            <ul className='dropdown-menu'>
              <li><a className='dropdown-item' href="#">Electronics</a></li>
              <li><a className='dropdown-item' href="#">Fashion</a></li>
              <li><a className='dropdown-item' href="#">Home & Kitchen</a></li>
              <li><a className='dropdown-item' href="#">Beauty & Personal Care</a></li>
              <li><a className='dropdown-item' href="#">Sports & Fitness</a></li>
              <li><a className='dropdown-item' href="#">Books & Stationery</a></li>
            </ul>
          </div>

          {/* Mobile Toggle  */}
          <button className='navbar-toggler' type='button' data-bs-toggle="collapse"  data-bs-target="#shopKartNavbar"><span className='navbar-toggler-icon'></span></button>

          {/* Navigation */}
          <div className='collapse navbar-collapse' id='shopKartNavbar'>
            <ul className='navbar-nav main-nav'>
              <li className='nav-item'><a className='nav-link' href="#">Home</a></li>
              <li className='nav-item'><a className='nav-link' href="#">Products</a></li>
              <li className='nav-item'><a className='nav-link' href="#">Deals</a></li>
              <li className='nav-item'><a className='nav-link' href="#">About Us</a></li>
              <li className='nav-item'><a className='nav-link' href="#">Contact</a></li>
            </ul>

            {/* Search  */}
            <div className='search-box'>
              <input type="text" placeholder='Search for the products...'/>
              <button className='search-btn'>
                <img src={searchIcon} alt="Search" />
              </button>
            </div>

            <div className='nav-actions'>
              <img src={heart} alt="Wishlist" className='nav-icon' />

              <div className='cart-wrapper'>
                <img src={cartIcon} alt="Cart" className='nav-icon' /><span className='cart-count'>3</span>
              </div>

            </div>

          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
