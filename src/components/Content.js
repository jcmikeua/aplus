import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'
import { mobileDevices, networking, hardware, virtualization, troubleshooting } from '../data/1001'

class Content extends React.Component {
    constructor(){
        super();
        this.determineGradient = this.determineGradient.bind(this)
    }


    determineGradient(item){
        let gradientType = 'myCardImage';

        if (this.props.width >= 992){
            if (item.key%3===1){gradientType = 'gradient1'}
            else if (item.key%3===2){gradientType = 'gradient2'}
            else {gradientType = 'gradient3'}
        }
        else if (this.props.width < 992 && this.props.width >= 768){
            if (item.key%2 === 1){gradientType = 'gradientLeft'}
            else { gradientType = 'gradientRight'}
        }
        else {gradientType = 'myCardImage'}

        return(gradientType)
    }

    render(){

        const mobileDeviceLessonCards = mobileDevices.map((item)=>{
            return(
            <Col xs={12} md={6} lg={4} className="mt-3" key={item.key}>
                <Card className="myCard">
                    <Card.Img variant="top" className={this.determineGradient(item)}/>
                    <Card.Body>
                        <Card.Title style={{fontSize: '14pt', position: 'absolute', top: '20px', color: 'white'}}>{item.title}</Card.Title>
                        <Card.Text style={{fontSize: '12pt'}}>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={item.teacherNotes}>Teacher Notes</a><br/>
                            <a href={item.studentNotes}>Student Notes</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )})

        const networkingLessonCards = networking.map((item)=>(
            <Col xs={12} md={6} lg={4} className="mt-3" key={item.key}>
                <Card className="myCard">
                    <Card.Img variant="top" className={this.determineGradient(item)}/>
                    <Card.Body>
                        <Card.Title style={{fontSize: '14pt', position: 'absolute', top: '20px', color: 'white'}}>{item.title}</Card.Title>
                        <Card.Text style={{fontSize: '12pt'}}>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={item.teacherNotes}>Teacher Notes</a><br/>
                            <a href={item.studentNotes}>Student Notes</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))

        const hardwareLessonCards = hardware.map((item)=>(
            <Col xs={12} md={6} lg={4} className="mt-3" key={item.key}>
                <Card className="myCard">
                    <Card.Img variant="top" className={this.determineGradient(item)}/>
                    <Card.Body>
                        <Card.Title style={{fontSize: '14pt', position: 'absolute', top: '20px', color: 'white'}}>{item.title}</Card.Title>
                        <Card.Text style={{fontSize: '12pt'}}>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={item.teacherNotes}>Teacher Notes</a><br/>
                            <a href={item.studentNotes}>Student Notes</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))

        const virtualizationLessonCards = virtualization.map((item)=>(
            <Col xs={12} md={6} lg={4} className="mt-3" key={item.key}>
                <Card className="myCard">
                    <Card.Img variant="top" className={this.determineGradient(item)}/>
                    <Card.Body>
                        <Card.Title style={{fontSize: '14pt', position: 'absolute', top: '20px', color: 'white'}}>{item.title}</Card.Title>
                        <Card.Text style={{fontSize: '12pt'}}>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={item.teacherNotes}>Teacher Notes</a><br/>
                            <a href={item.studentNotes}>Student Notes</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))

        const troubleshootingLessonCards = troubleshooting.map((item)=>(
            <Col xs={12} md={6} lg={4} className="mt-3" key={item.key}>
                <Card className="myCard">
                    <Card.Img variant="top" className={this.determineGradient(item)}/>
                    <Card.Body>
                        <Card.Title style={{fontSize: '14pt', position: 'absolute', top: '20px', color: 'white'}}>{item.title}</Card.Title>
                        <Card.Text style={{fontSize: '12pt'}}>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={item.teacherNotes}>Teacher Notes</a><br/>
                            <a href={item.studentNotes}>Student Notes</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))

        if (this.props.navitem === 'navitem1'){return(<Row>{mobileDeviceLessonCards}</Row>)}
        else if (this.props.navitem === 'navitem2'){return(<Row>{networkingLessonCards}</Row>)}
        else if (this.props.navitem === 'navitem3'){return(<Row>{hardwareLessonCards}</Row>)}
        else if (this.props.navitem === 'navitem4'){return(<Row>{virtualizationLessonCards}</Row>)}
        else if (this.props.navitem === 'navitem5'){return(<Row>{troubleshootingLessonCards}</Row>)}
        else {return(<p style={{textAlign: 'center'}}>Choose a topic to view it's lessons.</p>)}
    }
}

export default Content;