import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import SearchInput from '../SearchInput/SearchInput';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import http from '../../utils'

const Countries = () => {
    const [dataCountries, setDataCountries] = useState([])
    const [searchCountries, setSearchCountries] = useState('')

    const getDataCountries = async () => {
        const results = await http.get('/api/countries')
        setDataCountries(results.data.Countries)
    }

    useEffect(() => {
        getDataCountries()
    }, [])

    const filterCountries = dataCountries.filter((item) => {
        return searchCountries !== '' ? item.Country.toLowerCase().includes(searchCountries.toLowerCase()) : item
    })

    return (
        <CountryTable>
            <SearchInput 
                onSearch={filterCountries} 
                setSearch={setSearchCountries} 
                inputName='Search your country' 
                inputType='Enter your country'
            />
        
            <Table responsive>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Country</th>
                        <th className='cases'>Cases</th>
                        <th className='recovered'>Recovered</th>
                        <th className='deaths'>Deaths</th>
                        <th>Today's Cases</th>
                        <th>Today's Deaths</th>
                        <th>Today's Recovered</th>
                    </tr>
                </thead>
                {
                    filterCountries.map((data) => {
                        return (
                            <tbody key={data.ID}>
                                <tr>
                                    <td><img alt='flag' src={`https://countryflagsapi.com/png/${data.Slug}`} style={{'width': '50px', 'height': '33px'}}></img></td>
                                    <td>{data.Country}</td>
                                    <td><NumberFormat
                                            value={data.TotalConfirmed}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.TotalRecovered}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.TotalDeaths}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.NewConfirmed}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.NewDeaths}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                    <td><NumberFormat
                                            value={data.NewRecovered}
                                            displayType={'text'}
                                            thousandSeparator={true} /></td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </CountryTable>
    );
}

export default Countries;

const CountryTable = styled.div`
    margin: 20px;

    .cases {
        color: #6c757d;
    }

    .recovered {
        color: #198754;
    }

    .deaths {
        color: #dc3545;
    }
`