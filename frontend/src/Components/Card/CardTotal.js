import NumberFormat from 'react-number-format'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components'

const CardTotal = props => {
    return (
        <CardStyle>
            <CardGroup>
                {props.data.map((data, index) => {
                    return (
                        <Card bg={data.hex} className='card' key={index}>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    <NumberFormat
                                        value={data.count}
                                        displayType={'text'}
                                        thousandSeparator={true} />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>Last updated {data.updated ?? 'dont know :('}</small>
                            </Card.Footer>
                        </Card>
                    )
                })}
            </CardGroup>
        </CardStyle>
    )
}

const CardStyle = styled.div`
    .card {
        border-radius: 10px !important;
        margin: 10px 10px !important;
        color: #FFFFFF;
    }
`

export default CardTotal
