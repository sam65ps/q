 
export default function Navbar() {
  return(
    <>
    <nav className={`${style.navbar} navbar-expand-lg fixed-top p-0 pt-1 pb-1`}>
  <div className="container">
    <Link className={`${style.btn} btn`} to="#">تسجيل الدخول</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Home About Services Contact */}
      <ul className={`${style.navbarNav} ms-auto mb-2 mb-lg-0`}> 
        <li className={`${style.navItem}`}>
          <a className={`${style.nav-link}`} href="#services">تواصل معنا </a>
        </li>
        <li className={`${style.navItem}`}>
          <a className={`${style.navLink}`} href="#clients">المدارس المضافة </a>
        </li>
        <li className={`${style.navItem}`}>
          <Link className={`${style.navink} ${style.active}`}  to="#الرئيسية">الرئيسية</Link>
        </li>
        <li className="logo">
          <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_387)">
              <path d="M55 15.7055L15 51V37.1881M5 15.7055L45 51V37.1881M49.12 6.69659L47.4725 3.62891C46.5625 1.93183 46.1075 1.08182 45.51 1.00535C44.915 0.925937 44.2475 1.73183 42.915 3.34361C38.61 8.54955 34.305 7.77895 30 17.1408C25.695 7.77895 21.39 8.54955 17.085 3.34361C15.7525 1.73183 15.085 0.925937 14.49 1.00535C13.8925 1.08182 13.4375 1.93183 12.5275 3.62891L10.8825 6.69659C10.245 7.87895 9.9275 8.47308 10.015 9.09661C10.1 9.72015 10.5575 10.1466 11.475 10.9996L26.93 25.4056C28.4075 26.7821 29.1475 27.4703 30 27.4703C30.8525 27.4703 31.5925 26.7821 33.07 25.4056L48.525 10.9996C49.4425 10.1466 49.9 9.72015 49.985 9.09661C50.0725 8.47308 49.755 7.87895 49.12 6.69659Z" stroke="#DAD3BE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter id="filter0_d_2_387" x="0.25" y="0.249756" width="59.5" height="59.5002" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_387" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_387" result="shape" />
              </filter>
            </defs>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

  )}