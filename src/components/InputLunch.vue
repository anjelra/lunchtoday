<template>
    <section class="wrap-ipt">
        <input type="text" class="ipt-lunch" v-model="newMenuName" v-on:keypress.enter="addLunch">
        <button class="btn-add" @click="addLunch">메뉴추가</button>
        <button class="btn-spin" @click="spinlunch">오늘 뭐먹을지 돌려보자</button>
        
    </section>
</template>

<script>
export default {
  name: 'InputLunch',
  created() {
    // this.$store.dispatch('selectAllGroups');
    this.$store.dispatch('selectAllMenus');
  },
  props: {
    
  },
  data() {
    return {
      newMenuName: null,
      selected: 1,
    }
  },
  computed: {
    setLunchGroup() {
      // 바로 created 에서 props에 복사 하면 안되고 computed 를 이용해서 받아와서 조작해야함
      return this.$store.state.options;
    },
    setSaveWheel: {
      get: function() {
          return this.$store.state.saveWheel;
      }
    },
    getLunchMenu() {
      return this.$store.state.moduleMenu.allMenus;
    },
    grouplist: {
      get: function() {
        return this.$store.state.menuGroup.groups;
      },
      set: function(val) {
        this.$store.dispatch('selectMenusOneGroup', val);
        this.selected = val;
      }
    },
  },
  methods: {
    addLunch() {
      if (this.newMenuName == null) {
        alert('메뉴를 입력해 주세요.');
        return;
      }

      this.$store.dispatch('insertMenu', this.newMenuName);
      this.$store.dispatch('selectAllMenus');
    },
    spinlunch() {
      let rand2 = Math.floor(Math.abs(Math.random() * 10000)) + (360/this.getLunchMenu.length) + 1;
      if(this.getLunchMenu.length > 0) {
          const canvas = document.querySelector('.lunchCircle');
          canvas.style.transform = "rotate("  + rand2 + "deg)"
          // canvas의 트랜지션 이벤트가 끝나고 나서 saveCurrentWheel 메서드 실행
          // this bind 문제 때문에 arrow function을 사용, arrow function을 사용 하면
          // arrow function 안에서의 this는 obj를 가리키기 때문에 scope 변화 없음.
          canvas.addEventListener('webkitTransitionEnd',() => {
              this.saveCurrentWheel(rand2);
          }, false);
      } else {
          alert('돌릴 메뉴 리스트를 입력해 주세요.');
      }
    },
    saveCurrentWheel(current) {
        this.todayLunch = '';
        var randomDeg = 360 - (current % 360);
        var len = this.getLunchMenu.length;
        var sliceDeg = 360/len;
        var saveWheel = this.setSaveWheel;
        
        for(var i = 0; i < len; i++) {
            if(randomDeg > saveWheel[i].deg && saveWheel[i].deg + sliceDeg > randomDeg){
                // 정말 이딴식으로 하는것이 맞는가?
                this.$store.commit('updateResult', {'menu': saveWheel[i].menu, 'color': saveWheel[i].color});
            }
        }

        if (!this.$store.state.todayLunch || !this.$store.state.currentTxtColor) {
          alert('결과가 애매합니다. \n 다시 시도해 주세요.');
        }
    },
  }
}
</script>

