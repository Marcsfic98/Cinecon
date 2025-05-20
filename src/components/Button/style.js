import styled from "styled-components";

export const ContainerButton = styled.button`
        border-radius: 22px;
        position: relative;
        cursor:pointer;    
        color: #FFFFFF;
        padding: 2px 12px;
        min-width: 120px;
        width: 100%;
        height: 33px;
        max-width:128px;
         background: #165794;
        &:after {
            content: '';
            position: absolute;
            border: 1px solid #165794;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

         &:hover{
            opacity:0.8;
         }
`