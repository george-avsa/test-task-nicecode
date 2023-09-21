import { useState } from 'react';
import Content from './Content';
import PersonControls from './Menu/PersonControls';
import Menu from './Menu/Menu';

function PersonPage() {

    return (
        <div className="person-page">
            <PersonControls></PersonControls>
            <Menu/>
            <Content></Content>
        </div>
    );
}

export default PersonPage;