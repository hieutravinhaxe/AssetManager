import React, { useState, useEffect } from 'react'
import { Modal, Button, Typography } from 'antd'
import { connect } from 'react-redux'
import {
  disableLoading,
  enableLoading,
  cancelRequest,
  completeRequest,
} from '../../../actions'
import { exceptionConstants } from '../../../constants'
const { SUCCESS, CREATED } = exceptionConstants
const { Text } = Typography

function ModalHandleReturnPage(props) {
  const {
    isOpen,
    handleCancel,
    loading,
    enableLoading,
    disableLoading,
    selectedId,
    showPopUp,
    type,
    cancelRequest,
    completeRequest,
  } = props

  const [modalMessage, setModalMessage] = useState(null)

  useEffect(() => {
    enableLoading()
    if (type === 'complete') {
      setModalMessage(
        `Do you want to mark this returning request as 'Completed'?`
      )
    } else if (type === 'cancel') {
      setModalMessage('Do you want to cancel this returning request?')
    }
    disableLoading()
  }, [type])

  const handleOnClick = async (id) => {
    enableLoading()
    let res
    if (type === 'complete') {
      res = await completeRequest(id, { state_key: 'COMPLETED' })
    } else if (type === 'cancel') {
      res = await cancelRequest(id)
    }
    handleCancel()
    if (res.code !== SUCCESS && res.code !== CREATED) {
      showPopUp(res.code, res.message)
    }
    disableLoading()
  }

  return (
    <Modal
      title={<Text style={{ color: '#CF2338' }}>Are you sure?</Text>}
      visible={isOpen}
      closable={false}
      onCancel={handleCancel}
      footer={null}
    >
      <span>{modalMessage}</span>
      <div className="d-flex flex-row align-items-center justify-content-end w-100 pt-4">
        <Button
          className="mx-3"
          disabled={loading}
          type="primary"
          danger
          onClick={() => handleOnClick(selectedId)}
        >
          Yes
        </Button>
        <Button disabled={loading} onClick={handleCancel}>
          No
        </Button>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    enableLoading: () => dispatch(enableLoading()),
    disableLoading: () => dispatch(disableLoading()),
    cancelRequest: (id) => dispatch(cancelRequest(id)),
    completeRequest: (id, credentials) =>
      dispatch(completeRequest(id, credentials)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalHandleReturnPage)
