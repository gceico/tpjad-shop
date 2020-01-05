import { composeValidators, isRequired } from '../../../helpers'

export default ({
  firstName
}) => ({
  firstName: composeValidators(isRequired)(firstName),
})
