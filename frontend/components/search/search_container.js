import { connect } from 'react-redux';
import { clearFilters, updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mDTP = dispatch => ({
    //function goes here for filter
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearFilters: () => dispatch(clearFilters())
})

export default connect(null, mDTP)(Search)