import { useState } from "react"
import NumberFormat from "react-number-format"
import { Table } from "react-bootstrap"
import styled from "styled-components"
import SearchInput from "../SearchInput/SearchInput"

const City = (props) => {
    const [searchLocations, setSearchDataLocations] = useState('')

    const filterDataLocations = props.dataLocations?.filter((item) => {
        return searchLocations !== '' ? item.name.toLowerCase().includes(searchLocations.toLowerCase()) : item
    })

    return (
        <CityStyle>
            <SearchInput 
                onSearch={filterDataLocations} 
                setSearch={setSearchDataLocations} 
                inputName='Search your city'
                inputType='Enter your city'
            />

            <Table responsive>
                <thead>
                    <tr>
                        <th>City</th>
                        <th className='cases'>Cases</th>
                        <th className='recovered'>Recovered</th>
                        <th className='deaths'>Deaths</th>
                        <th>Today's Cases</th>
                    </tr>
                </thead>
                {
                    filterDataLocations?.map((data, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{data.name}</td>
                                    <td><NumberFormat
                                            value={data.cases}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.recovered}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.death}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.casesToday}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                </tr>
                            </tbody>
                        )}
                    )
                }
            </Table>
        </CityStyle>
    )
}

const CityStyle = styled.div`
    .form {
        margin-bottom: 20px;
    }

    .label {
        font-weight: bold;
        font-size: 22px;
    }
`

export default City