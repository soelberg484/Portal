import React, { useState } from 'react'
import TermsModal from './TermsModal'


type Props = {
 terms: any
}

const Terms: React.FC<Props> = (props: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <>
 <div onClick={() => {
          setShowModal(true)
        }}>
            <h1>CLICK BITCH</h1>
        </div>
        
        <TermsModal
        terms={props.terms}
        open={showModal}
        setShowModal={open => { setShowModal(open) }}
         />
        </>
    )
}

export default Terms