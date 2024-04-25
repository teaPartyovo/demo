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
          number: "1",
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
          number: "2",
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
          number: "3",
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
          number: "4",
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
          number: "5",
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
          number: "6",
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
          number: "7",
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
          number: "8",
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
          number: "9",
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
      options: [{
          value: '选项1',
          label: '第一周'
        }, {
          value: '选项2',
          label: '第二周'
        }, {
          value: '选项3',
          label: '第三周'
        }, {
          value: '选项4',
          label: '第四周'
        },{
          value: '选项5',
          label: '第五周'
        },{
          value: '选项6',
          label: '第六周'
        },{
          value: '选项7',
          label: '第七周'
      }],
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
  methods: {
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