import React, { useEffect } from 'react'
import { Button, Modal, Row, Col, Typography } from 'antd'
import { connect } from 'react-redux'
import { formatDate, formatCapitalizeFirst } from '../../../utils'
import {
  enableLoading,
  disableLoading,
  getAssetHistory,
  resetAssetHistory,
} from '../../../actions'
import { assetHistoryColumns } from '../../../constants/table-columns'
import { exceptionConstants } from '../../../constants'
import { TableHistoryAsset } from '../table'
const { SUCCESS } = exceptionConstants

const { Text } = Typography

function ModalDetailAsset(props) {
  const {
    isOpen,
    handleCancel,
    detail,
    loading,
    asset,
    getAssetHistory,
    enableLoading,
    disableLoading,
    resetAssetHistory,
    showPopUp,
  } = props

  const { newAssetHistory } = asset

  useEffect(async () => {
    if (isOpen) {
      enableLoading()
      const res = await getAssetHistory(detail.id)
      if (res.code !== SUCCESS) {
        handleCancel()
        showPopUp(res.code, res.message)
      }
      disableLoading()
    } else {
      resetAssetHistory()
    }
  }, [isOpen])

  return (
    <Modal
      title={
        <Text style={{ color: '#CF2338' }}>Detailed Asset Information</Text>
      }
      visible={isOpen}
      closable={false}
      onCancel={handleCancel}
      footer={null}
      width={820}
    >
      {detail !== null ? (
        <Row gutter={[8, 16]}>
          <Col span={6}>Asset Code</Col>
          <Col span={16}>{detail.asset_code}</Col>
          <Col span={6}>Asset Name</Col>
          <Col span={16}>{detail.asset_name}</Col>
          <Col span={6}>Category</Col>
          <Col span={16}>{formatCapitalizeFirst(detail.category_name)}</Col>
          <Col span={6}>Installed Date</Col>
          <Col span={16}>{formatDate(detail.installed_date)}</Col>
          <Col span={6}>State</Col>
          <Col span={16}>{detail.state_name}</Col>
          <Col span={6}>Location</Col>
          <Col span={16}>{detail.location}</Col>
          <Col span={6}>Specification</Col>
          <Col span={16}>{detail.specific}</Col>
          <Col span={6}>History</Col>
          <Col span={16}>
            <TableHistoryAsset
              assetHistoryColumns={assetHistoryColumns}
              newAssetHistory={newAssetHistory}
            />
          </Col>
        </Row>
      ) : null}
      <div className="d-flex flex-row align-items-center justify-content-end w-100 pt-4">
        <Button disabled={loading} onClick={handleCancel}>
          Close
        </Button>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  asset: state.asset,
})

const mapDispatchToProps = (dispatch) => {
  return {
    getAssetHistory: (id) => dispatch(getAssetHistory(id)),
    enableLoading: () => dispatch(enableLoading()),
    disableLoading: () => dispatch(disableLoading()),
    resetAssetHistory: () => dispatch(resetAssetHistory()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetailAsset)
