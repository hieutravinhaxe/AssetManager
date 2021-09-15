import React from 'react'
import { Table, Spin } from 'antd'
import { connect } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'

function TableHistoryAsset(props) {
  const { assetHistoryColumns, newAssetHistory, loading, responsive } = props
  const { isSmallLaptop } = responsive

  return (
    <Table
      columns={assetHistoryColumns}
      dataSource={newAssetHistory}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        marginBottom: '30px',
      }}
      scroll={isSmallLaptop ? { x: 100 } : false}
      loading={{
        indicator: (
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 24, color: '#CF2338' }}
                spin
              />
            }
          />
        ),
        spinning: loading,
      }}
      rowClassName="row-cursor"
      pagination={false}
    />
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  responsive: state.responsive,
})

export default connect(mapStateToProps)(TableHistoryAsset)
