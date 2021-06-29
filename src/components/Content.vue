<template>
  <div class="container">
    <!-- START HERE -->
    <div
      class="row"
      v-for="(multiplierPart, index) in filteredPosts"
      :key="index"
    >
      <div class="col s12 m6" v-for="post in multiplierPart" :key="post.id">
        <!-- CARD WITH IMAGE -->
        <div class="card">
          <div class="card-image">
            <img :src="post.cardImage" />
            <span class="card-title" v-text="post.cardTitle"></span>
          </div>
          <div class="card-content">
            <p v-text="post.cardContent"></p>
          </div>
          <div class="card-action">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <!-- END HERE -->
  </div>
</template>

<script>
import img1 from '@/assets/img/img1.jpg';
import img2 from '@/assets/img/img2.jpg';
import img3 from '@/assets/img/img3.jpg';
import img4 from '@/assets/img/img4.jpg';
import img5 from '@/assets/img/img5.jpg';
import img6 from '@/assets/img/img6.jpg';
import img7 from '@/assets/img/img7.jpg';
import img8 from '@/assets/img/img8.jpg';

export default {
  name: 'ContentComponent',
  data: function() {
    return {
      posts,
      multiplier: 2
    };
  },
  computed: {
    filteredPosts() {
      const filteredPosts = [];
      let multiplierPart = [];
      posts.forEach((post, index) => {
        if (index % this.multiplier === 0 && multiplierPart.length !== 0) {
          filteredPosts.push(multiplierPart);
          multiplierPart = [];
        }
        multiplierPart.push(post);
      });
      return filteredPosts;
    }
  }
};

const posts = [
  {
    id: 1,
    cardImage: img1,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 2,
    cardImage: img2,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 3,
    cardImage: img3,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 4,
    cardImage: img4,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 5,
    cardImage: img5,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 6,
    cardImage: img6,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 7,
    cardImage: img7,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  },
  {
    id: 8,
    cardImage: img8,
    cardTitle: 'Card Image',
    cardContent:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi harum enim inventore ullam expedita nesciunt ea voluptatem corporis iusto sint?'
  }
];
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import 'Content.less';

</style>
