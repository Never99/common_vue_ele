<template>
    <div>
        <!--给全选按钮绑定v-mode变量，值为true时就是选中状态，绑定点击事件，执行全选和反选操作-->
        <input type='checkbox' class='input-checkbox' v-model='checked' v-on:click='checkedAll'>全选
        <div v-for='checkb in checkboxData' :key="checkb.id">
            <!--给每个复选按钮绑定同一个v-mode数组变量，数组里面有相应的value就被选中-->
            <input type='checkbox' name='checkboxinput' class='input-checkbox' v-model='checkboxList' :value="checkb.id">{{checkb.value}}
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        checkedAll: function() {
            if (this.checked) {//实现反选
                this.checkboxList = [];
            } else { //实现全选
                this.checkboxList = [];
                this.checkboxData.forEach( (item) => {
                    this.checkboxList.push(item.id);
                });
            }
        }
    },
    watch: { //深度 watcher
        checkboxList: {
            handler: function (val, oldVal) { 
                if (this.checkboxList.length === this.checkboxData.length) {
                    this.checked=true;
                } else {
                    this.checked=false;
                }
            },
            deep: true
        }
    },
    data () {
        return {
            checkboxData:[{
                id:'1',
                value:'苹果'
            },{
                id:'2',
                value:'荔枝'
            },{
                id:'3',
                value:'香蕉'
            },{
                id:'4',
                value:'火龙果'
            }],
            checkboxList:[],
            checked: false
        }
    }
};
</script>