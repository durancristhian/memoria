import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTokens, setCardAsShown } from '../actions';
import Card from '../components/Card';

class Juego extends Component {
  static propTypes = {
    getTokens: PropTypes.func.isRequired,
    isTokenActive: PropTypes.func.isRequired,
    setCardAsShown: PropTypes.func.isRequired,
    tokens: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired
      })
    ).isRequired
  };

  componentDidMount() {
    const { getTokens } = this.props;

    getTokens();
  }

  render() {
    const { isTokenActive, setCardAsShown, tokens } = this.props;

    return (
      <div className="nested-list-reset">
        <ul className="flex flex-wrap mv0">
          {tokens.map((token, index) => (
            <Card
              shown={isTokenActive(index)}
              onCardClick={setCardAsShown}
              index={index}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <img
                src={`${token.imageURL}?text=${token.id}`}
                alt={`Token ${index}`}
                className="db"
              />
            </Card>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTokens: () => dispatch(getTokens()),
  setCardAsShown: index => dispatch(setCardAsShown(index))
});

const mapStateToProps = state => ({
  isTokenActive: index =>
    !!state.game.activeTokens.find(tokenIndex => tokenIndex === index),
  tokens: state.game.tokens
});

const connectedJuego = connect(
  mapStateToProps,
  mapDispatchToProps
)(Juego);

export default connectedJuego;
