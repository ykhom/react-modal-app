import Button from '../Buttons/Button';

import styles from './Modal.module.css'


const Modal = (props) => {

  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setOpenModal(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{props.title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => props.setOpenModal(false)}>
            X
          </button>
          <div className={styles.modalContent}>
            {props.message}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button  onClick={() => props.setOpenModal(false)}>
                Okay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;