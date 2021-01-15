import styled from "styled-components"

const IntroWrapper = styled.div`
    display: block;
    width: 100%;
    text-align: left;
    font-size: 0;
    background: #111;
    box-shadow: inset 0 0 300px #000;
    overflow: hidden;

    @media screen and (max-width: 700px){
        text-align: center;
    }

    .sub-container {
        display: block;
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;
        position: relative;
        padding: 220px 0 150px 0;

        @media screen and (max-width: 700px){
            padding: 100px 0 80px 0;
        }

        @media screen and (max-width: 500px){
            padding: 100px 0 70px 0;
        }
        
        h1 {
            display: block;
            width: 100%;
            font-family: Roboto-Bold, sans-serif;
            font-weight: 700;
            line-height: 60px;
            font-size: 50px;
            color: #fff;
            text-align: left;
            margin-bottom: 10px;
            white-space: pre-line;
            text-shadow: 4px 1px 10px rgba(0,0,0,.5);
            position: relative;
            z-index: 2;
            
            strong {
                font-weight: bolder;
                color: #ffa500;
            }

            @media screen and (max-width: 1200px){
                line-height: 55px;
                font-size: 45px;
            }

            @media screen and (max-width: 1000px){
                line-height: 50px;
                font-size: 40px;
            }

            @media screen and (max-width: 700px){
                text-align: center;
                line-height: 45px;
                font-size: 35px;
            }

            @media screen and (max-width: 500px){
                line-height: 40px;
                font-size: 30px;
            }
        }
    
        p {
            display: block;
            width: 100%;
            font-family: Roboto-Light, sans-serif;
            font-weight: 200;
            line-height: 30px;
            font-size: 20px;
            color: #ddd;
            text-align: left;
            margin-bottom: 70px;
            white-space: pre-line;
            position: relative;
            z-index: 2;
    
            strong {
                font-family: Roboto-Bold, sans-serif;
                color: #fff;
                font-weight: 700;
            }

            @media screen and (max-width: 1200px){
                line-height: 28px;
                font-size: 18px;
                margin-bottom: 60px;
            }

            @media screen and (max-width: 1000px){
                line-height: 26px;
                font-size: 16px;
                margin-bottom: 50px;
            }

            @media screen and (max-width: 700px){
                text-align: center;
                margin-bottom: 70px;
                line-height: 25px;
                font-size: 15px;
            }

            @media screen and (max-width: 500px){
                line-height: 24px;
                font-size: 14px;
                margin-bottom: 60px;
            }

            @media screen and (max-width: 350px){
                br {
                    display: none;
                }
            }
        }

        .call-to-action {
            display: inline-block;
            font-family: Roboto-Light, sans-serif;
            font-weight: 200;
            line-height: 50px;
            font-size: 16px;
            color: #fff;
            text-align: center;
            padding: 0 50px;
            outline: 0;
            border-radius: 5px;
            position: relative;
            z-index: 2;
            overflow: hidden;
            transition: .15s linear;
            background: #6b8e23;

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
    
            span {
                display: inline-block;
                vertical-align: middle;
                color: inherit;
                position: relative;
                z-index: 2;

                strong {
                    font-family: Roboto-Bold, sans-serif;
                    font-weight: 700;
                }
            }
            
            .discord {
                display: inline-block;
                vertical-align: middle;
                width: 25px;
                margin-right: 15px;
                position: relative;
                z-index: 2;
    
                path {
                    fill: #fff;
                    transition: .15s linear;
                }
    
                ellipse {
                    fill: #aaa;
                    transition: .15s linear;
                }
            }
    
            &::after {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                top: 100%;
                left: 0;
                background: #ddd;
                transition: .15s ease-in-out;
            }
    
            &:hover,
            &:focus {
                color: #141414;
    
                .discord {
                    path {
                        fill: #444;
                    }
    
                    ellipse {
                        fill: #ddd;
                    }
                }
    
                &::after {
                    top: 0;
                }
            }
        }
    
        .coffee {
            display: block;
            height: 50%;
            position: absolute;
            z-index: 1;
            margin-top: 35px;
            top: 25%;
            right: 10%;
            filter: drop-shadow(0 0 15px #0f0);
            animation: rgb 5s linear infinite normal;

            @media screen and (max-width: 1200px){
                height: 46%;
                top: 27%;
                right: 5%;
            }

            @media screen and (max-width: 1000px){
                height: 40%;
                top: 30%;
                filter: drop-shadow(0 0 10px #0f0);
            }

            @media screen and (max-width: 800px){
                height: 36%;
                top: 32%;
                right: 0;
            }

            @media screen and (max-width: 700px){
                position: relative;
                width: 70%;
                max-width: 200px;
                height: auto;
                top: 0;
                right: 0;
                margin: 0 auto 15px auto;
                filter: drop-shadow(0 0 7px #0f0);
            }

            @media screen and (max-width: 500px){
                max-width: 150px;
            }
            
            path,
            line {
                stroke: #fff;
            }
            
            @keyframes rgb {
                0% {
                    filter: drop-shadow(0 0 15px #0f0);
                }
                33% {
                    filter: drop-shadow(0 0 15px #00f);
                }
                67% {
                    filter: drop-shadow(0 0 15px #f00);
                }
            }

            @media screen and (max-width: 1000px){
                @keyframes rgb {
                    0% {
                        filter: drop-shadow(0 0 10px #0f0);
                    }
                    33% {
                        filter: drop-shadow(0 0 10px #00f);
                    }
                    67% {
                        filter: drop-shadow(0 0 10px #f00);
                    }
                }
            }

            @media screen and (max-width: 700px){
                @keyframes rgb {
                    0% {
                        filter: drop-shadow(0 0 7px #0f0);
                    }
                    33% {
                        filter: drop-shadow(0 0 7px #00f);
                    }
                    67% {
                        filter: drop-shadow(0 0 7px #f00);
                    }
                }
            }
        }
    }
`

export default IntroWrapper