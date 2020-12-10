import React from 'react';
import { Avatar } from '@assenti/rui-components';
import picture from './picture.png';

function Logo() {
    return (
        <>
            <Avatar
                iconSize="50%"
                img={picture} />
        </>
    )
}

export default Logo