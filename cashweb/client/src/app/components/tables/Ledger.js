// REACT MODULES ==================================
import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'

// Import UD components ==========================
import TableComponent from './Table'

//=================================================

const columns = (num) => (
    <Grid.Column key={num}>
        <Image src='https://placehold.it/300x300' />
    </Grid.Column>
);

const Ledger = () => {
    let num = [1,2,3,4,5];
    return (
        <TableComponent />
        //     {num.map(idx => columns(idx))}
        // </Grid>
    );
};

export default Ledger;
