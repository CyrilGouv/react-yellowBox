import '../styles/components/Modal.css'


const Modal = () => {
  return (
    <div className='Modal modal--show'>
        <div className="modal__content">
            <div className="modal__header">
                <h3>Let's talk now!</h3>
                <button className="modal--close">
                    <span>Close</span>
                    <span></span>
                </button>
            </div>
            <div className="modal__body">
                <a href="mailto:hello@cyrilgouv.com" target="_blank" rel='noopener noreferer'>
                    hello@cyrilgouv.com
                </a>
            </div>
        </div>
    </div>
  )
}

export default Modal