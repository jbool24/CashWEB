// REACT MODULES ==================================
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// Import components ==============================
import MessageBar from './components/Messages';
import Ledger from './components/tables/Ledger';

//=================================================
const ContentComponent = () => (
    <Container fluid>
        <Switch>
            <Route path='/content' render={() => lorem}></Route>
            <Route path='/account' component={Ledger}></Route>
        </Switch>
    </Container>
);

const lorem = <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>;


const ContentArea = () => (
    <div className='mx-auto'>
        <MessageBar title="KNOCKIT" message="Yo was up" floating color='green'/>
        <ContentComponent/>
    </div>
);
export default ContentArea;
