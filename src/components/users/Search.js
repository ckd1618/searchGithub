import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: '',
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(e.target.value);
    this.setState({ text: '' });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            placeholder='Search Github Users'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button className="btn btn-dark btn-block">Submit</button>
        </form>
      </div>
    )
  }
}

export default Search

