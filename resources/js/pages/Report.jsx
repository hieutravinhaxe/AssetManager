import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { generalLayoutCol } from '../constants'
import { ReportList } from '../components/report'
import { ButtonExportReport, TextHeader } from '../components/general'

function Report({ auth, responsive }) {
  const { user } = auth
  const { isMobilePlatform } = responsive
  if (user.role_id === 2) {
    return <Redirect to="/" />
  }
  return (
    <div style={generalLayoutCol}>
      <TextHeader content="Report" />
      <div
        className={
          isMobilePlatform
            ? 'w-100 d-flex justify-content-start my-4'
            : 'w-100 d-flex justify-content-end my-4'
        }
      >
        <ButtonExportReport />
      </div>
      <ReportList />
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  responsive: state.responsive,
})

export default connect(mapStateToProps)(Report)
