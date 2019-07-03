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
      term: '',
      items: [],
    }
  }

  onSubmit = event => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    })
  }

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>{' '}
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
