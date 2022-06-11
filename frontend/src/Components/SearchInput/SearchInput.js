import styled from 'styled-components'

const SearchInput = props => {
    return (
        <SearchStyle>
            <form 
                className='form-search'
            >
                <label className='label'>{props.inputName}</label>
                <input 
                    type='text'
                    placeholder={props.inputType}
                    className='input'
                    onChange={e => {
                        props.setSearch(e.target.value)
                    }}
                />
            </form>
        </SearchStyle>
    )
}

const SearchStyle = styled.div`
    .form-search {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    .label {
        font-weight: bold;
        font-size: 22px;
    }

    .input {
        border: none;
        background-color: #e0ebeb;
        border-radius: 4px;
        height: 40px;
        padding-left: 10px;
    }
`

export default SearchInput