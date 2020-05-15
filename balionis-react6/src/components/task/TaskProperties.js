import { removeTask } from "../../redux/actions";

export const mapStateToProps = (state, ownProps) => ({
    ...ownProps
});

export const mapDispatchToProps = {
    removeTask
};
