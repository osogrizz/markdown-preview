import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Remarkable from 'remarkable'
// import remarkable-emoji from 'remarkable-emoji' 





export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textarea: ' ``` \n code block \n ```  \n \n --- \n   `code` \n \n  --- \n # Hello World \n ## Hello World \n ### Hello World \n --- \n [Im an inline-style link](https://www.google.com) \n \n ---  \n * list item \n \n --- \n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1") \n \n --- \n __bold__ \n \n --- \n > Block quote'
    }
    this.handleChange = this.handleChange.bind(this)
    this.setMarkdown = this.setMarkdown.bind(this)
  }
  handleChange = (e) => {
    e.preventDefault()
      this.setState({
        textarea: e.target.value
        
      })
    }

    setMarkdown = () => {
      let md = new Remarkable({
        html: true,
        xhtmlOut: true,
        linkify: true,
        typographer: true,
        breaks: true
      })
      return {
        __html: md.render(this.state.textarea)
      }
    }


    render() {
    const { textarea } = this.state
    // <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"/>
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <textarea name="" id="editor" cols="60" rows="10" 
              style={{ backgroundColor: '#222', color: '#fff'}}
              value={this.state.textarea}
              onChange={this.handleChange}>
        </textarea>
        <div id="preview"
          dangerouslySetInnerHTML={this.setMarkdown()}
        >
        </div>
      </Layout>
    )
  }
}



