import React from 'react';

const classes = {
    searchContainer: {
        position: 'relative'
    },
    input: {
        paddingRight: '30px'
    },
    clearContainer: {
        position: 'absolute',
        top: 0,
        right: '10px',
        height: '100%',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
    }
}

const SearchField = ({ value, setValue, nightMode }) => {
    return <div>
        <div style={classes.searchContainer}>
            <input
                value={value} onChange={(event) => setValue(event)} placeholder={'GitHub Username'}
                style={classes.input} className="form-control"
            />
            {value.length ?
                <div style={classes.clearContainer}>
                    <span onClick={() => setValue({ target: { value: '' } })} className={nightMode ? 'text-dark' : ''}>
                        &#10005;
                </span>
                </div> : null}
        </div>

    </div>
}

export default SearchField;