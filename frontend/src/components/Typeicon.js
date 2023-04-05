import React from 'react'


function Typeicon(props) {

    const typeiconHandler = () => {
        props.typeiconclick(props.name);
    }

    return (
        <div className={props.name === props.selected || props.selected === "all" ? 'browseitems_category browseitems_category--selected' : 'browseitems_category'}
            onClick={typeiconHandler}>
            <div className={props.name === props.selected || props.selected === "all" ? 'browseitems_categoryicon browseitems_categoryicon--selected' : 'browseitems_categoryicon'}>
                {props.name === props.selected || props.selected === "all" ?
                    <img className="browseitems__typeicon" src={require(`../images/${props.img_url}.png`)} alt='' /> :
                    <img className="browseitems__typeicon" src={require(`../images/${props.img_url}-unselected.png`)} alt='' />
                }

            </div>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Typeicon