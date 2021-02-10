import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
    return (
      <div
        className="Product__option">
        {this.props.option.values.map((value) => {
          return (
            <button
              className="button_option"
              name={this.props.option.name} 
              key={this.props.option.name}
              onClick={this.props.handleOptionChange}
              value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</button>
          )
        })}
      </div>
    );
  }
}

export default VariantSelector;
