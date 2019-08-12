import PropTypes from 'prop-types';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
};

export default propTypes;