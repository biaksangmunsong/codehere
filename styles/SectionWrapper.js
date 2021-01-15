import styled from "styled-components"

const SectionWrapper = styled.section`
    display: block;
    width: 100%;
    text-align: left;
    font-size: 0;
    background: #fff;
    padding: 100px 0;

    &:nth-child(even){
        background: #eee;
    }
    
    @media screen and (max-width: 700px){
        padding: 70px 0;
        text-align: center;
    }
    
    .sub-container {
        display: block;
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;
        position: relative;

        @media screen and (max-width: 700px){
            padding-bottom: 220px;
        }

        .illustration {
            display: inline-block;
            vertical-align: middle;
            width: 40%;

            @media screen and (max-width: 1000px){
                width: 45%;
            }

            @media screen and (max-width: 700px){
                position: absolute;
                z-index: 1;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                display: block;
                width: auto;
                height: 150px;
            }
        }
    
        .content {
            display: inline-block;
            vertical-align: middle;
            width: 60%;

            @media screen and (max-width: 1000px){
                width: 55%;
            }

            @media screen and (max-width: 700px){
                display: block;
                width: 100%;
                position: relative;
                z-index: 2;
            }
    
            &.right {
                padding-left: 50px;

                @media screen and (max-width: 1000px){
                    padding-left: 40px;
                }

                @media screen and (max-width: 700px){
                    padding-left: 0;
                }
            }
    
            &.left {
                padding-right: 50px;

                @media screen and (max-width: 1000px){
                    padding-right: 40px;
                }

                @media screen and (max-width: 700px){
                    padding-right: 0;
                }
            }
    
            h1 {
                display: block;
                width: 100%;
                font-family: Roboto-Bold, sans-serif;
                font-weight: 700;
                font-size: 30px;
                line-height: 40px;
                color: #444;
                text-align: left;
                margin-bottom: 20px;
                position: relative;
                padding-left: 60px;
                white-space: pre-line;

                strong {
                    color: #6b8e23;
                }
                
                svg {
                    display: inline-block;
                    vertical-align: middle;
                    width: 40px;
                    position: absolute;
                    top: 0;
                    left: 0;

                    path {
                        stroke: #aaa;
                    }

                    @media screen and (max-width: 1200px){
                        width: 35px;
                    }
                }

                @media screen and (max-width: 1200px){
                    line-height: 35px;
                    font-size: 25px;
                    padding-left: 50px;
                }

                @media screen and (max-width: 700px){
                    padding: 0;
                    text-align: center;

                    svg {
                        position: relative;
                        display: block;
                        margin: 0 auto 20px auto;
                    }
                }

                @media screen and (max-width: 500px){
                    line-height: 30px;
                    font-size: 20px;
                }
            }
    
            p {
                display: block;
                width: 100%;
                font-family: Roboto-Light, sans-serif;
                font-weight: 200;
                font-size: 16px;
                line-height: 25px;
                color: #444;
                text-align: left;
                margin-bottom: 50px;
                white-space: pre-line;

                strong {
                    font-family: Roboto-Bold, sans-serif;
                    font-weight: 700;
                }

                @media screen and (max-width: 1200px){
                    font-size: 15px;
                    margin-bottom: 40px;
                }

                @media screen and (max-width: 700px){
                    text-align: center;
                    margin-bottom: 30px;
                }

                @media screen and (max-width: 500px){
                    line-height: 22px;
                    font-size: 14px;
                }
            }
    
            .call-to-action {
                display: inline-block;
                vertical-align: middle;
                padding: 0 50px;
                font-family: Roboto-Light, sans-serif;
                font-weight: 200;
                font-size: 16px;
                line-height: 50px;
                color: #fff;
                text-align: center;
                background: #6b8e23;
                outline: 0;
                border-radius: 5px;
                transition: .2s linear;

                @media screen and (max-width: 1000px){
                    font-size: 15px;
                }
    
                @media screen and (max-width: 500px){
                    font-size: 14px;
                }

                @media screen and (max-width: 350px){
                    padding: 0;
                    width: 100%;
                }
    
                .discord {
                    display: inline-block;
                    vertical-align: middle;
                    width: 25px;
                    margin-right: 15px;
    
                    path {
                        fill: #fff;
                    }
    
                    ellipse {
                        fill: #aaa;
                    }
                }
    
                span {
                    display: inline-block;
                    vertical-align: middle;
                    font: inherit;

                    strong {
                        font-family: Roboto-Bold, sans-serif;
                        font-weight: bold;
                    }
                }
        
                &:hover,
                &:focus {
                    background: #8a2be2;
                }
            }
        }
    }
`

export default SectionWrapper