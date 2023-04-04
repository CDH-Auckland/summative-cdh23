import React from 'react'
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";

function Categoryicon(props) {

    const categoryiconHandler = () => {
        props.categoryiconclick(props.name);
    }
    return (
        <div className={props.name === props.selected || props.selected === "all" ? 'browseitems_category browseitems_category--selected' : 'browseitems_category'}
            onClick={categoryiconHandler}>
            <div className={props.name === props.selected || props.selected === "all" ? 'browseitems_categoryicon browseitems_categoryicon--selected' : 'browseitems_categoryicon'}>
                <BallotOutlinedIcon fontSize='large' />
            </div>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Categoryicon