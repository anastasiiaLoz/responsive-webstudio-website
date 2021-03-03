console.log('123');

(() => {
    const refs = {
    openModalBurgerBtn: document.querySelector('[data-modal-burger-open]'),
    closeModalBurgerBtn: document.querySelector('[data-modal-burger-close]'),
    modalBurger: document.querySelector('[data-modal-burger]'),

    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBurgerBtn.addEventListener('click', toggleModalBurger);
    refs.closeModalBurgerBtn.addEventListener('click', toggleModalBurger);

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModalBurger() {
    refs.modalBurger.classList.toggle('is-hidden');
    }

    function toggleModal() {
  
      refs.modal.classList.toggle('is-hidden');
      }
  })();
