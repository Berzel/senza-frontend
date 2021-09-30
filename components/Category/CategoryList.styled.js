import styled from "styled-components";
import tw from "twin.macro";

const CategoryListStyles = styled.div`
    .lists {
        overflow: hidden;

        & > * + * {
            ${tw`mt-2`}
        }
    }
`;

export default CategoryListStyles