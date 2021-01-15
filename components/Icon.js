import React from "react"

const Icon = ({ id }) => {

    if (id === "discord"){
        return (
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={ id }>
                <path fillRule="evenodd" clipRule="evenodd" d="M428.667 140C320.667 80.6667 204.667 76 83.3333 140C83.3333 140 102.667 118.667 130 104C157.333 89.3333 190 80.6667 190 80.6667C190 80.6667 191.333 79.3333 188.667 74.6667C186 70 183.333 70 183.333 70C183.333 70 150 75.3333 123.333 86.6667C96.6667 98 69.3333 116 69.3333 116C69.3333 116 45.3333 154.667 24.6667 228C4 301.333 0 372 0 372C0 372 21.3333 398 62.6667 418.667C104 439.333 149.333 442.667 149.333 442.667C149.333 442.667 156.667 438 161.333 432C166 426 168 417.333 168 417.333C168 417.333 138.667 406 113.333 388C88 370 73.3333 350 73.3333 350C73.3333 350 141.333 406.912 256.667 406C372 405.088 441.333 350 441.333 350C441.333 350 426.667 370 404.667 386C382.667 402 345.333 417.333 345.333 417.333C345.333 417.333 346.667 423.333 351.333 431.333C356 439.333 362.667 442.667 362.667 442.667C362.667 442.667 410 438.667 449.333 419.333C488.667 400 512 372 512 372C512 372 508 308.667 492 241.333C476 174 441.333 116 441.333 116C441.333 116 432 104.667 392.667 87.3333C353.333 70 328 70 328 70C328 70 324.667 70 323.333 74C322 78 323.333 80.6667 323.333 80.6667C323.333 80.6667 358 89.3333 381.333 102.667C404.667 116 428.667 140 428.667 140ZM234.251 284.993C228.88 315.451 203.142 336.372 176.763 331.72C150.384 327.069 133.354 298.607 138.724 268.149C144.095 237.691 169.833 216.771 196.212 221.422C222.591 226.073 239.621 254.535 234.251 284.993ZM336.037 331.759C362.415 327.107 379.446 298.646 374.075 268.187C368.705 237.729 342.967 216.809 316.588 221.46C290.209 226.111 273.179 254.573 278.549 285.031C283.92 315.489 309.658 336.41 336.037 331.759Z"/>
            </svg>
        )
    }
    else if (id === "info"){
        return (
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none" className={ id }>
                <path d="M256 469.333C373.821 469.333 469.333 373.821 469.333 256C469.333 138.179 373.821 42.6667 256 42.6667C138.179 42.6667 42.6667 138.179 42.6667 256C42.6667 373.821 138.179 469.333 256 469.333Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M256 256V341.333" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M256 186H256.213" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
    else if (id === "share"){
        return (
            <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={ id }>
                <path d="M384 170.667C419.346 170.667 448 142.013 448 106.667C448 71.3205 419.346 42.6667 384 42.6667C348.654 42.6667 320 71.3205 320 106.667C320 142.013 348.654 170.667 384 170.667Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M128 320C163.346 320 192 291.346 192 256C192 220.654 163.346 192 128 192C92.6538 192 64 220.654 64 256C64 291.346 92.6538 320 128 320Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M384 469.333C419.346 469.333 448 440.679 448 405.333C448 369.987 419.346 341.333 384 341.333C348.654 341.333 320 369.987 320 405.333C320 440.679 348.654 469.333 384 469.333Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M183.254 288.214L328.961 373.12" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M328.747 138.88L183.254 223.787" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
    else if (id === "discover"){
        return (
            <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={ id }>
                <path d="M256 469.333C373.821 469.333 469.333 373.821 469.333 256C469.333 138.179 373.821 42.6667 256 42.6667C138.179 42.6667 42.6666 138.179 42.6666 256C42.6666 373.821 138.179 469.333 256 469.333Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M346.454 165.547L301.227 301.227L165.547 346.454L210.774 210.774L346.454 165.547Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
    else if (id === "get-help"){
        return (
            <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 469.334C373.821 469.334 469.333 373.821 469.333 256C469.333 138.18 373.821 42.667 256 42.667C138.179 42.667 42.6667 138.18 42.6667 256C42.6667 373.821 138.179 469.334 256 469.334Z" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M170.667 298.667C170.667 298.667 202.667 341.334 256 341.334C309.333 341.334 341.333 298.667 341.333 298.667" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M192 192H192.213" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M320 192H320.213" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    }
    else if (id === "up"){
        return (
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={ id }>
                <polyline points="5,35 25,15 45,35" />
            </svg>
        )
    }

}

export default Icon