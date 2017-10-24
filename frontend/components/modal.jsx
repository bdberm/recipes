import React from 'react';
import {connect} from 'react-redux';

const Modal = ({visible, component: Component, classStr}) => (
  <div className={classStr}>
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
      classStr: "modal-background modal-visible"
    }
  } else {
    return {
      visible: false,
      classStr: "modal-background"
    };
  }
};

export default connect(mapStateToProps, null)(Modal);
