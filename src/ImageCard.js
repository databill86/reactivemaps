import React, { Component } from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    position: relative;
    display: flex;
    min-height: 360px;
    flex-direction: column;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
    overflow: hidden;
`;

const Image = styled('div')`
    width: 100%;
    height: ${props => props.big ? '160px' : '120px'};
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const Card = styled('div')`
    height: auto;
    padding: ${props => props.big ? '60px 45px 32px' : '32px 45px'};
    background-color: #fff;
    text-align: center;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;

    h4 {
        color: #424242;
        margin: 0 0 10px;
    }

    p {
        font-size: 14px;
        width: 100%;
        max-width: 200px;
        margin: 0 auto 20px;
    }
`;


export default class ImageCard extends Component {
    render() {
        return (
            <Wrapper>
                <Image src={this.props.src} big={this.props.big} />
                <Card>{this.props.children}</Card>
            </Wrapper>
        );
    }
}