import React from 'react';
import '../App.css';
import mobiledevices from '../images/A+ Thing-06.png'
import networking from '../images/A+ Thing-07.png'
import hardware from '../images/A+ Thing-08.png'
import virtualization from '../images/A+ Thing-09.png'
import troubleshooting from '../images/A+ Thing-10.png'
import CardGroup from'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'


class NavCardGroup extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(data){
        this.props.parentCallBack(data)
    }
    
    render(){
        let navSelection = this.props.navSelection;
        let id = ["myCardGroupImage1","myCardGroupImage2","myCardGroupImage3","myCardGroupImage4","myCardGroupImage5"]

        if (navSelection === 'navitem1'){
            id = ["myCardGroupImage1","inactive2","inactive3","inactive4","inactive5"]
        }
        if (navSelection === 'navitem2'){
            id = ["inactive1","myCardGroupImage2","inactive3","inactive4","inactive5"]
        }
        if (navSelection === 'navitem3'){
            id = ["inactive1","inactive2","myCardGroupImage3","inactive4","inactive5"]
        }
        if (navSelection === 'navitem4'){
            id = ["inactive1","inactive2","inactive3","myCardGroupImage4","inactive5"]
        }
        if (navSelection === 'navitem5'){
            id = ["inactive1","inactive2","inactive3","inactive4","myCardGroupImage5"]
        }

        return(
            <CardGroup className="myCardGroup">
                <Card className="myCardGroupCard" onClick = {this.handleClick.bind(this,'navitem1')}>
                    <Card.Img variant="top" className="myCardGroupImage" id={id[0]} src={mobiledevices} alt="Mobile Devices"/>
                </Card>
                <Card className="myCardGroupCard" onClick = {this.handleClick.bind(this,'navitem2')}>
                    <Card.Img variant="top" className="myCardGroupImage" id={id[1]}src={networking} alt="Networking"/>
                </Card>
                <Card className="myCardGroupCard" onClick = {this.handleClick.bind(this,'navitem3')}>
                    <Card.Img variant="top" className="myCardGroupImage" id={id[2]} src={hardware} alt="Hardware"/>
                </Card>
                <Card className="myCardGroupCard" onClick = {this.handleClick.bind(this,'navitem4')}>
                    <Card.Img variant="top" className="myCardGroupImage" id={id[3]} src={virtualization} alt="Virtualization"/>
                </Card>
                <Card className="myCardGroupCard" onClick = {this.handleClick.bind(this,'navitem5')}>
                    <Card.Img variant="top" className="myCardGroupImage" id={id[4]} src={troubleshooting} alt="Troubleshooting"/>
                </Card>
            </CardGroup>
        )
    }
}

export default NavCardGroup;