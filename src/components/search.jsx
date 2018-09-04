import React from 'react'
import { connect } from 'react-redux'
import { searchAction } from '../actions/actions'
import { Input, Grid} from 'semantic-ui-react'

const Search = ({search}) => {

    return (
        <Grid centered>
            <Grid.Row>
                <input
                    size="big"
                    icon="search"
                    type="text"
                    placeholder="Search client"
                    onChange={(event) => search(event.target.value.toLowerCase())}
                />
            </Grid.Row>
        </Grid>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {search: (string) => dispatch(searchAction(string))}
};

export default connect(null, mapDispatchToProps)(Search);