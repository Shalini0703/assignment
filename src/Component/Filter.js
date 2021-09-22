import React from 'react'

function Filter(props) {
    return (
        <div>
            <h3>Filters</h3>
            <h4>Product categories</h4>
            {
                props.categories.map((item,index) => {
                    return (
                        <div key = {index}>
                            <input type = "checkbox" name = {item} value = {item} onChange = {props.change}/> {item}
                        </div>
                    )
                })
            }
            <h4>Brand</h4>
            {
                props.brand.map((item,index) => {
                    return (
                        <div key = {index}>
                            <input type = "checkbox" name = {item} value = {item} onChange = {props.change}/> {item}
                        </div>
                    )
                })
            }
            <h4>Gender</h4>
            {
                props.gender.map((item,index) => {
                    return (
                        <div key = {index}>
                            <input type = "checkbox" name = {item} value = {item} onChange = {props.change}/> {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Filter
