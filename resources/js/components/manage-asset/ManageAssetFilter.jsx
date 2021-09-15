import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import {
  getStateAndCategoryInAssetList,
  searchAsset,
  setFilterByCateInAssetList,
  setFilterByStateInAssetList,
} from '../../actions'

import { InputSearch, ButtonRouting, DropdownFilter } from '../general'

function ManageAssetFilter(props) {
  const {
    searchAsset,
    setFilterByCateInAssetList,
    setFilterByStateInAssetList,
    asset,
    getStateAndCategoryInAssetList,
    responsive,
  } = props

  const { isMobilePlatform } = responsive

  const { dataFilter } = asset
  const { categories, states } = dataFilter

  useEffect(async () => {
    await getStateAndCategoryInAssetList()
  }, [])

  return (
    <Row gutter={[0, 16]} className="w-100 my-4">
      <Col
        span={{ span: 24, order: 1 }}
        xs={{ span: 12, order: 1 }}
        sm={{ span: 12, order: 1 }}
        md={{ span: 12, order: 1 }}
        lg={{ span: 10, order: 1 }}
        xl={{ span: 12, order: 1 }}
      >
        <div className="w-100 d-flex flex-row align-items-center justify-content-start">
          <DropdownFilter
            style={isMobilePlatform ? { width: '100%' } : null}
            title="State"
            placement="bottomLeft"
            data={states}
            handleSetFilter={setFilterByStateInAssetList}
          />
          <div style={{ marginRight: '30px' }}></div>
          <DropdownFilter
            title="Category"
            style={isMobilePlatform ? { width: '100%' } : null}
            placement="bottomLeft"
            data={categories}
            handleSetFilter={setFilterByCateInAssetList}
          />
        </div>
      </Col>
      <Col
        span={{ span: 24, order: 3 }}
        xs={{ span: 24, order: 3 }}
        sm={{ span: 24, order: 3 }}
        md={{ span: 24, order: 3 }}
        lg={{ span: 9, order: 2 }}
        xl={{ span: 8, order: 2 }}
      >
        <InputSearch handleSearch={searchAsset} />
      </Col>
      <Col
        span={{ span: 24, order: 3 }}
        xs={{ span: 12, order: 3 }}
        sm={{ span: 12, order: 2 }}
        md={{ span: 12, order: 2 }}
        lg={{ span: 5, order: 2 }}
        xl={{ span: 4, order: 3 }}
        className={
          isMobilePlatform
            ? null
            : 'd-flex align-items-center justify-content-end'
        }
      >
        <ButtonRouting title="Create new asset" route="/assets/create" />
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  asset: state.asset,
  responsive: state.responsive,
})

const mapDispatchToProps = (dispatch) => {
  return {
    searchAsset: (search) => dispatch(searchAsset(search)),
    setFilterByCateInAssetList: (filterType) =>
      dispatch(setFilterByCateInAssetList(filterType)),
    setFilterByStateInAssetList: (filterType) =>
      dispatch(setFilterByStateInAssetList(filterType)),
    getStateAndCategoryInAssetList: () =>
      dispatch(getStateAndCategoryInAssetList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAssetFilter)
