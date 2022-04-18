import { useGlobalContext } from '../context'

import '../styles/components/Modal.css'


const Modal = () => {
    const { closeModal, isModalOpen } = useGlobalContext()

    return (
        <div className={`${isModalOpen ? 'Modal modal--show' : 'Modal'}`}>
            <div className="modal__content">
                <div className="modal__header">
                    <h3>Let's talk now!</h3>
                    <button onClick={ closeModal } className="modal--close">
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