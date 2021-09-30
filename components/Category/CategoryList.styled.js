import styled from "styled-components";
import tw from "twin.macro";

const CategoryListStyles = styled.div`
    .title {
        ${tw`mx-2 mb-2 font-semibold`}
    }

    .lists {
        overflow: hidden;

        & > * + * {
            ${tw`mt-2`}
        }
    }
`;

export default CategoryListStyles