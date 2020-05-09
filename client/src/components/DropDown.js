import React from "react";
import { Dropdown } from 'react-bootstrap';

const DropDown = props => {
    return(
        <Dropdown  style={props.style}>
            <Dropdown.Toggle style={props.style}  variant="secondary" id="dropdown-basic">
                filter by department
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {props.options.map((x) => (<Dropdown.Item onClick={(e) => props.handleDropDownChange(e.target.innerText)}>{x}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropDown;