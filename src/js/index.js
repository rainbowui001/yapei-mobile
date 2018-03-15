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
        var mobileSelect2 = new MobileSelect({
            trigger: '#trigger2',
            title: '请选择县市',
            wheels: [
                        {data:['中部','南部','北部']}
                    ], 
            position:[2] //初始化定位
        });
        var mobileSelect3 = new MobileSelect({
            trigger: '#trigger3',
            title: '请选择区',
            wheels: [
                        {data:['中正区','大同区','松山区','内湖区']}
                    ],
            position:[2] //初始化定位
        });
    }
       
   
    var height  =$(window).height();
    var flag = true;
    $(window).scroll(function(event){
        var winPos = $(window).scrollTop();
        if(winPos>height){
            if(flag){
                $(".headLink").addClass("fixed-top");
                flag = false;
            }
        }else{
            if(!flag){
                $(".headLink").removeClass("fixed-top");
                flag = true;
            }
        }

    });
})
