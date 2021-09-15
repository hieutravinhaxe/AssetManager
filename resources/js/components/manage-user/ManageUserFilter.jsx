import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { searchUser, setFilterInUserList } from '../../actions'
import { roleConstants } from '../../constants'
import { InputSearch, ButtonRouting, DropdownFilter } from '../general'

function ManageUserFilter(props) {
  const { searchUser, setFilterInUserList } = props

  return (
    <Row gutter={[0, 16]} className="w-100 my-4">
      <Col
        span={{ span: 12, order: 1 }}
        xs={{ span: 12, order: 1 }}
        sm={{ span: 12, order: 1 }}
        md={{ span: 12, order: 1 }}
        lg={{ span: 9, order: 1 }}
        xl={{ span: 12, order: 1 }}
      >
        <DropdownFilter
          title="Type"
          placement="bottomRight"
          data={roleConstants}
          handleSetFilter={setFilterInUserList}
        />
      </Col>
      <Col
        span={{ span: 24, order: 3 }}
        xs={{ span: 24, order: 3 }}
        sm={{ span: 24, order: 3 }}
        md={{ span: 24, order: 3 }}
        lg={{ span: 10, order: 2 }}
        xl={{ span: 8, order: 2 }}
      >
        <InputSearch handleSearch={searchUser} />
      </Col>
      <Col
        span={{ span: 12, order: 2 }}
        xs={{ span: 12, order: 2 }}
        sm={{ span: 12, order: 2 }}
        md={{ span: 12, order: 2 }}
        lg={{ span: 5, order: 3 }}
        xl={{ span: 4, order: 3 }}
        className="d-flex align-items-center justify-content-end"
      >
        <ButtonRouting title={'Create new user'} route="/users/create" />
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (search) => dispatch(searchUser(search)),
    setFilterInUserList: (filterType) =>
      dispatch(setFilterInUserList(filterType)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserFilter)
