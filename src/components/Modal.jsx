import IconoCerrarBtn from '../img/cerrar.svg';

export const Modal = ({ setModal }) => {
    const ocultarModal = () => {
        setModal(false)
    }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
        <img 
        src={IconoCerrarBtn}
        alt='cerrar-modal'
        onClick={ocultarModal}
        />
        </div>
    </div>
  )
}
