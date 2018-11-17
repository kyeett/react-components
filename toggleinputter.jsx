import React, { Component } from "react";

class ToggleInputter extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.state = {
      selected: false
    };

    this.handleDblClick = this.handleDblClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  render() {
    var style = !this.state.selected ? { background: "transparent" } : {};

    var label;
    if (this.props.label) {
      label = <label for="exampleInputEmail1">{this.props.label}</label>;
    }
    return (
      <div className="form-group">
        {label}
        <input
          id="exampleInputEmail1"
          className="form-control"
          type="text"
          onDoubleClick={this.handleDblClick}
          onBlur={this.handleBlur}
          style={style}
          ref={c => {
            this.input = c;
          }}
          placeholder={this.props.default ? this.props.default : ""}
          readOnly={true}
        />
        <small id="emailHelp" className="form-text text-muted">
          Double click to change.
        </small>
      </div>
    );
  }

  handleBlur() {
    console.log("blur");
    this.input.readOnly = true;
    this.setState({
      selected: false
    });

    if (this.props.onUpdate) {
      this.props.onUpdate();
    }
  }

  handleDblClick() {
    console.log("dbl!");
    if (this.input != null) {
      this.input.readOnly = "";
      this.input.select();
      console.log(this.input);
      this.setState({
        selected: true
      });
    }
  }
}
export default ToggleInputter;
