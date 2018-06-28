<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <SearchInput></SearchInput>
          <!-- <h1>Search</h1> -->
          <!-- <Dropdown displayKey="type" :list="vehicleTypeList" :onSelect='dropDownSelect'></Dropdown> -->
        </div>
      </div>

    </div>
    <div class="container">
      <div class="filter-list">
        <div class="filter">
          <div class="col-lg-1 prop">品牌</div>
          <div class="col-lg-10 range">
            <span>不限</span>
            <span>大众</span>
            <span>福特</span>
            <span>奔驰</span>
            <span>现代</span>
            <span>大众</span>
            <span>福特</span>
            <span>奔驰</span>
            <span>现代</span>
            <span>大众</span>
            <span>福特</span>
            <span>奔驰</span>
            <span>现代</span>
          </div>
          <div class="col-lg-1 right">
            <button>all</button>
          </div>
        </div>
        <div class="filter">
          <div class="col-lg-1 prop">车系</div>
          <div class="col-lg-10 range">
            <span>不限</span>
            <span>朗逸</span>
            <span>奔特</span>
            <span>福驰</span>
            <span>大代</span>
            <span>现众</span>
            <span>朗逸</span>
            <span>奔特</span>
            <span>福驰</span>
            <span>大代</span>
            <span>现众</span>
          </div>
          <div class="col-lg-1 right">
            <button>all</button>
          </div>
        </div>
        <div class="filter">
          <div class="col-lg-1 prop">价格</div>
          <div class="col-lg-10 range">
            <span>3万以下</span>
            <span>3-5万</span>
            <span>5-8万</span>
            <span>8-10万</span>
            <span>10-15万</span>
            <span>15-20万</span>
            <span>20-30万</span>
            <span>30万以上</span>
          </div>
        </div>
        <div class="filter">
          <div class="col-lg-1 prop">更多</div>
          <div class="col-lg-10 range">
            <div class="row">
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
              <Dropdown class="col-lg-2" displayKey="type" :onSelect="dropDownSelect" :list="vehicleTypeList" />
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="container">
      <div class="row vehicle-list">
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div class="thumbnail">
              <img src="../assets/vehicle.jpg">
            </div>
            <div class="detail">
              <div class="title">大众-高尔夫 2014款 1.6L 自动舒适型</div>
              <div class="desc">2015年02月 / 3.07万公里</div>
              <div class="others">
                <span class="price">11.5万</span>
                <span>首付3.5万</span>
                <a class="btn btn-primary buy">购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/vehicle-list.css';
import Nav from '../components/Nav';
import SearchInput from '../components/SearchInput';
import Dropdown from '../components/Dropdown';
export default {
  components: {
    Dropdown,
    Nav,
    SearchInput
  },
  data() {
    return {
      vehicleTypeList: [{ type: 'SUV', id: '1' }, { type: 'MPV', id: '2' }]
    };
  },
  methods: {
    dropDownSelect: function(row) {
      return row;
    }
  }
};
</script>

<style scoped>
.filter-list {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  /*padding: 5px;*/
}

.filter {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 5px;
  padding-bottom: 5px;
}

.filter:first-child {
  border-top: 0;
}

.filter > * {
  vertical-align: middle;
}

.filter .prop,
.filter .range > * {
  padding: 5px 10px;
}

.filter .range > * {
  margin-right: 2px;
}

.filter .range > .active {
  background: #fd521d;
  color: #fff;
}

.filter .others button {
  background: transparent;
  border: 0;
}

.filter .others button,
.filter .dropdown {
  padding: 2px 5px;
}
</style>
