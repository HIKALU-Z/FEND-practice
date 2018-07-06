<template>
  <div>
    <Nav></Nav>
    <div class="slider">
      <img src="../assets/home/slider1.webp">
      <!--<div class="short-cuts">-->
      <!--<a href="#">Item</a>-->
      <!--<a href="#">Item</a>-->
      <!--<a href="#">Item</a>-->
      <!--<a href="#">Item</a>-->
      <!--</div>-->
    </div>
    <div class="query-area">
      <div class="container">
        <div class="row col-lg-8">
          <div class="col-lg-3 huge-text">买</div>
          <div class="col-lg-9">
            <div>
              <span class="tag">大众</span>
              <span class="tag">别克</span>
              <span class="tag">雪佛兰</span>
              <span class="tag">福特</span>
              <span class="tag">五菱</span>
              <span class="tag">大众</span>
              <span class="tag">别克</span>
              <span class="tag">雪佛兰</span>
              <span class="tag">福特</span>
              <span class="tag">五菱</span>
            </div>
            <div>
              <span class="tag">3万以下</span>
              <span class="tag">10万以下</span>
              <span class="tag">20万以下</span>
              <span class="tag">20万以下</span>
            </div>
            <div>
              <span class="tag">大众</span>
              <span class="tag">别克</span>
              <span class="tag">雪佛兰</span>
              <span class="tag">福特</span>
              <span class="tag">五菱</span>
            </div>
          </div>
        </div>
        <div class="row col-lg-4">
          <div class="col-lg-3 huge-text">卖</div>
          <div class="col-lg-9 right">
            <a style="margin-top: 15px; display: inline-block;" class="btn btn-primary btn-fat">极速卖车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="guarantee">
      <div class="row container">
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <div>
              <div class="title">分期购车</div>
              <div class="desc">门槛低 审批快</div>
            </div>
            <div>
              <img src="../assets/home/guarantee1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="vehicle-nav">
        <div class="container">
          <div class="item">特价好车</div>
          <div class="item">5万以下</div>
          <div class="item">5-10万</div>
          <div class="item">超值SUV</div>
          <div class="item">急售降价车</div>
          <div class="item">更多</div>
        </div>
      </div>

      <div class="container">
        <div class="vehicle-list row">
          <div v-for="row in mainList" :key="row.title" class="col-lg-3">
            <div class="card">
              <div class="thumbnail">
                <img :src="row.preview ? row.preview[0].url :
                'https://image1.guazistatic.com/qn180618155102242081e88c459a11926744030df0971b.jpg?imageView2/1/w/287/h/192/q/88'">
              </div>
              <div class="detail">
                <div class="title">{{row.title}}</div>
                <div class="desc">2015年02月 / 3.07万公里</div>
                <div class="others">
                  <span class="price">{{row.price}}</span>
                  <span>首付3.5万</span>
                  <a class="btn btn-primary buy">购买</a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-3">
            <div class="card">
              <div class="thumbnail">
                <img src="../assets/home/vehicle-list-thumbnail1.webp">
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
          </div> -->
        </div>

      </div>

    </div>
    <div class="footer">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur beatae debitis deleniti doloribus, earum esse excepturi fugit impedit ipsum maxime, nulla optio porro quam quibusdam, sint tempora unde vel?
    </div>
  </div>
</template>

<script>
import '../assets/css/vehicle-list.css';
import Nav from '../components/Nav';
import api from '../assets/js/api.js';
export default {
  components: {
    Nav
  },
  mounted() {
    this.read('main');
  },
  data() {
    return {
      mainList: []
    };
  },
  methods: {
    read(type) {
      api('vehicle/read').then(r => {
        this[type + 'List'] = r.data;
      });
    }
  }
};
</script>

<style scoped>
.slider {
  height: 350px;
}

.query-area {
  padding: 15px;
  background: #fff;
}

.tag {
  display: inline-block;
  font-size: 0.7rem;
  padding: 5px;
  cursor: pointer;
}

.huge-text {
  position: relative;
  top: 5px;
  left: 20px;
  color: #fd521d;
}

.guarantee .col-lg-3 {
  padding: 20px;
}

.guarantee .card {
  padding: 15px;
  background: #fff;
}

.guarantee .title {
  margin-bottom: 10px;
}

.guarantee .desc {
  font-size: 0.7rem;
  color: #999;
}

.vehicle-nav .item {
  display: inline-block;
  width: 16.66666666666%;
  text-align: center;
  background: #fff;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left-width: 0;
}

.vehicle-nav .item:first-child {
  border-left-width: 1px;
}
</style>
