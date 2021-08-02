import { ResponsePrefecture } from '../models/Api'

const Checkbox = ({ pref }: { pref: ResponsePrefecture }): JSX.Element => {
  return (
    <label>
      <input type="checkbox" />
      {pref.prefName}
    </label>
  )
}

export default Checkbox
