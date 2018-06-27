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
          </div>
        </div>
        <div class="col-lg-6 vehicle-info">
          <div class="row">
            <div class="title col-lg-12">玛莎拉蒂-Ghibli 2014款 3.0T 标准版</div>
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
            <a class="btn btn-primary col">预约看车</a>
            <span class="tel col-lg-3">400-080-5027</span>
          </div>

        </div>
      </div>
      <div class="vehicle-detail bg-white">
        <h2>车辆详情</h2>
        <div class="container">
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
import Nav from './../components/Nav';
export default {
  components: {
    Nav
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

.vehicle {
  padding-top: 20px;
}

.vehicle .vehicle-album {
  margin-top: 10px;
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
