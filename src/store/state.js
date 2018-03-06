import {playMode} from 'common/js/config'

const state = { // 最底层的原始数据
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence, // 顺序播放
  currentIndex: -1
}

export default state