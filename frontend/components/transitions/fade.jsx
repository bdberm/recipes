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
