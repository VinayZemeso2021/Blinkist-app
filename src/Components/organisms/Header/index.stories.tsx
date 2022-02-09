import {ComponentMeta, ComponentStory} from '@storybook/react';
import Header from '.';
import {BrowserRouter as Router} from 'react-router-dom';

const HeaderComponent = {
    title : 'Organisms/Header',
    component: Header
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header>  = (args:any) => {
    return (<Router>
        <Header {...args} />
    </Router>
    )
}
Template.args = {
    url: '/assets/logo.png',
}


export default HeaderComponent;