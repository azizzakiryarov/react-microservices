import PropTypes from 'prop-types';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    issues: PropTypes.arrayOf(PropTypes.shape({
      idIssue: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      handleAdd: PropTypes.func.isRequired,
      handleRemove: PropTypes.func.isRequired,
      handleUpdate: PropTypes.func.isRequired,
    })),
  })),
  handleAddUser: PropTypes.func.isRequired,
};


export default propTypes;