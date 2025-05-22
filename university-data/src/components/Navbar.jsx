import {Component} from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
class Navbar extends Component
{
state={clicked :false};
handleClicked=()=>
{
this.setState({clicked: !this.state.clicked})
}
render()
{
return(
<nav className="NavbarItems">
<h2 className="navbar-logo">University</h2>

<div className="menu-icons" onClick={this.handleClicked}>
<i className={this.state.clicked ? "fa fa-times": "fa fa-bars"}></i>
</div>

<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
{MenuItems.map((item,index)=>{
return(
<li key={index}>
<a className="nav-links" href="/"><i className={item.icon}></i>{item.title}</a>
</li>
)
}
)}
</ul>
</nav>
)
}
}
export default Navbar;