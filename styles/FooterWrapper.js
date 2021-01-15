import styled from "styled-components"

const FooterWrapper = styled.footer`
    display: block;
    width: 100%;
    padding: 15px 0;
    position: relative;
    overflow: hidden;
    background: #fff;

    @media screen and (min-width: 700px){
        padding: 10px 0;
    }

    section {
        display: block;
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        padding-right: 100px;

        .designer {
            display: inline-block;
            vertical-align: middle;
            font-family: Roboto-Light, sans-serif;
            font-weight: 200;
            line-height: 40px;
            font-size: 14px;
            color: #444;
            text-align: left;
            
            a {
                color: #8a2be2;
                outline: 0;

                &:hover,
                &:focus {
                    text-decoration: underline;
                }
            }

            @media screen and (min-width: 700px){
                font-size: 12px;
            }
        }

        .discord_ {
            display: inline-block;
            vertical-align: middle;
            width: 40px;
            position: absolute;
            top: 0;
            right: 40px;
            padding: 7px;
            outline: 0;

            @media screen and (min-width: 700px){
                padding: 9px;
            }

            .discord {
                display: block;
                width: 100%;
                height: 100%;

                path {
                    fill: none;
                    stroke: #444;
                    stroke-width: 10;
                }

                ellipse {
                    fill: none;
                    stroke: #444;
                    stroke-width: 10;
                }
            }

            &:focus .discord {
                path {
                    fill: #777;
                    stroke: none;
                }

                ellipse {
                    fill: #fff;
                    stroke: none;
                }
            }
        }

        .back-to-top {
            display: inline-block;
            vertical-align: middle;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            right: 0;
            border: 0;
            outline: 0;
            background: transparent;
            padding: 10px;

            @media screen and (min-width: 700px){
                padding: 12px;
            }

            &:focus {
                background: #ddd;
                border: 0;
            }

            .up {
                display: block;
                width: 100%;
                height: 100%;

                polyline {
                    fill: none;
                    stroke: #999;
                    stroke-width: 3;
                }
            }
        }
    }
`

export default FooterWrapper