<template>
  <div id="detail-body">
    <Nav></Nav>
    <div class="container">
      <form class="search-area">
        <input type="text" placeholder="搜索你想要的车型">
        <button @submit.prevent="null">搜索</button>
      </form>
      <div class="row vehicle">
        <div class="column col-lg-6">
          <img src="../assets/vehicle.jpg" alt="vehicale">
          <div class="vehicle-album">
            <img src="../assets/vehicle.jpg" alt="vehicale" class="col-lg-3">
            <img src="../assets/vehicle.jpg" alt="vehicale" class="col-lg-3">
            <img src="../assets/vehicle.jpg" alt="vehicale" class="col-lg-3">
            <img src="../assets/vehicle.jpg" alt="vehicale" class="col-lg-3">
            <img src="../assets/vehicle.jpg" alt="vehicale" class="col-lg-3">
          </div>
        </div>
        <div class="col-lg-6 vehicle-info">
          <div class="row">
            <div class="title col-lg-12">{{detail.title}}</div>
            <div class="tag">
              保卖车
            </div>
            <div class="tag">
              降价急售
            </div>
            <div class="tag">
              0过户
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 vehicle-introduce">
              <div class="prop">
                <span class="name">里程数</span>
                <span class="value">20</span>
              </div>
              <div class="prop">
                <span class="name">里程数</span>
                <span class="value">20</span>
              </div>
              <div class="prop">
                <span class="name">里程数</span>
                <span class="value">20</span>
              </div>
              <div class="prop">
                <span class="name">里程数</span>
                <span class="value">20</span>
              </div>
            </div>
          </div>
          <div class="row well">
            <div class="col-lg-3">买家报价</div>
            <div class="col-lg-3 price">61.98万</div>
            <div class="col-lg-3 tax">新车含税</div>
            <div class="col-lg-3">降价提醒</div>
            <div class="col-lg-3 prop">报价</div>
            <div class="col-lg-9">
              <span class="price currency">5.60万</span>
              <span class="price currency">含税9.5万</span>
            </div>

            <div class="col-lg-3 prop">服务费</div>
            <div class="col-lg-9">
              <span class="price currency">3000</span>
              <span class="help"></span>
            </div>

            <div class="col-lg-3 prop">服务项</div>
            <div class="col-lg-9">
              <span>整车质保</span>
              <span>14天可退</span>
              <span>249项车况检测</span>
            </div>

          </div>

          <div class="row action">
            <div v-if="!appointed_appo" class="action">
              <div v-if="!show_appo">
                <button @click="show_appo=true" class="btn btn-primary">预约看车</button>
                &nbsp;
                <span class="tel">400-080-5027</span>
              </div>
              <form v-if="show_appo" @submit="submit_appo">
                <div class="input-control">
                  <label for="appointed_at">预约时间</label>
                  <input v-validator="'required'" id="appointed_at" type="date" v-model="appo.appointed_at">
                </div>
                <div class="input-control btn-group">
                  <button type="submit" class="btn-primary">预约</button>
                  <button @click="show_appo=false">取消</button>
                </div>
              </form>
            </div>

            <div v-else class="action">
              <button class="btn btn-primary" disabled>已预约</button>
              <p style="font-size:14px">
                预约时间：{{appointed_appo.appointed_at | only_day}}
              </p>
            </div>
          </div>

        </div>
      </div>
      <div class="vehicle-detail bg-white">
        <h2>车辆详情</h2>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <ReportPanel title="排除重大事故检测" cat="major_accident" :reportStructure="report_structure" :report="report" />
            </div>
            <div class="col-lg-6">
              <ReportPanel title="泡水火烧检测" cat="soaking_and_roasting" :reportStructure="report_structure" :report="report" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ReportPanel title="轻微碰撞检测" cat="minor_crash" :reportStructure="report_structure" :report="report" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <ReportPanel title="易损耗部件检测" cat="consumable" :reportStructure="report_structure" :report="report" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-2">
              <ReportPanel title="安全系统检测" cat="security_system" :reportStructure="report_structure" :report="report" />
            </div>
            <div class="col-lg-2">
              <ReportPanel title="外部配置检测" cat="surface_peripheral" :reportStructure="report_structure" :report="report" />
            </div>
            <div class="col-lg-2">
              <ReportPanel title="内部配置检测" cat="inner_peripheral" :reportStructure="report_structure" :report="report" />
            </div>
            <div class="col-lg-2">
              <ReportPanel title="灯光系统检测" cat="lighting_system" :reportStructure="report_structure" :report="report" />
            </div>
            <div class="col-lg-2">
              <ReportPanel title="高科技配置检测" cat="high_tech" :reportStructure="report_structure" :report="report" />
            </div>
            <div class="col-lg-2">
              <ReportPanel title="随车工具检测" cat="tool" :reportStructure="report_structure" :report="report" />
            </div>
          </div>
          <div class="row">

            <div class="col-lg-6 dashed">
              <div class="sub-title">合作认证车辆介绍</div>
              <div class="detail">
                这辆车是2015年8月首次上牌，到现在已经行驶了1.86万公里。车子平时开得不多，在我的精心呵护下，无论驾驶质感还是内饰氛围都和新车相差无几。最满意的一点当然是油耗了，其次是空间，动力我也觉得够用。这是我买的新车，纯个人一手车。每天开车前都会认真检查一下车辆，开的也是四平八稳。我对车还是比较温柔的，用车频率不是很高，总里程很少，车况一直很好，和新车也没差什么，没有遇到过什么烦人的毛病，很省心，这对我来说就足够了。好车不容错过，赶紧联系我看车吧！
              </div>
            </div>
            <div class="col-lg-6">
              <div class="sub-title">车辆手续信息</div>
              <div class="col-lg-6">
                <table>
                  <tbody>
                    <tr>
                      <td>年检到期时间</td>
                      <td>2019-08</td>
                    </tr>
                    <tr>
                      <td>商业险到期时间</td>
                      <td>2019-08</td>
                    </tr>
                    <tr>
                      <td>有无购车发票</td>
                      <td>否</td>
                    </tr>
                    <tr>
                      <td>是否4S店保养</td>
                      <td>否</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-6">
                <table>
                  <tbody>
                    <tr>
                      <td>交强险到期时间</td>
                      <td>2019-08</td>
                    </tr>
                    <tr>
                      <td>过户次数</td>
                      <td>0次</td>
                    </tr>
                    <tr>
                      <td>车辆购置税完税证明</td>
                      <td>无</td>
                    </tr>
                    <tr>
                      <td>有无改装</td>
                      <td>无</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="preview">
            <div class="title"></div>
            <div class="desc"></div>
            <div>
              <div class="col-lg-6">
                <div class="card">
                  <img src="../assets/vehicle.jpg">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <img src="../assets/vehicle.jpg">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <img src="../assets/vehicle.jpg">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <img src="../assets/vehicle.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Nav from '../components/Nav';
import SearchInput from '../components/SearchInput';
import api from '../assets/js/api.js';
import ReportPanel from './../components/ReportPanel';
import session from './../assets/js/session.js';

export default {
  mounted() {
    let id = this.get_id();
    this.find(id);
    this.find_report_by_vehicle(id);
    this.get_report_structure();
    this.prepare_appo_row();
    this.has_appointed();
  },
  data() {
    return {
      show_appo: false,
      appo: {},
      appointed_appo: {},
      selected_preview: 0,
      detail: {},
      report: {},
      report_structure: {}
    };
  },
  methods: {
    find(id) {
      api('vehicle/find', { id }).then(r => (this.detail = r.data));
    },

    get_id() {
      return this.$route.params.id;
    },
    find_report_by_vehicle(vid) {
      api('report/first', {
        where: { vehicle_id: vid }
      }).then(r => {
        this.report = r.data;
      });
    },

    get_report_structure() {
      api('MODEL/FIND', { name: 'report' }).then(r => {
        this.report_structure = r.data.structure;
      });
    },
    submit_appo(e) {
      e.preventDefault();

      let row = this.appo;

      api('appo/create', row).then(r => {
        this.has_appointed();
      });
    },

    prepare_appo_row() {
      this.appo.vehicle_id = this.get_id();
      this.appo.user_id = session.uinfo().id;
    },

    has_appointed() {
      let row = this.appo;
      let query = `where("vehicle_id" = ${row.vehicle_id} and "user_id" = ${row.user_id})`;

      api('appo/read', { query }).then(r => {
        this.appointed_appo = r.data[0];
      });
    }
  },
  components: {
    Nav,
    SearchInput,
    ReportPanel
  }
};
</script>

<style>
#detail-body {
  background-color: white;
}
.container {
  max-width: 900px;
  margin: 0 auto;
}

.search-area {
  text-align: center;
  margin-top: 20px;
}

.search-area input,
.search-area button {
  display: inline-block;
  vertical-align: top;
  line-height: 1.1;
  border: 1px solid slategrey;
  height: 30px;
}

.search-area input {
  width: 35%;
}

.search-area input::-webkit-input-placeholder {
  padding: 10px;
}

.search-area button {
  width: 5%;
  outline: none;
  border-left: 0;
}

.search-area button:hover {
  background-color: #fd521d;
}

.action > * {
  display: inline-block;
  font-size: 1rem;
  margin-right: 10px;
}

.action button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
  color: darkturquoise;
}

.vehicle .vehicle-album {
  /* margin-top: 10px; */
  margin: 10px -5px;
  white-space: nowrap;
  overflow: auto;
}

.vehicle .vehicle-info {
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
}

.vehicle-info > div {
  margin-bottom: 10px;
}

.vehicle .vehicle-info .title {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.vehicle-introduce {
  background-color: teal;
  padding: 10px;
}

.vehicle-introduce > .prop {
  display: inline-block;
  width: 25%;
  color: wheat;
}

.vehicle-introduce .prop .name,
.vehicle-introduce .prop .value {
  display: block;
  /* text-align: center; */
}

.well {
  background-color: antiquewhite;
}

.thumbnail-list {
  margin-top: 5px;
  margin-bottom: 10px;
}

.vehicle-detail {
  margin-top: 20px;
}

.vehicle-detail .container > .row {
  margin-bottom: 10px;
}

.dashed {
  margin-top: 10px;
  border-right: 1px dashed #ddd;
}

h2 {
  margin: 0;
  padding: 20px 0;
  text-align: center;
  font-weight: normal;
  border-bottom: 1px dashed #ddd;
}

.sub-title {
  padding: 10px 0;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10px;
}
</style>
