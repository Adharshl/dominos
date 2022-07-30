import React from 'react';
import Data from './data.json'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import * as Actions from './store/actions'
import { useSelector, useDispatch } from 'react-redux';




export default function ContentCard() {


    const dispatch = useDispatch();

    const count = useSelector((state) => state.counter)
    var cartItem = count.cartItems;


    // console.log(cartItem)
    // const handleCount = (id) =>{
    //     if(cartItem == undefined){
    //         console.log(67)
    //     } else {
    //         console.log('lo')
    //     }
    // }
    React.useEffect(() => {
        dispatch(Actions.store(Data))
    }, [])

    const handleAdd = (val) =>{
        dispatch(Actions.increment(val))
    }

    return (

        <div>
            <Divider textAlign="left">EVERYDAY VALUE</Divider>
            <div

                style={{
                    display: 'flex',
                    width: '90%',
                    flexWrap: 'wrap',
                    padding: '2rem',
                    justifyContent: 'space-between'


                }}>
                {
                    Data.map((node) => {
                        return (
                            <Card
                                raised={true}
                                sx={{
                                    maxWidth: 345,
                                    marginTop: '3rem'
                                }}
                                key={node.id}
                            >
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={node.img}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {node.items}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {node.itemDetails}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        padding: '1rem'
                                    }}
                                >


                                        <div
                                            style={{
                                                border: '1px solid rgb(186, 186, 186)',
                                                display: 'flex',
                                                alignItems: 'baseline'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    minWidth: '0.3em',
                                                    minHeight: '0.3em',
                                                    backgroundSize: '100% 100%',
                                                    margin: '0px 0.3rem',
                                                    width: '1.5rem',
                                                    height: '0.9rem',
                                                    backgroundRepeat: 'no-repeat',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => dispatch(Actions.decrement())}
                                            >
                                                <RemoveIcon /></div>
                                            <span
                                                style={{
                                                    borderLeft: '1px solid rgb(186, 186, 186)',
                                                    borderRight: '1px solid rgb(186, 186, 186)',
                                                    padding: ' 0.32rem 0.8rem',
                                                    fontWeight: '600',
                                                    borderTopRightRadius: '0px',
                                                    borderBottomRightRadius: ' 0px'
                                                }}
                                            >
                                                {node.id}
                                                
                                                </span>
                                            <div
                                                style={{
                                                    minWidth: '0.3em',
                                                    minHeight: '0.3em',
                                                    backgroundSize: '100% 100%',
                                                    margin: '0px 0.3rem',
                                                    width: '1.5rem',
                                                    height: '0.9rem',
                                                    backgroundRepeat: 'no-repeat',
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() =>handleAdd(node)}
                                            >
                                                <AddIcon />
                                            </div>
                                        </div>
                                </CardActions>
                            </Card>

                        )
                    })
                }
            </div>
        </div>

    );
}
