import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                // id= 0,
        title="Model S"
        description= "Order Online for Touchless Delivery"
        image= "model-s.jpg"
        leftBtnText="Custum order"
        rightBtnText="Existance inventory"
        // range= "390",
        // time= "1.99",
        // topSpeed= "200",
        // peakPower= "1,020"
            />
            <Section
                title="Model Y"
        description= "Order Online for Touchless Delivery"
        image= "model-y.jpg"
        leftBtnText="Custum order"
        rightBtnText="Existance inventory"
            />
            <Section
                title="Model X"
        description= "Order Online for Touchless Delivery"
        image= "model-x.jpg"
        leftBtnText="Custum order"
        rightBtnText="Existance inventory"
            />
            <Section
                title="Model 3"
        description= "Order Online for Touchless Delivery"
        image= "model-3.jpg"
        leftBtnText="Custum order"
        rightBtnText="Existance inventory"
            />
            <Section
                
                title="Lowest Cost Solar Pannel"
        description= "Money Back Gaurantee"
        image= "solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
            />
            <Section
                
                title="Solar for New Roof"
        description= "Solar Roof Cost Less then New Roof"
        image= "solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
            />
            <Section
                
                title="Accessories"
        description= ""
        image= "accessories.jpg"
        leftBtnText="Order Now"
        rightBtnText=""
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
height:100vh;
object-fit:cover;

`