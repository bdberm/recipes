import React from 'react';
import {Transition} from 'react-transition-group';
import merge from 'lodash/merge';


const duration = 300;

const formDefaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  display: "none"
};

const formTransitionStyles = {
  entering: {opacity:0, display: "block"},
  entered: {opacity: 1, display: "block"},
};

export const FormFade = ({ in: inProp, component: Component }) => {

  return (<Transition in={inProp} timeout={duration}>
    {(state) => {

      const _style = merge({}, formDefaultStyle, formTransitionStyles[state]);
        return (<div style={_style}>
          {Component}
        </div>);
    }}
  </Transition>
  );
};

export class CommentFade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {in: false};

    setTimeout((() => {
      this.setState({in: true});
    }),1);
  }



  render() {
    const {component: Component } = this.props;

    return (<Transition in={this.state.in} timeout={duration}>
      {(state) => {

        const _style = merge({}, formDefaultStyle, formTransitionStyles[state]);
          return (<div style={_style}>
            {Component}
          </div>);
      }}
    </Transition>
    );

  }
}


const hoverDuration = 1;

const ratingHoverDefaultStyle = {
  display: "none"
};

const ratingHoverTransitionStyle = {
  entered: {display: "block",
    position: "absolute",
    left: -35,
    bottom: -20,
    width: "170px",
    height: "80px",
    border: "1px solid #F5F5F5",
    background: "white",
    zIndex: -1,
  }
};

export const RatingHover = ({ in: inProp, component: Component }) => {

  return (<Transition in={inProp} timeout={hoverDuration}>
    {(state) => {

      const _style = merge({}, ratingHoverDefaultStyle, ratingHoverTransitionStyle[state]);

        return (<div style={_style}>
          {Component}
        </div>);
    }}
  </Transition>
  );
};
