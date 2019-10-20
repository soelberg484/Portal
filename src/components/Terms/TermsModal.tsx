import React from 'react'
import { Modal } from '@dfds-ui/modal'
import { Button } from '@dfds-ui/react-components'


type Props = {
terms: any
open: boolean
setShowModal: (open: boolean) => void
}

const TermsModal: React.FC<Props> = (props: Props) => {
    const terms = props.terms.edges[0]

    return(
      <Modal
      heading={terms.node.title}
      isOpen={props.open}
      variation="fullscreen"
      onRequestClose={() => {
          props.setShowModal(false)
      }}
      >
         <div dangerouslySetInnerHTML={{__html: terms.node.content.childContentfulRichText.html}}/>
         <Button variation="secondary" fillWidth={true} onClick={() => props.setShowModal(false)}>Back</Button>
        </Modal>
    )

}

export default TermsModal
