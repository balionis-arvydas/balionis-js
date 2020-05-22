import { getTasks } from "../../redux/selectors";

export const mapStateToProps = state => ({
    tasks: getTasks(state)
});

//export const mapDispatchToProps = {
//};
