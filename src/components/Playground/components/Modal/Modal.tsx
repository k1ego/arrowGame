// import styles from "./Modal.module.css"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessEndGame: boolean;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props;

	const handleClose = () => {
		setIsShowModal(false)
	}

  return <div>
		<h3>Modal</h3>
		<button onClick={handleClose}>Start New Game</button>
	</div>;
};

export default Modal;
