import { useEffect, useState } from 'react'
import CardTotal from '../Components/Card/CardTotal'
import styled from 'styled-components';
import City from '../Components/City/City';
import http from '../utils'

const AboutVN = () => {
    const [dataVN, setDataVN] = useState([])

    const dataSummary = dataVN.total?.internal

    const getDataVN = async () => {
        const results = await http.get('/api/internal')
        setDataVN(results.data)
    }

    useEffect(() => {
        getDataVN()
    }, [])

    const summaryVN = [
        {
            title: 'Total Cases',
            count: dataSummary?.cases,
            type: 'confirmed',
            hex: 'secondary'
        },
        {
            title: 'Total Deaths',
            count: dataSummary?.death,
            type: 'deaths',
            hex: 'danger'
        },
        {
            title: 'Total Recovered',
            count: dataSummary?.recovered,
            type: 'recovered',
            hex: 'success'
        }
    ]

    return (
        <PagesAboutVN>
            <CardTotal data={summaryVN} />

            <City dataLocations={dataVN?.locations} />
        </PagesAboutVN>
    )
}

const PagesAboutVN = styled.div`
    margin: 20px 20px;

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

export default AboutVN