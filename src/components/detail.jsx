import React from 'react';
import { connect } from 'react-redux';
import { Header, Item, Image, Grid, Divider, Segment } from 'semantic-ui-react';

const Details = ({client}) => {
    if (!client) {
        return <Header>Not found</Header>
    }

    return (
        <Segment>
        <Grid columns={2}>
            <Grid.Column width={4}>
                <Image circular size="medium" src={client.general.avatar} alt=""/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Item>
                    <Item.Header as="h2">{client.general.firstName + ' ' + client.general.lastName}</Item.Header>
                    <Item.Meta as="h4">{client.job.title + ' - ' + client.job.company}</Item.Meta>
                </Item>
                <Divider />
                <div>Contacts:</div>
                <div>
                    <div>{'email: ' + client.contact.email}</div>
                    <div>{'phone: ' + client.contact.phone}</div>
                </div>
                <div>
                    <div>Address:</div>
                    <div>
                        <div>{'street: ' + client.address.street}</div>
                        <div>{'city: ' + client.address.city}</div>
                        <div>{'zipCode: ' + client.address.zipCode}</div>
                        <div>{'country: ' + client.address.country}</div>
                    </div>
                </div>
            </Grid.Column>

        </Grid>
        </Segment>
    );
};

const mapStateToProps = (state) => {
    return {client: state.extendedViewState}
};

export default connect(mapStateToProps)(Details);