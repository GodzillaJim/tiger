import React from 'react'
import {MDBCol, MDBRow} from "mdbreact";
import Button from "@material-ui/core/Button"
import {MailOutline} from "@material-ui/icons";

const ContactForm = () => {
return (
    <form>
        <MDBRow>
            <MDBCol>First Name</MDBCol>
            <MDBCol>Last Name</MDBCol>s
        </MDBRow>
        <MDBRow>
            <MDBCol>Email</MDBCol>
            <MDBCol>Phone</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>Email Address</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>Type Message</MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <Button type={"submit"} startIcon={<MailOutline/>}>Send</Button>
            </MDBCol>
        </MDBRow>
    </form>
)
}
export default ContactForm