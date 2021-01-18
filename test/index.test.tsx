import { InMemoryCache, gql } from '@apollo/client'
import React from 'react'
import Index2 from '../pages/index2'
import renderer from 'react-test-renderer'
import { MockedProvider } from '@apollo/client/testing'

const cache = new InMemoryCache()
cache.writeQuery({
  query: gql`
    query Viewer {
      viewer {
        id
        name
        status
      }
    }
  `,
  data: {
    viewer: {
      __typename: 'User',
      id: 'Baa',
      name: 'Baa',
      status: 'Healthy',
    },
  },
})

describe('Index2', () => {
  it('renders the html we want', async () => {
    const component = renderer.create(
      <MockedProvider cache={cache}>
        <Index2 />
      </MockedProvider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
