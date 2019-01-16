import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Img from './Function'
import Buttons from './Button'
import Condition from './Condition'
import List from './List'
import logo from './logo.svg'
import NameForm from './NameForm'
import Calc from "./Calc"
import WelcomeDialog from "./WelcomeDialog"
import SplitPane from "./SplitPane"
import FilterableProductTable from "./FilterableProductTable"
import {PRODUCTS} from "./PRODUCTS"
import RefInputDom from "./RefInputDom"
import NoControllForm from "./NoControllForm"
import Toolbar from "./Toolbar"
import { ThemeContext, themes } from './theme-context-'
import Columns from "./Columns"
import WrapDisplayTheSecret from './WrapDisplayTheSecret'
import MouseTracker from "./MouseTracker"

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    }

	  this.state = {
		  theme: themes.light,
      toggleTheme: this.toggleTheme
	  }
  }

  componentDidMount() {
    console.log(`组件Welcome: `, <Welcome name="test"></Welcome>)
  }

  render() {
    return (
      <div className="App">
          <h4>Welcome</h4>
          <Welcome name="yinfan"/>

          <h4>Img</h4>
          <Img url={logo}/>

          <h4>Buttons</h4>
          <Buttons></Buttons>

          <h4>Condition</h4>
          <Condition/>

          <h4>List</h4>
          <List/>

          <h4>Form</h4>
          <NameForm/>

          <h4>状态提升</h4>
          <Calc/>

          <h4>组合</h4>
          <WelcomeDialog/>
          <SplitPane
            left={
              <Welcome name="组合"/>
            } right={
              <Buttons/>
            }/>

          <h4>React 理念</h4>
          <FilterableProductTable products={PRODUCTS}/>

          <h4>focus</h4>
          <RefInputDom/>

          <h4>非受控组件</h4>
          <NoControllForm/>

          <h4>Context</h4>
          <ThemeContext.Provider value={this.state}>
            <Toolbar changeTheme={this.toggleTheme}/>
          </ThemeContext.Provider>

          <h4>Fragments</h4>
          <table>
            <tbody>
              <tr>
                <Columns/>
              </tr>
            </tbody>
          </table>

          <h4>HOC</h4>
          <WrapDisplayTheSecret></WrapDisplayTheSecret>

          <h4>render props</h4>
          <MouseTracker/>
      </div>
    );
  }
}

export default App;
