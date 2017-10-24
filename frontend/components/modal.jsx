import React from 'react';
import {connect} from 'react-redux';

const Modal = ({visible, component: Component}) => (
  <div className="modal-background">
    <div className="modal-content">
      {visible ? <Component /> : null}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  if(state.ui.modal.component) {
    return {
      visible: true,
      component: state.ui.modal.component,
    }
  } else {
    return {visible: false};
  }
};

export default connect(mapStateToProps, null)(Modal);
