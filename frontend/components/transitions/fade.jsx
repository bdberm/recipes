import {Transition} from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: {opacity:0},
  entered: {opacity: 1}
};

const Fade = ({ in: inProp, component: Component }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <Component />
      </div>
    )}
  </Transition>
);

export default Fade;
