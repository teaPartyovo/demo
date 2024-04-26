<template>
  <div>
    <h3 style="line-height: 30px">实验室排课表</h3>
    <div class="select" style="line-height: 40px; text-align: left; margin-bottom: 5px;">
      <i>选择周数: </i>
      <el-select v-model="value" placeholder="请选择周数" style="margin-right: 50px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <i>选择星期: </i>
      <el-select v-model="day" placeholder="请选择星期">
        <el-option
          v-for="item in days"
          :key="item.value"
          :label="item.label"
          :value="item.day"
        >
        </el-option>
      </el-select>
    </div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      :header-cell-style="{ textAlign: 'center' }"
    >
      <el-table-column prop="space" label="" align="center" />
      <el-table-column prop="lab" label="实验室" align="center" />
      <el-table-column prop="number" label="机房" align="center" />
      <el-table-column prop="first" label="1-2" align="center" />
      <el-table-column prop="second" label="3-5" align="center" />
      <el-table-column prop="third" label="6-7" align="center" />
      <el-table-column prop="fourth" label="8-9" align="center" />
      <el-table-column prop="fifth" label="10-12" align="center" />
      <el-table-column prop="sixth" label="13-15" align="center" />
    </el-table>
  </div>
</template>
<script>
import axios from 'axios';
import mock from '@/mock/index.js';
import router from '@/router';
export default {
  data() {
    return {
      // 存放所有的表头 一定要与tableData一致
      colFields: [
        "space",
        "lab",
        "number",
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
      ],
      spanArr: [], //存储合并单元格的开始位置
      // 表格数据
      tableData: [
        // 一年级
        {
          space: "星期一",
          lab: "软件实验室",
          number: "601",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "602",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "603",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "604",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "605",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "606",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "607",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "608",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "软件实验室",
          number: "609",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "计算机系统实验室",
          number: "704-708",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "计算机硬件实验室",
          number: "703、707",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "计算机系统实验室",
          number: "801、803",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "物联网实验室",
          number: "806、808",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
        {
          space: "星期一",
          lab: "计算机网络实验室",
          number: "832、834",
          first: "",
          second: "",
          third: "",
          fourth: "",
          fifth: "",
          sixth: "",
        },
      ],
      options: [],
      value: '',
      days: [{
          day: '1',
          label: '星期一'
        }, {
          day: '2',
          label: '星期二'
        }, {
          day: '3',
          label: '星期三'
        }, {
          day: '4',
          label: '星期四'
        }, {
          day: '5',
          label: '星期五'
        }],
        day:''
    };
  },
  created() {
    // 在组件创建时调用 API 获取数据
    this.fetchOptions();
  },
  watch: {
    // 监听 day 字段的变化
    day(newValue, oldValue) {
      // 根据新选择的星期几更新 space 字段
      this.updateSpace(newValue);
    }
  },
  methods: {
    // 更新 space 字段的方法
    updateSpace(day) {
      // 根据当前选择的星期几更新 space 字段
      // 示例中省略了具体的逻辑，请根据实际情况进行修改
      this.tableData.forEach(item => {
        item.space = `${this.getDayLabel(day)}`;
      });
    },
    // 获取星期几的中文标签
    getDayLabel(day) {
      // 根据 day 获取对应的中文标签
      const targetDay = this.days.find(item => item.day === day);
      return targetDay ? targetDay.label : '';
    },
    /**
     * 获取当前学期的数据
     */
    fetchOptions() {
      this.$api.common_semester()
      .then((response) => {
        const totalWeeks = response.data.weeks;

         // 根据总周数动态生成 options 数组
         this.options = Array.from({ length: totalWeeks }, (_, index) => ({
            value: `选项${index + 1}`,
            label: `第${index + 1}周`
          }));
      }).catch((err) => {
        alert(err);
      });
    },
    /**
     * 分析每一列，找出相同的
     * @param data
     */
    getSpanArr() {
      for (let i = 0; i < this.tableData.length; i++) {
        let row = i;
        // let col = i % this.colCount;
        if (row === 0) {
          // i 表示行 j表示列
          for (let j = 0; j < this.colFields.length; j++) {
            this.spanArr[i * this.colFields.length + j] = {
              rowspan: 1,
              colspan: 1,
            };
          }
        } else {
          for (let j = 0; j < this.colFields.length; j++) {
            // 当前和上一次的一样
            //  合并所有列的相同数据单元格
            if (this.colFields[j] == "space" || this.colFields[j] == "lab") {
              // 指定合并哪些列
              if (
                this.tableData[row][this.colFields[j]] ===
                this.tableData[row - 1][this.colFields[j]]
              ) {
                let beforeItem =
                  this.spanArr[(row - 1) * this.colFields.length + j];
                this.spanArr[row * this.colFields.length + j] = {
                  rowspan: 1 + beforeItem.rowspan,
                  colspan: 1,
                };
                beforeItem.rowspan = 0;
                beforeItem.colspan = 0;
              } else {
                // rowspan 和 colspan 都为1表格此单元格不合并
                this.spanArr[row * this.colFields.length + j] = {
                  rowspan: 1,
                  colspan: 1,
                };
              }
            }
          }
        }
      }
      // 对数据进行倒序
      let stack = [];
      for (let i = 0; i < this.colFields.length; i++) {
        for (let j = 0; j < this.tableData.length; j++) {
          // console.log("i=" + i + " j=" + j);
          // i 表示列 j表示行
          if (j === 0) {
            if (this.spanArr[j * this.colFields.length + i].rowspan === 0) {
              stack.push(this.spanArr[j * this.colFields.length + i]);
            }
          } else {
            if (this.spanArr[j * this.colFields.length + i].rowspan === 0) {
              stack.push(this.spanArr[j * this.colFields.length + i]);
            } else {
              stack.push(this.spanArr[j * this.colFields.length + i]);
              while (stack.length > 0) {
                let pop = stack.pop();
                let len = stack.length;
                this.spanArr[(j - len) * this.colFields.length + i] = pop;
              }
            }
          }
        }
      }
      // console.log(this.spanArr);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(this.spanArr[rowIndex * this.colFields.length + columnIndex]);
      return this.spanArr[rowIndex * this.colFields.length + columnIndex];
    },
  },
  mounted() {
    this.getSpanArr();
  },
};
</script>
<style lang="scss" scoped>
</style>