import React, { Component } from 'react';

class ZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
  }
  handleSubmitZipcode = () => {
    this.props.onSubmitZipCode(this.state.zipcode);
    this.setState(() => {
      return {
        zipcode: ''
      };
    });
  };

  handleUpdateZipcode = e => {
    const zipcode = e.target.value;
    this.setState(() => {
      return {
        zipcode
      };
    });
  };
  render() {
    return (
      <div
        className="zipcode-container"
        style={{ flexDirection: this.props.direction }}
      >
        <input
          className="form-control"
          onChange={this.handleUpdateZipcode}
          placeholder="New York, New York"
          type="text"
          value={this.state.zipcode}
        />
        <button
          type="button"
          style={{ margin: 10 }}
          className="btn btn-success"
          onClick={this.handleSubmitZipcode}
        >
          Get Weather
        </button>
      </div>
    );
  }
}

export default ZipCode;
