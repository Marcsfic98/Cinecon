import styled from "styled-components";

export const ContainerCadastro = styled.div`
    height: 400px;
    width: 400px;
    background:white;
    border: 2px solid blue;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Input = styled.input`

    background:transparent;
    border:0;
    font-size:16px;
    border-bottom: 2px solid blue;
    margin: 20px 0;
    width:70%;
    height:30px;
    padding-left:10px;

    &:focus{
    outline:0;
}

`
