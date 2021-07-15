import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mDTP = dispatch => ({
    //function goes here for filter
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(null, mDTP)(Search)