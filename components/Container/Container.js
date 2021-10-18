import styled from "styled-components"
import tw from "twin.macro";

const Container = styled.div`
    @media screen and (min-width: 1024px) {
        margin: 0 auto;
        max-width: 1024px;
        position: relative;
        ${tw`border-l border-r`}
    }
`;

export default Container