import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import * as React from 'react';
import Data from './data.json'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux';



const CartContent = () => {

    const count = useSelector((state) => state.counter)
    var cartItem = count.cartItems;




    return (
        <div>
            <Box
                style={{
                    position: 'relative',
                    overflowY: 'auto'
                }}
            >
                {
                    cartItem.map((node, index) => {
                        return (
                            <div key={index + 1}>
                                <Card>
                                    <div className='flex p-7'>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                height: '4vw',
                                                width: '6vh',
                                            }}
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
                                    </div>
                                    <CardActions
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
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
                                                    backgroundRepeat: 'no-repeat'
                                                }}

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
                                            >{node.cartTotalQuantity}</span>
                                            <div
                                                style={{
                                                    minWidth: '0.3em',
                                                    minHeight: '0.3em',
                                                    backgroundSize: '100% 100%',
                                                    margin: '0px 0.3rem',
                                                    width: '1.5rem',
                                                    height: '0.9rem',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                                onClick={() => console.log('hi')}><AddIcon /></div>
                                        </div>
                                        <span>$367</span>
                                    </CardActions>
                                </Card>
                                <Divider variant="middle" />
                            </div>
                        )
                    })
                }


            </Box>
        </div>
    )
}

export default CartContent;

{/* <Card>
<div className='flex p-7'>
    <CardMedia
        component="img"
        sx={{
            height: '4vw',
            width: '6vh',
        }}
        image='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=60'
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
</div>
<CardActions
    sx={{
        display: 'flex',
        justifyContent: 'space-between',
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
                backgroundRepeat: 'no-repeat'
            }}
            
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
        ></span>
        <div
            style={{
                minWidth: '0.3em',
                minHeight: '0.3em',
                backgroundSize: '100% 100%',
                margin: '0px 0.3rem',
                width: '1.5rem',
                height: '0.9rem',
                backgroundRepeat: 'no-repeat'
            }}
            onClick={() => console.log('hi')}><AddIcon /></div>
    </div>
    <span>$367</span>
</CardActions>
</Card> */}