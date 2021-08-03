import { useRecoilState } from 'recoil'
import { loadingState } from '../atoms/loading'

import { Wrap } from '../styles/components/loading'

const Loading = (): JSX.Element => {
  const [loading] = useRecoilState(loadingState)

  return <Wrap className={loading ? 'shown' : 'hidden'} />
}

export default Loading
