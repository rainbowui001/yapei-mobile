$(document).ready(function(){
    // button
    $(".tabButton").click(function () {
        $(this).siblings().removeClass("showButton");
        $(this).addClass("showButton");
        var index = $(this).index();
        var content =$(this).parents(".contentNav").siblings(".tab-content").find(".carousel").eq(index);
        content.show();
        content.siblings().hide();
    })


    if($(".iDate.date").length>0){
        $(".iDate.date").datetimepicker({
            locale:"zh-cn",
            format:"YYYY-MM-DD",
            dayViewHeaderFormat:"YYYY年 MMMM"
        });
    }

    if($("#trigger1").length>0){
        var mobileSelect1 = new MobileSelect({
            trigger: '#trigger1',
            title: '请选择胎次',
            wheels: [
                        {data:['1','2','3','4']}
                    ],
            position:[2] //初始化定位
        });
    }

    if($("#trigger2").length>0){
        var mobileSelect2 = new MobileSelect({
            trigger: '#trigger2',
            title: '请选择县市',
            wheels: [
                        {data:['中部','南部','北部']}
                    ], 
            position:[2] //初始化定位
        });
    }
    if($("#trigger3").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#trigger3',
            title: '请选择区',
            wheels: [
                        {data:['中正区','大同区','松山区','内湖区']}
                    ],
            position:[2] //初始化定位
        });
    }
    if($("#trigger4").length>0){
        var mobileSelect2 = new MobileSelect({
            trigger: '#trigger4',
            title: '请选择县市',
            wheels: [
                        {data:['中部','南部','北部']}
                    ], 
            position:[2] //初始化定位
        });
    }
    if($("#trigger5").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#trigger5',
            title: '请选择区',
            wheels: [
                        {data:['中正区','大同区','松山区','内湖区']}
                    ],
            position:[2] //初始化定位
        });
    }
    if($("#time").length>0){
        var mobileSelect2 = new MobileSelect({
            trigger: '#time',
            title: '请选择时间',
            wheels: [
                        {data:['8-18時(不指定）','8-13時','14-18時（最晚配送時段）']}
                    ], 
            position:[2] //初始化定位
        });
    }
    if($("#bill").length>0){
        var mobileSelect2 = new MobileSelect({
            trigger: '#bill',
            title: '请选择时间',
            wheels: [
                        {data:['个人','两联','公司']}
                    ], 
            position:[2] //初始化定位
        });
    }
    if($("#xueli").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#xueli',
            title: '请选择学历',
            wheels: [
                        {data:['高中','大学','硕士','博士']}
                    ],
            position:[2] //初始化定位
        });
    }
    if($("#job").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#job',
            title: '请选职业',
            wheels: [
                        {data:['工程师','销售','教师','个体']}
                    ],
            position:[2] //初始化定位
        });
    }
    if($("#relationship1").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#relationship1',
            title: '请选职业',
            wheels: [
                        {data:['母女','父女','母子','父子']}
                    ],
            position:[2] //初始化定位
        });
    }
    if($("#relationship2").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#relationship2',
            title: '请选职业',
            wheels: [
                        {data:['母女','父女','母子','父子']}
                    ],
            position:[2] //初始化定位
        });
    }
    if($("#relationship3").length>0){
        var mobileSelect3 = new MobileSelect({
            trigger: '#relationship3',
            title: '请选职业',
            wheels: [
                        {data:['母女','父女','母子','父子']}
                    ],
            position:[2] //初始化定位
        });
    }

    
    // var height  =$(window).height();
    // var flag = true;
    // $(window).scroll(function(event){
    //     var winPos = $(window).scrollTop();
    //     if(winPos>height){
    //         if(flag){
    //             $(".headLink").addClass("fixed-top");
    //             flag = false;
    //         }
    //     }else{
    //         if(!flag){
    //             $(".headLink").removeClass("fixed-top");
    //             flag = true;
    //         }
    //     }

    // });
})
