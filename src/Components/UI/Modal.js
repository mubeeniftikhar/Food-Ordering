import classes from './MOdal.module.css';
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop} />
};

const ModelOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};
const portalElemt = document.getElementById('Overlay');

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal( <Backdrop onClose = {props.onClose}/>, portalElemt)}
        {ReactDOM.createPortal( <ModelOverlay> {props.children} </ModelOverlay> , portalElemt)}

    </Fragment>
};

export default Modal;