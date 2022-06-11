import { useEffect, useState } from 'react';
import http from '../utils';
import Countries from '../Components/Countries/Countries';
import styled from 'styled-components';
import CardTotal from '../Components/Card/CardTotal';

const Home = () => {
    const [latest, setLatest] = useState([]);

    const getDataWorld = async () => {
        const results = await http.get('/api/world')
        setLatest(results.data)
    }

    useEffect(() => {
        getDataWorld()
    }, []);

    const date = new Date(latest.created)
    const lastUpdated = date.toString().slice(0, 25)

    const summary = [
        {
            title: 'Total Cases',
            count: latest.totalConfirmed,
            type: 'confirmed',
            hex: 'secondary',
            updated: lastUpdated
        },
        {
            title: 'Total Deaths',
            count: latest.totalDeaths,
            type: 'deaths',
            hex: 'danger',
            updated: lastUpdated
        },
        {
            title: 'Total Recovered',
            count: latest.totalRecovered,
            type: 'recovered',
            hex: 'success',
            updated: lastUpdated
        }
    ]

    return (
        <TotalCard>
            <CardTotal data={summary} />
            
            <Countries />
        </TotalCard>
    );
}

export default Home;

const TotalCard = styled.div `
    margin: 20px 20px;
`