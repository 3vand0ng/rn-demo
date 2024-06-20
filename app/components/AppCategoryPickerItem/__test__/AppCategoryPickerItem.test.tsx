import React from 'react'
import renderer from 'react-test-renderer'
import AppCategoryPickerItem from '../index'
import COLORS from '../../../config/colors'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const props = {
  selected: true,
  label: 'Furniture',
  data: {
    label: 'Furniture',
    iconName: 'lamp',
    iconBackgroundColor: COLORS.PRIMARY,
    value: 1
  }
}

describe('AppCategoryPickerItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppCategoryPickerItem {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
