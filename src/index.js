import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const List = props => (
  <div>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </div>
)

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      items: [],
    }
  }

  onChange = event => {
    this.setState({ text: event.target.value })
  }

  onSubmit = event => {
    console.log(event)
    console.log(this.state)
    event.preventDefault()
    this.setState({
      text: '',
      items: [...this.state.items, this.state.text],
    })
  }

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button>Submit</button>
        </form>{' '}
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
