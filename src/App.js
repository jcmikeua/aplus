import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Content from './components/Content'
import NavCardGroup from './components/NavCardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headerGraphic from './images/headergraphic.png'
import CourseDescription from './components/CourseDescription';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navitem: 'none',
      content: 'none'
    }
    this.callBackFunction = this.callBackFunction.bind(this)
    this.selectContent = this.selectContent.bind(this)
  }

  callBackFunction(navData){
    this.setState({navitem: navData})
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  selectContent(e){
    this.setState({content: e.currentTarget.textContent, navitem: 'none'});
  }


  render(){

    let nav;
    let content;
    let style1 = 'contentSelector1';
    let style2 = 'contentSelector2';
    if (this.state.content === '1001'){
      nav = <NavCardGroup parentCallBack = {this.callBackFunction} navSelection = {this.state.navitem}/>;
      content = <Content navitem={this.state.navitem} width = {this.state.windowWidth}/>
      style1 = 'contentSelected1' ;
    }
    else if (this.state.content === '1002'){
      nav = <div>the 1002 nav</div>
      content = <div>The 1002 content</div>
      style2 = 'contentSelected2';
    }
    else{
      nav = <img style={{width: '100%'}} src={headerGraphic} alt="headerimage"/>;
      content = <CourseDescription/>
    }

    return (
      <React.Fragment>
        <Row>
            <Col className={style1} onClick={this.selectContent}>1001</Col>
            <Col className={style2} onClick={this.selectContent}>1002</Col>
        </Row>
        <div>&nbsp;</div>
        {nav}
        {content}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
