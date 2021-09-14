import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile, setLoading } from '../../../redux/profile-reducer';
import Profile from './Profile';
import Preloader from '../../common/Preloader/Preloader';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // Костыль hardcode для отсутствующего ID
        if (!userId) {
            userId = 2
        }
        this.props.setLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setLoading(false);
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader /> : null}
                <Profile profileData={this.props.profileData} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        isLoading: state.profilePage.isLoading
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, setLoading })(withUrlDataContainerComponent);