import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, DatePicker } from 'antd'
import {
  getStateInAssignmentList,
  searchAssignment,
  setFilterByAssignedDateInAssignmentList,
  setFilterByStateInAssignmentList,
} from '../../actions'

import { InputSearch, ButtonRouting, DropdownFilter } from '../general'
import { DATE_FORMAT } from '../../constants'
import moment from 'moment'
function ManageAssignmentFilter(props) {
  const {
    searchAssignment,
    setFilterByAssignedDateInAssignmentList,
    setFilterByStateInAssignmentList,
    assignment,
    responsive,
    getStateInAssignmentList,
  } = props

  const { isMobilePlatform } = responsive
  const { dataFilter } = assignment
  const { states } = dataFilter

  useEffect(async () => {
    await getStateInAssignmentList()
  }, [])

  const handleDate = (value) => {
    setFilterByAssignedDateInAssignmentList(
      value === null ? null : moment(value).format('YYYY-MM-DD')
    )
  }
  return (
    <Row gutter={[0, 16]} className="w-100 my-4">
      <Col
        span={{ span: 24, order: 1 }}
        xs={{ span: 24, order: 1 }}
        sm={{ span: 12, order: 1 }}
        md={{ span: 12, order: 1 }}
        lg={{ span: 12, order: 1 }}
        xl={{ span: 11, order: 1 }}
      >
        <div className="w-100 d-flex flex-row align-items-center justify-content-start">
          <DropdownFilter
            title="State"
            placement="bottomLeft"
            data={states}
            handleSetFilter={setFilterByStateInAssignmentList}
          />
          <div style={{ marginRight: '30px' }}></div>
          <DatePicker
            format={DATE_FORMAT}
            onChange={handleDate}
            placeholder="Assigned Date"
            style={{ width: isMobilePlatform ? '100%' : 'fit-content' }}
          />
        </div>
      </Col>
      <Col
        span={{ span: 24, order: 3 }}
        xs={{ span: 24, order: 3 }}
        sm={{ span: 24, order: 3 }}
        md={{ span: 24, order: 3 }}
        lg={{ span: 15, order: 2 }}
        xl={{ span: 8, order: 2 }}
      >
        <InputSearch handleSearch={searchAssignment} />
      </Col>
      <Col
        span={{ span: 24, order: 3 }}
        xs={{ span: 24, order: 3 }}
        sm={{ span: 12, order: 2 }}
        md={{ span: 12, order: 2 }}
        lg={{ span: 9, order: 3 }}
        xl={{ span: 5, order: 3 }}
        className={
          isMobilePlatform
            ? null
            : 'd-flex align-items-center justify-content-end'
        }
      >
        <ButtonRouting
          title="Create new assignment"
          route="/assignments/create"
        />
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  assignment: state.assignment,
  responsive: state.responsive,
})

const mapDispatchToProps = (dispatch) => {
  return {
    searchAssignment: (search) => dispatch(searchAssignment(search)),
    setFilterByStateInAssignmentList: (filterType) =>
      dispatch(setFilterByStateInAssignmentList(filterType)),
    setFilterByAssignedDateInAssignmentList: (filterType) =>
      dispatch(setFilterByAssignedDateInAssignmentList(filterType)),
    getStateInAssignmentList: () => dispatch(getStateInAssignmentList()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageAssignmentFilter)
