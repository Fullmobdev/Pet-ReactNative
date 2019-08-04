import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import QuizListItem from './QuizListItem';

const List = styled.ul`
  padding: 0;
  margin: 0 0 25px;
  list-style: none;
`;
const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;

class QuizList extends React.Component {
  state = { result: {} };

  onOptionToggle = ({ value, checked }) => {
    const nextState = {...this.state};
    const { result: prevResult } = this.state;

    if (this.props.multiple) {
      nextState.result = {
        ...prevResult,
        [value]: checked,
      };
    } else if (prevResult[value] !== true) {
      nextState.result = {
        [value]: checked,
      };
    }

    this.setState(nextState, () => {
      const isEmpty = Object.values(this.state.result).filter(el => el === true).length !== 0;

      this.props.toggleNext(isEmpty);
    });
  }

  render() {
    const { id, options }= this.props;
    const { result } = this.state;

    return (
      <List>
        { options.map(o => {
          const checked = result[o.value];

          return (
            <ListItem key={o.value}>
              <QuizListItem
                o={o}
                id={id}
                checked={checked}
                onToggle={this.onOptionToggle}
              />
            </ListItem>
          );
        })}
      </List>
    );
  };
}

QuizList.propTypes = {
  defaultValue: PropTypes.number,
  multiple: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    labelSlim: PropTypes.string,
  }),).isRequired,
  toggleNext: PropTypes.func.isRequired,
};

QuizList.defaultValue = {
  defaultValue: undefined,
}

export default QuizList;