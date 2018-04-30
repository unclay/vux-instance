<template>
  <div>
    <group title="过滤">
      <selector ref="sortVal" title="分组" :options="sortList" v-model="sortVal"></selector>
    </group>
    <group title="词组" class="dict">
      <cell
        v-for="item of dict"
        :key="item[0]"
        :title="item[0]" :link="'https://m.baidu.com/ssid=0258723538393831323938ef10/s?word=' + item[0]" :value="item[1]"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, Selector } from 'vux'
import dict from './libs/dict'

export default {
  components: {
    Group,
    Cell,
    Selector
  },
  watch: {
    sortVal (sortVal) {
      localStorage.setItem('vux-english-filter', sortVal)
      if (sortVal) {
        this.dict = this.dict.filter(item => {
          if (item[0].match(new RegExp(` ${sortVal}$`, 'gi'))) {
            return item
          }
        })
      } else {
        this.dict = dict.map(item => {
          return item.split('|') || item
        })
      }
    }
  },
  data () {
    return {
      dict: dict.map(item => {
        return item.split('|') || item
      }),
      sortList: [],
      sortVal: ''
    }
  },
  mounted () {
    const arr = [
      'about',
      'across',
      'all',
      'back',
      'down',
      'for',
      'forward',
      'in',
      'into',
      'on',
      'of',
      'off',
      'out',
      'out',
      'over',
      'to',
      'through',
      'up',
      'with'
    ]
    this.sortList = [{
      key: '',
      value: '请选择分组'
    }].concat(arr.map(item => {
      return {
        key: item,
        value: item
      }
    }))

    const store = localStorage.getItem('vux-english-filter')
    if (store) {
      this.sortVal = store
    }
  }
}
</script>

<style scope>
  .dict .vux-cell-bd {
    min-width: 100px;
  }
</style>
