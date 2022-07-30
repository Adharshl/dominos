import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CartContent from './cartContent'

const Cart = () => {
    return (
        <div>
            <Card raised={true}
                style={{
                    width: '22%',
                    height: '60%',
                    position: 'fixed',
                    padding: '10px',
                    marginBottom: '1.5rem',
                    cursor: 'pointer',
                    overflowY: 'auto'
                }}

            >
                <CartContent />
                <div className="flex justify-between p-7"><span>Subtotal</span>
                    <span>$987</span></div>
                <Button variant="contained" fullWidth={true} disableElevation>Checkout</Button>
            </Card>
        </div>

    )
}

export default Cart;




