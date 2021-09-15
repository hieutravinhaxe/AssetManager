import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { toggleVisibleMenu } from '../../../actions'
import Header from './Header'
import MenuList from './MenuList'

const { Sider } = Layout

function AppSider(props) {
  const { responsive, toggleVisibleMenu } = props
  const { isMenuOpen, isTabletPlatform } = responsive
  const siderStyle = {
    minHeight: '100vh',
    marginTop: 64,
    padding:
      !isTabletPlatform || (isTabletPlatform && isMenuOpen) ? '0px 20px' : null,
    backgroundColor: 'white',
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={isTabletPlatform && !isMenuOpen}
      defaultCollapsed={!isMenuOpen}
      onCollapse={(collapsed) => {
        toggleVisibleMenu(!collapsed)
      }}
      width={250}
      style={siderStyle}
    >
      <Header />
      <MenuList />
    </Sider>
  )
}

const mapStateToProps = (state) => ({
  responsive: state.responsive,
})

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibleMenu: (search) => dispatch(toggleVisibleMenu(search)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSider)
