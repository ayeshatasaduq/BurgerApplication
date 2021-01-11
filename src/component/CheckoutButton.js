import React, { useState , useContext } from 'react';
import { Button, Dialog, Icon } from '@assenti/rui-components';

function Checkout() {
    const [dialog, setDialog] = useState(false);
    
    const actionImitation = async () => {
        return new Promise(async (resolve) => {
            setTimeout(() => {
                resolve()
            }, 1500)
            window.location.reload(false);
        })
    }

    return (
        <>
            <Button color="info" name="Checkout" icon={<Icon name="rocket" />} onClick={() => setDialog(true)} />

            <Dialog
                onCancel={() => setDialog(false)}
                onConfirm={actionImitation}
                icon="alert"
                iconColor="cadetblue"
                titleColor="cadetblue"
                visible={dialog}
                title="Checkout"
                description="Are you sure you want to confirm the order?" />
      

       
        </>
    )
}


export default Checkout