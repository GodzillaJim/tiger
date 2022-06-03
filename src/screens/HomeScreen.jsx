import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'

function HomeScreen() {
    return (
        <MDBContainer fluid={true}>
            <MDBRow>
                <MDBCol md={3}>1</MDBCol>
                <MDBCol md={6}>2</MDBCol>
                <MDBCol md={3}>3</MDBCol>
                
            </MDBRow>
        </MDBContainer>
    );
}

export default HomeScreen;