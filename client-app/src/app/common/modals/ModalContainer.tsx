import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import { Description, Dialog, DialogPanel } from '@headlessui/react';

function ModalContainer() {
  const { modalStore } = useStore();
  return (
    <>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        open={modalStore.modal.open}
        onClose={modalStore.closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-70">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <Description>{modalStore.modal.body}</Description>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default observer(ModalContainer);
