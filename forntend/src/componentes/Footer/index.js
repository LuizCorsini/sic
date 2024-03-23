import styled from "styled-components"

const RodaPe = styled.footer`
    width: 100%;
    height: 100px; /* altura do rodapé */
    background-image: linear-gradient(to right, rgb(255, 193, 111), rgb(226, 110, 1));
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 50px;
`

function Footer(){
    return(
        <RodaPe>
            <p><copy>© Sonho Real Netimóveis LTDA</copy></p>
        </RodaPe>
    )
}

export default Footer