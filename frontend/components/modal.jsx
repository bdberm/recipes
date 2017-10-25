import React from 'react';
import {connect} from 'react-redux';
import {removeModal} from '../actions/ui_actions';


const Modal = ({visible, component: Component, classStr, remove }) => (
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
    };
  } else {
    return {
      visible: false,
      classStr: "modal-background"
    };
  }
};

const mapDispatchToProps = (dispatch) => (
  {
    remove: (() => dispatch(removeModal())),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
