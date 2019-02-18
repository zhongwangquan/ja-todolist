
var app = new Vue({
    el: "#app",
    data: {
        todos: [{
                id: 1,
                content: "吃饭",
                f: false,

            },
            {
                id: 2,
                content: "睡觉",
                f: false
            },
            {
                id: 3,
                content: "打豆豆",
                f: false
            }
        ],
        footers: [{
            id: 1,
            content: "A",
            f: true,

        },
        {
            id: 2,
            content: "F",
            f: true
        },
        {
            id: 3,
            content: "U",
            f: true
        }
    ],

        delFlag: false,
        inputFlag: false,
        num: "",
        type: "A",
        inputValue: ""

    },
    methods: {

        changeStates(index) {

            var flag = this.todos[index].f;
            flag = !flag;
            this.todos[index].f = flag;


            return flag;
        },
        input(){
            this.inputFlag = true;
        },
        del(index) {

            const i = this.todos[index].f;


            if (i) {
                this.todos.splice(index, 1)

            } else {
                console.log("删除错误");
                this.delFlag = true;
                this.num = index;

            }

        },
        cancelDel() {
            this.delFlag = false;
        },
        confirmDel() {
            this.delFlag = false;
            this.todos.splice(this.num, 1)
        },
        cancelInput() {
            this.inputFlag = false;
        },
        confirmInput() {
            this.inputFlag = false;
            
            this.todos.push({

                id: this.todos.length +1,
                content: this.inputValue,
                f: false 

            })
        }

    },
    computed: {
        
        finishList(){
          return  this.todos.filter((elm)=>

                elm.f == true
            )
    
        },
        unFinishList(){
          return  this.todos.filter((elm)=>
                elm.f == false
            )
    
        },
        switchTab(){
            switch(this.type){
                case "A":
                    return this.todos;
                    break;
                case "F":
                    return this.finishList;
                    break;
                case "U":
                    return this.unFinishList;
                    break;
                default:
                    break;
                
            }
        }
    }

})