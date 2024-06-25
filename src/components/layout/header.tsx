import Image from "next/image";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

export const Header = ({ rightChild }: { rightChild?: React.ReactNode }) => {
  return (
    <header className="pc-header">
      <div className="header-wrapper">
        {/* [Mobile Media Block] start  */}
        <div className="me-auto pc-mob-drp">
          <ul className="list-unstyled">
            <li className="pc-h-item header-mobile-collapse">
              <a
                href="#"
                className="pc-head-link head-link-secondary ms-0"
                id="sidebar-hide"
              >
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="pc-h-item pc-sidebar-popup">
              <a
                href="#"
                className="pc-head-link head-link-secondary ms-0"
                id="mobile-collapse"
              >
                <i className="ti ti-menu-2"></i>
              </a>
            </li>
            <li className="dropdown pc-h-item d-inline-flex d-md-none">
              <a
                className="pc-head-link head-link-secondary dropdown-toggle arrow-none m-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ti ti-search"></i>
              </a>
              <div className="dropdown-menu pc-h-dropdown drp-search">
                <form className="px-3">
                  <div className="form-group mb-0 d-flex align-items-center">
                    <i data-feather="search"></i>
                    <input
                      type="search"
                      className="form-control border-0 shadow-none"
                      placeholder="Search here. . ."
                    />
                  </div>
                </form>
              </div>
            </li>
            <li className="pc-h-item d-none d-md-inline-flex">
              <form className="header-search">
                <i data-feather="search" className="icon-search"></i>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search here. . ."
                />
                <button className="btn btn-light-secondary btn-search">
                  <i className="ti ti-adjustments-horizontal"></i>
                </button>
              </form>
            </li>
          </ul>
        </div>

        <div
          className={
            "w-25 rounded-3 d-flex align-items-center justify-content-between"
          }
        >
          {rightChild ? rightChild : <></>}
        </div>
      </div>
    </header>
  );
};
