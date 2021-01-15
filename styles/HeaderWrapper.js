import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: block;
    width: 100%;
    padding: 15px 0;
    position: fixed;
    z-index: 100;
    top: -71px;
    left: 0;
    overflow: hidden;
    background: #fff;
    transition: .2s linear;
    border-bottom: 1px solid #ddd;

    &.visible {
        top: 0;
    }

    @media screen and (max-width: 700px){
        padding: 10px 0;
    }

    section {
        display: block;
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;

        .title {
            display: inline-block;
            vertical-align: middle;
            font-family: Roboto-Bold, sans-serif;
            font-weight: 700;
            line-height: 40px;
            font-size: 25px;
            color: #444;
            text-align: left;
            
            em {
                font-family: Roboto-Light, sans-serif;
                font-weight: 200;
            }

            @media screen and (max-width: 700px){
                font-size: 21px;

                em {
                    font-size: 21px;
                }
            }

            @media screen and (max-width: 500px){
                font-size: 19px;

                em {
                    font-size: 19px;
                }
            }
        }

        .discord_ {
            display: none;

            @media screen and (max-width: 700px){
                display: block;
                width: 40px;
                height: 40px;
                position: absolute;
                top: 0;
                right: 0;
                padding: 5px;

                .discord {
                    display: block;
                    width: 100%;
                    height: 100%;

                    path {
                        fill: #777;
                    }

                    ellipse {
                        fill: #fff;
                    }
                }
            }

            @media screen and (max-width: 500px){
                padding: 7px;
            }
        }
        
        nav {
            display: inline-block;
            vertical-align: middle;
            position: absolute;
            top: 0;
            right: 0;
            text-align: right;

            a {
                display: inline-block;
                vertical-align: middle;
                font-family: Roboto-Light, sans-serif;
                font-weight: 200;
                line-height: 40px;
                font-size: 14px;
                color: #444;
                text-align: center;
                margin-right: 30px;

                &.active {
                    display: none;
                }

                &:last-of-type {
                    margin-right: 0;
                }
            }

            @media screen and (max-width: 700px){
                display: none;
            }
        }
    }
`

export default HeaderWrapper