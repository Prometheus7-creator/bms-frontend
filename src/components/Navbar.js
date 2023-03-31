
const Navbar = ({userName, loggedIn}) =>{
    return (
        (!loggedIn)?
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-12 mx-auto">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notification</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
            </div>
        </div>:null
        // <nav className="navbar">
        //     <div className="nav-logo">
        //         Hi, {userName}
        //     </div>
        //     <ul className="nav-links">
        //         <li><a href="#">Profile</a></li>
        //         <li><a href="#">Notification</a></li>
        //         <li><a href="#">Logout</a></li>
        //         {/* <li><a href="#">Signup</a></li> */}
        //     </ul>
        // </nav>: null
    );
}

export default Navbar;