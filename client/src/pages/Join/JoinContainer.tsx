import { connect } from "react-redux";
import { Join } from "./Join";
import { submitJoinData } from "../../redux/publicPagesReducer"


const mapStateToProps = (state:any) => ({joinPage: state.joinPage})


export const JoinContainer = connect(mapStateToProps, {submitJoinData})(Join)