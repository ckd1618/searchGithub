import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  }

  onSubmit = e => {
    console.log(e)
    e.preventDefault();
    // this.props.searchUsers(e.target.value);
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }

  onChange = e => {
    console.log(e);
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

        {this.props.userLen && <button onClick={this.props.clearUsers} className="btn btn-light btn-block">Clear</button>}

      </div>

    )
  }
}

Search.propTypes = {
  userLen: PropTypes.bool.isRequired
}

export default Search

