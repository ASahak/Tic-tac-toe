
var tab_common = document.querySelectorAll(".tab_common tr td"),
      you_strong = document.querySelector(".you strong"),
      pc_strong = document.querySelector(".pc strong"),
      you_result = document.querySelector(".you_result"),
      emp_arr = [], 
      ind_arr = [[], []],
      bat_arr = [],
      emp_val = [],
      count_true =0,
      matrec_arr = [],
      matrec_bool = false,
      go_bool = false,
      matrec_bool_easy = false,
      inner = "<svg class='chart' data-percent='100' width='100%' height='100%'><circle class='outer' cx='35' cy='35' r='17'/></svg>",
      inner_X = "<div class='x'><span class='x1'></span><span class='x2'></span></div>";
var a = Math.floor(Math.random()*9);

tab_common.forEach((elm, mls)=>{
    emp_arr.push(elm)
    elm.onclick = function(){
        if(go_bool == false){
            document.querySelector(".btn_res").style.background = "red"
            document.querySelector(".btn_res_2").style.background = "red"
        }
        var self = this;
        return {
            a:elm,
            f: workd_func(self, emp_arr),
            e:worked_func_easy(self, emp_arr)
        }
    }
})
function setTime(){
    setTimeout(function(){
        window.location.reload()
    }, 1000)
}
localStorage.clickcountt =Number(localStorage.clickcountt)+1
you_strong.innerHTML = localStorage.clickcount;
pc_strong.innerHTML = localStorage.clickcoun;
//function rem(){       
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount);
     you_strong.innerHTML = localStorage.clickcount;
    } else {
        localStorage.clickcount = 0;
        you_strong.innerHTML = localStorage.clickcount;
    }
    if (localStorage.clickcoun) {
        localStorage.clickcoun = Number(localStorage.clickcoun);
     pc_strong.innerHTML = localStorage.clickcoun;
    } else {
        localStorage.clickcoun = 0;
        pc_strong.innerHTML = localStorage.clickcoun;
    }
//}

function goHard(){
    document.querySelector(".butts").style.top = -50 +"px"
    matrec_bool = true;
    go_bool = true;
    tab_common[a].innerHTML = inner; 
}
function goEasy(){
    document.querySelector(".butts").style.top = -50 +"px"
    tab_common[a].innerHTML = inner; 
    matrec_bool_easy = true;
    go_bool = true;
}
var func_obj = {
    opa:function(){
        tab_common.forEach((elm, mls)=>{
            tab_common[mls].style.opacity = "0.4"
            tab_common[mls].style.background = "rgba(0,0,0,0.3)"
        })  
    },
    back_opa:function(a, b){
        if(a !== undefined){
            a.forEach((elm, mls)=>{
                tab_common[a[mls]].style.opacity = "1"
                tab_common[a[mls]].style.background = "rgba(0,0,0,0.5)"
            }) 
        }
        if(b !== undefined){
            b.style.opacity = "1"
            b.style.background = "rgba(0,0,0,0.5)";
        }
    }
}
function call_opa(o){
    this.opac = o;
    return this[o];
}
var any_func = call_opa.call(func_obj, "opa");
var any_func2 = call_opa.call(func_obj, "back_opa");

var as = [[0,1,2],[3,4,5],[6,7,8]];
const first_obj=  {
    0:[1,2,3,6],
    8:[2,5,7,6],
    2:[0,1,5,8],
    6:[0,3,7,8],
    4:[0,1,2,3,5,6,7,8],
    1:[0,2],
    3:[0,6],
    5:[8,2],
    7:[6,8]
},
second_obj = {
    nul:[0,1,2],
    one:[3,4,5],
    two:[6,7,8],
    three:[0,3,6],
    four:[1,4,7],
    five:[2,5,8],
    six:[0,4,8],
    seven:[2,4,6]
};
var shuffleArray = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}


var worked_func_easy = function(e, i){
    if(e.innerHTML=="" && matrec_bool_easy == true){
        var asad_shuffle, find_empty,  comm_arr = [[], []];
        count_true++;
        matrec_bool_easy = false;
        e.innerHTML = inner_X;
        emp_val = [];
        ind_arr[0] = []
        ind_arr[1] = [];
        var svg;    
        var svg_x;
        i.forEach((elm, mls)=>{
            svg = i[mls].innerHTML.split("<").join().substr(1,3);
            svg_x = i[mls].innerHTML.split("<").join().substr(5,9);
            if(svg == "svg"){
                ind_arr[0].push(mls)
            }
            if(svg_x == 'class="x"'){
                ind_arr[1].push(mls)
            }
            if(i[mls].innerHTML == ""){
                emp_val.push(mls)
            }
        })
        asad_shuffle = shuffleArray(emp_val);
        ind_arr[0].push(asad_shuffle[0])
        bat_arr = [[...ind_arr[0]], [...ind_arr[1]]];
        if(emp_val.length >= 0){
            for(var key in second_obj){
                matrec_arr.push(second_obj[key])
            }
            matrec_arr.map((eml, mls)=>{
                var emp_matrec = matrec_arr[mls].filter(function(e){
                    return this.indexOf(e) < 0;
                }, bat_arr[1])
                var emp_matrec_1 = matrec_arr[mls].filter(function(e){
                    return this.indexOf(e) < 0;
                }, bat_arr[0])
                if(emp_matrec.length == 0){
                    comm_arr[0] = [...matrec_arr[mls]]
                }
                if(emp_matrec_1.length == 0){
                    comm_arr[1] = [...matrec_arr[mls]]
                }
            })
            console.log(comm_arr)
            setTimeout(function(){
                    console.log(matrec_bool_easy )
                    i[asad_shuffle[0]].innerHTML = inner;
                    matrec_bool_easy = true;
            }, 1000)
           
            if(comm_arr[0].length == 3){
                setTimeout(function(){
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount)+1;
                     you_strong.innerHTML = localStorage.clickcount;
                    } else {
                        localStorage.clickcount = 1;
                        you_strong.innerHTML = localStorage.clickcount;
                    }
                    
                    i[asad_shuffle[0]].innerHTML = "";
                    matrec_bool_easy = false;
                    any_func();
                    any_func2(comm_arr[0], undefined);
                    you_result.innerHTML = "You win!";
                    you_result.style.background = "#2eb7a4";
                    setTime()
                }, 1000)
            }
            else if(comm_arr[1].length == 3){
                setTimeout(function(){
                    if (localStorage.clickcoun) {
                        localStorage.clickcoun = Number(localStorage.clickcoun)+1;
                     pc_strong.innerHTML = localStorage.clickcoun;
                    } else {
                        localStorage.clickcoun = 1;
                        pc_strong.innerHTML = localStorage.clickcoun;
                    }
                    matrec_bool_easy = false;
                    any_func();
                    any_func2(comm_arr[1], undefined);
                    you_result.innerHTML = "You lost!";
                    you_result.style.background = "#e25e5e";
                    setTime()
                }, 1000)
            }
            else{
                if(count_true == 4){
                    setTimeout(function(){
                        any_func();
                        you_result.innerHTML = "No one!";
                        you_result.style.background = "#06060685";
                        setTime()
                    }, 1000)
                }
            }
        }
    }
}

var workd_func = function(e, i){
    
    if(e.innerHTML=="" && matrec_bool == true){
        matrec_bool = false;
        e.innerHTML = inner_X;
        count_true++;
        emp_val = [];
        ind_arr[0] = []
        ind_arr[1] = [];
        var svg;    
        var svg_x;    
        i.forEach((elm, mls)=>{
            svg = i[mls].innerHTML.split("<").join().substr(1,3)
            svg_x = i[mls].innerHTML.split("<").join().substr(5,9)
            if(svg == "svg"){
              ind_arr[0].push(mls)
            }
            if(svg_x == 'class="x"'){
                ind_arr[1].push(mls)
            }
             if(i[mls].innerHTML == ""){
                emp_val.push(mls)
            }
        })
        bat_arr = [[...ind_arr[0]], [...ind_arr[1]]];
        bat_arr[1].sort();
        var at_last = {
            first_steep:function(){
                var bool_frt = 0;
                const emp_true = () =>{
                    emp_val.map((elm, mls) =>{
                        if(emp_val[mls] == 4) bool_frt = emp_val[mls];
                    })
                    return bool_frt
                }
                if(emp_true()){
                    i[emp_true()].innerHTML = inner;
                }
                else{
                   if(bat_arr[0][0] == 4){
                        first_obj[4].map((elm, mls) => {
                            if(elm == bat_arr[1][0]){
                                var fill_not_X = [0,2,6,8].filter(function(e){
                                    return this.indexOf(e) <0 
                                }, bat_arr[1]);
                                fill_not_X = shuffleArray(fill_not_X);
                                i[fill_not_X[0]].innerHTML = inner;
                            }
                        })
                    }
                    else{
                        for(var key in first_obj){
                            if(bat_arr[0][0] == key){
                                first_obj[key] = shuffleArray(first_obj[key]);
                                i[first_obj[key][0]].innerHTML = inner;
                            }
                        }
                    }
                }
            },
            second_steep:function(){
                var count_array = [[0,1,2,4], [2,4,5,8], [0,3,4,6], [4,6,7,8]];
                for(var key in second_obj){
                    matrec_arr.push(second_obj[key]);
                }  
                function Ready_matrec(a){
                    var right_num, has_num, filtered;
                    matrec_arr.map(function(elm, mls){
                        filtered = matrec_arr[mls].filter(function(e){
                           return this.indexOf(e) < 0;
                        },a);
                        if(filtered.length == 1){
                            right_num = filtered[0];
                        }
                    })
                    return right_num 
                }
                function thrty (ask){
                    var filtered_arr, currect_num;
                    count_array.map((elm, mls) =>{
                        filtered_arr = count_array[mls].filter(function(e){
                           return this.indexOf(e) < 0;
                        },ask);
                        if(filtered_arr.length == 2){
                            currect_num = shuffleArray(filtered_arr);
                            var ret_sec = currect_num.filter(function(e, a){
                                return this.indexOf(e) < 0
                            }, bat_arr[1])
                            if(ret_sec.length <= 1){
                                currect_num = ret_sec
                            }
                        }
                    })
                    return currect_num[0]
                }
                if(Ready_matrec(bat_arr[1]) == undefined ){
                    has_num = bat_arr[1].find((elm, mls) => {
                        return elm == Ready_matrec(bat_arr[0]);
                    })
                    if(has_num >=0){
                        i[thrty(bat_arr[0])].innerHTML = inner;
                    }
                    else{
                        i[Ready_matrec(bat_arr[0])].innerHTML = inner;
                        if (localStorage.clickcoun) {
                            localStorage.clickcoun = Number(localStorage.clickcoun)+1;
                         pc_strong.innerHTML = localStorage.clickcoun;
                        } else {
                            localStorage.clickcoun = 1;
                            pc_strong.innerHTML = localStorage.clickcoun;
                        }
                        any_func()
                        any_func2(bat_arr[0], i[Ready_matrec(bat_arr[0])])
                        you_result.innerHTML = "You lost!";
                        you_result.style.background = "#e25e5e";
                        setTime();
                    }
                }
                else{
                    has_num = emp_val.find((elm, mls) => {
                        return elm == Ready_matrec(bat_arr[0]);
                    })
                    if(has_num == undefined){
                        console.log(true)
                        i[Ready_matrec(bat_arr[1])].innerHTML = inner;
                    }
                    else if(has_num >= 0){
                        you_result.innerHTML = "You lost!"
                        you_result.style.background = "#e25e5e";
                        i[has_num].innerHTML = inner;
                        any_func()
                        any_func2(bat_arr[0], i[has_num]);
                        if (localStorage.clickcoun) {
                            localStorage.clickcoun = Number(localStorage.clickcoun)+1;
                         pc_strong.innerHTML = localStorage.clickcoun;
                        } else {
                            localStorage.clickcoun = 1;
                            pc_strong.innerHTML = localStorage.clickcoun;
                        };
                        setTime()
                    }
                }
            },
            three_steep:function(){
                if(raid(bat_arr[0])) {
                    any_func()
                    console.log(true)
                    var three_raid, where_raid=[];
                    matrec_arr.map((elm, mls)=>{
                        three_num_raid = matrec_arr[mls].filter(function(element,a) {
                            return this.indexOf(element) > -1;
                        }, bat_arr[0]);
                        if(three_num_raid.length == 2){
                            where_raid = [...three_num_raid]
                            where_raid.push(raid(bat_arr[0])[0])
                            var new_matrec = matrec_arr[mls].filter(function(elem, a){
                                return this.indexOf(elem) < 0;
                            }, where_raid)
                            if(new_matrec.length == 0){
                                any_func2(where_raid)
                            }
                        }
                    })
                    i[raid(bat_arr[0])[0]].innerHTML = inner;
                    any_func2(undefined, i[raid(bat_arr[0])[0]])
                    if (localStorage.clickcoun) {
                        localStorage.clickcoun = Number(localStorage.clickcoun)+1;
                     pc_strong.innerHTML = localStorage.clickcoun;
                    } else {
                        localStorage.clickcoun = 1;
                        pc_strong.innerHTML = localStorage.clickcoun;
                    }
                    you_result.innerHTML = "You lost!"
                    you_result.style.background = "#e25e5e";
                    setTime()
                }
                else if(raid(bat_arr[1])) {
                    i[raid(bat_arr[1])[0]].innerHTML = inner;
                }
                else {
                    i[whatever()].innerHTML = inner;
                }
                function raid(arr){
                    var three_num, where=[];
                    matrec_arr.map((elm, mls)=>{
                        three_num = matrec_arr[mls].filter(function(element,a) {
                            return this.indexOf(element) < 0;
                        }, arr);
                        if(three_num.length == 1)where.push(three_num[0])
                    })
                    var four_num = emp_val.filter(function(elm,a) {
                        return this.indexOf(elm) > -1;
                    }, where);
                    if(four_num.length>0)return four_num;
                }
                function whatever(){
                    var emp_arr = [],  emp_arr1 = [];
                    matrec_arr.map(function(elm, mls){
                        var fill_one_steep = matrec_arr[mls].filter(function(e,a){
                            return this.indexOf(e) < 0;
                        }, emp_val)
                        if(fill_one_steep.length == 1) emp_arr.push(matrec_arr[mls]);
                        return emp_arr
                    })
                    emp_arr.map(function(elm, mls){
                        var fill_two_steep = emp_arr[mls].filter(function(e,a){
                            return this.indexOf(e) < 0;
                        }, bat_arr[0])
                        if(fill_two_steep.length == 2) emp_arr1 = [...fill_two_steep];
                    })
                    return emp_arr1[0]
                }
            },
            four_steep:function(){
                function raid(arr){
                    var three_num, where2=[];
                    matrec_arr.map((elm, mls)=>{
                        three_num = matrec_arr[mls].filter(function(element,a) {
                            return this.indexOf(element) < 0;
                        }, arr);
                        if(three_num.length == 0){
                            any_func();
                            where2 = [...matrec_arr[mls]]
                            any_func2(matrec_arr[mls], undefined);
                            you_result.innerHTML = "You lost!";
                            you_result.style.background = "#e25e5e";
                            console.log(where2)
                            setTime()
                        }
                    })
                    return where2
                }
                if(raid(bat_arr[1]).length > 0){
                    if (localStorage.clickcount) {
                        localStorage.clickcount = Number(localStorage.clickcount)+1;
                     you_strong.innerHTML = localStorage.clickcount;
                    } else {
                        localStorage.clickcount = 1;
                        you_strong.innerHTML = localStorage.clickcount;
                    }
                    you_result.innerHTML = "You win!";
                    you_result.style.background = "#2eb7a4";
                    setTime()
                }
                else{
                    function win_match(){
                        var emp_arr_four = [], bool_false = 0, four_mls ;
                        bat_arr[0].push(emp_val[0])
                        matrec_arr.map((elm, mls)=>{
                            four_mls = matrec_arr[mls].filter(function(e,a){
                                return this.indexOf(e) < 0;
                            }, bat_arr[0])
                            if(four_mls.length == 0){
                                emp_arr_four.push(emp_val[0]);
                                any_func();
                                matrec_arr.map(function(elm, mls){
                                    var fill_last_steep = matrec_arr[mls].filter(function(e,a){
                                        return this.indexOf(e) < 0;
                                    }, bat_arr[0])
                                    if(fill_last_steep.length == 0){
                                        any_func2(matrec_arr[mls], undefined)
                                        if (localStorage.clickcoun) {
                                            localStorage.clickcoun = Number(localStorage.clickcoun)+1;
                                         pc_strong.innerHTML = localStorage.clickcoun;
                                        } else {
                                            localStorage.clickcoun = 1;
                                            pc_strong.innerHTML = localStorage.clickcoun;
                                        }
                                        you_result.innerHTML = "You lost!";
                                        you_result.style.background = "#e25e5e";
                                        setTime()
                                    }
                                })
                            }
                            else{
                                bool_false++;
                                if(bool_false == 8){
                                    any_func();
                                    you_result.innerHTML = "No one!";
                                    you_result.style.background = "#06060685";
                                    emp_arr_four.push(emp_val[0]);
                                    setTime()
                                }
                            }
                         })
                        return emp_arr_four;  
                    }
                    i[win_match()].innerHTML = inner;
                }
            }
        }
        if(count_true == 1){
            setTimeout(function(){
                at_last.first_steep()
                matrec_bool = true;
            }, 1000)
        }
        if(count_true == 2){
            setTimeout(function(){
                at_last.second_steep()
                matrec_bool = true;
            }, 1000)
        }
        if(count_true == 3){
            setTimeout(function(){
                at_last.three_steep()
                matrec_bool = true;
            }, 1000)
        }
        if(count_true == 4){
            setTimeout(function(){
                at_last.four_steep()
                matrec_bool = false;
            }, 1000)
        }
    }
}