import React from 'react';
import '../App.css';
import mobiledevices from '../images/A+ Thing-06.png'
import networking from '../images/A+ Thing-07.png'
import hardware from '../images/A+ Thing-08.png'
import virtualization from '../images/A+ Thing-09.png'
import troubleshooting from '../images/A+ Thing-10.png'

class Navigation extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(data){
        this.props.parentCallBack(data)
    }
    
    render(){
        return(
            <div className="navcontainer">
                <ul className="nav">
                    <li className="navitem" id="navitem1" onClick = {this.handleClick.bind(this,'navitem1')}><img src={mobiledevices} alt="Mobile Devices"/></li>
                    <li className="navitem" id="navitem2" onClick = {this.handleClick.bind(this,'navitem2')}><img src={networking} alt="Networking"/></li>
                    <li className="navitem" id="navitem3" onClick = {this.handleClick.bind(this,'navitem3')}><img src={hardware} alt="Hardware"/></li>
                    <li className="navitem" id="navitem4" onClick = {this.handleClick.bind(this,'navitem4')}><img src={virtualization} alt="Virtualization"/></li>
                    <li className="navitem" id="navitem5" onClick = {this.handleClick.bind(this,'navitem5')}><img src={troubleshooting} alt="Troubleshooting"/></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;