import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import tw from "twin.macro";

const ModalStyles = styled.div`
    ${props => props.open ? tw`flex items-start justify-center fixed top-0 bottom-0 left-0 right-0` : tw`hidden`}
`

const Modal = ({open, close, children}) => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        setModalOpen(open)
    }, [open])

    const closeModal = e => {
        close();
        setModalOpen(false);
        e.stopPropagation();
    }

    return (
        <ModalStyles onClick={closeModal} open={modalOpen}>
            {children}
        </ModalStyles>
    )
}

export default Modal