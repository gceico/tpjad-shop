import React from 'react'
import { BrowserView } from 'react-device-detect'

import { H2, Page, PageContent, PageTitle } from '../../../../styles'
import { MyCompanyFormData } from '../../../../types'
import MyCompanyForm from './my-company-form'

export default function MyCompany() {
  const onSubmit = (values: MyCompanyFormData) => {}

  return (
    <BrowserView>
      <Page>
        <PageTitle>
          <H2>My Company</H2>
        </PageTitle>
        <PageContent>
          <MyCompanyForm onSubmit={onSubmit} />
        </PageContent>
      </Page>
    </BrowserView>
  )
}
