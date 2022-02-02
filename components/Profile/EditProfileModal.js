import SenzaModal from '../MuiModal/SenzaModal';

const EditProfileModal = ({ open, handleClose }) => {
  return (
    <SenzaModal
      handleClose={handleClose}
      title="Edit Profile"
      open={open === 'profile'}
    >
      Add Profile Modal
    </SenzaModal>
  );
};

export default EditProfileModal;
