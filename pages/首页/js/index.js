var Index=(function(){

    var _getMoreSmallBoxItem=function(){
          $(".index-small-box-footer").click(function(){
              if( $(".small-box-item-more").hasClass("active")){
                  $(".small-box-item-more").removeClass("active");
              }else{
                  $(".small-box-item-more").addClass("active");
              }

          })
    }
    var _switchFrontBack=function(){
        $(".small-box-item").hover(function(){
            if($(this).hasClass("flip")){
                  $(this).removeClass("flip");
            }else{
                $(this).addClass("flip");
            }
        })
    }

    return{
        getMoreSmallBoxItem:_getMoreSmallBoxItem,
        switchFrontBack:_switchFrontBack

    }
})();

$(function(){
    Index.getMoreSmallBoxItem();
    Index.switchFrontBack();
})