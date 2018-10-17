import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserName } from '../actions';
import Button from '../components/Button';
import InputText from '../components/InputText';

class Home extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    setUserName: PropTypes.func.isRequired
  };

  state = {
    inputValue: ''
  };

  onChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  onSubmit = event => {
    const { history, setUserName } = this.props;
    const { inputValue } = this.state;

    event.preventDefault();

    setUserName(inputValue);

    history.push('juego');
  };

  render() {
    const { inputValue } = this.state;
    return (
      <React.Fragment>
        <div className="pv3 tc">
          <form onSubmit={this.onSubmit}>
            <InputText
              name="name"
              placeholder="Nombre"
              onChange={this.onChange}
              value={inputValue}
            />
            <Button
              onClick={this.onSubmit}
              className="ml3"
              disabled={!inputValue}
            >
              <span>Jugar</span>
            </Button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserName: userName => dispatch(setUserName(userName))
});

const ConnectedHome = connect(
  null,
  mapDispatchToProps
)(Home);

export default withRouter(ConnectedHome);
