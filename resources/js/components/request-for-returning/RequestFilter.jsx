import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker } from 'antd'
import {
  getStateInRequestList,
  searchRequest,
  setFilterByReturnedDateInRequestList,
  setFilterByStateInRequestList,
} from '../../actions'
import { InputSearch, DropdownFilter } from '../general'
import { DATE_FORMAT } from '../../constants'
import moment from 'moment'
function RequestFilter(props) {
  const {
    getStateInRequestList,
    searchRequest,
    setFilterByReturnedDateInRequestList,
    setFilterByStateInRequestList,
    request,
    responsive,
  } = props

  const { isMobilePlatform } = responsive

  const { dataFilter } = request
  const { states } = dataFilter

  useEffect(async () => {
    await getStateInRequestList()
  }, [])

  const handleDate = (value) => {
    setFilterByReturnedDateInRequestList(
      value === null ? null : moment(value).format('YYYY-MM-DD')
    )
  }
  return (
    <Row gutter={[0, 16]} className="w-100 my-4">
      <Col
        span={{ span: 24, order: 1 }}
        xs={{ span: 24, order: 1 }}
        sm={{ span: 24, order: 1 }}
        md={{ span: 12, order: 1 }}
        lg={{ span: 16, order: 1 }}
        xl={{ span: 16, order: 1 }}
      >
        <div className="w-100 d-flex flex-row align-items-center justify-content-start">
          <DropdownFilter
            title="State"
            placement="bottomLeft"
            data={states}
            handleSetFilter={setFilterByStateInRequestList}
          />
          <div style={{ marginRight: '30px' }}></div>
          <DatePicker
            format={DATE_FORMAT}
            onChange={handleDate}
            placeholder="Returned Date"
            style={{ width: isMobilePlatform ? '100%' : 'fit-content' }}
          />
        </div>
      </Col>
      <Col
        span={{ span: 24, order: 2 }}
        xs={{ span: 24, order: 2 }}
        sm={{ span: 24, order: 2 }}
        md={{ span: 12, order: 2 }}
        lg={{ span: 8, order: 2 }}
        xl={{ span: 8, order: 2 }}
        className={
          isMobilePlatform
            ? null
            : 'd-flex align-items-center justify-content-end'
        }
      >
        <InputSearch handleSearch={searchRequest} />
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  request: state.request,
  responsive: state.responsive,
})

const mapDispatchToProps = (dispatch) => {
  return {
    searchRequest: (search) => dispatch(searchRequest(search)),
    setFilterByStateInRequestList: (filterType) =>
      dispatch(setFilterByStateInRequestList(filterType)),
    setFilterByReturnedDateInRequestList: (filterType) =>
      dispatch(setFilterByReturnedDateInRequestList(filterType)),
    getStateInRequestList: () => dispatch(getStateInRequestList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestFilter)
