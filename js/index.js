let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper1 = new Swiper(".review-slider", {
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});


var swiper2 = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


menu.addEventListener('click', () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

//获取请求链接的参数值
$.request = function (name) {
  var search = location.search.slice(1);
  var arr = search.split("&");
  for (var i = 0; i < arr.length; i++) {
      var ar = arr[i].split("=");
      if (ar[0] == name) {
          if (unescape(ar[1]) == 'undefined') {
              return "";
          } else {
              return unescape(ar[1]);
          }
      }
  }
  return "";
}
//序列化表单数组
$.fn.formSerialize = function (formdate) {
  var element = $(this);
  if (!!formdate) {
      for (var key in formdate) {
          var $id = element.find('#' + key);
          var value = $.trim(formdate[key]).replace(/ /g, '');
          var type = $id.attr('type');
          if ($id.hasClass("select2-hidden-accessible")) {
              type = "select";
          }
          switch (type) {
              case "checkbox":
                  if (value == "true") {
                      $id.attr("checked", 'checked');
                  } else {
                      $id.removeAttr("checked");
                  }
                  break;
              case "select":
                  $id.val(value).trigger("change");
                  break;
              default:
                  $id.val(value);
                  break;
          }
      };
      return false;
  }
  var postdata = {};
  element.find('input,select,textarea').each(function (r) {
      var $this = $(this);
      var id = $this.attr('id');
      var type = $this.attr('type');
      switch (type) {
          case "checkbox":
              postdata[id] = $this.is(":checked");
              break;
          default:
              var value = $this.val() == "" ? " " : $this.val();
              if (!$.request("keyValue")) {
                  value = value.replace(/ /g, '');
              }
              postdata[id] = value;
              break;
      }
  });
  if ($('[name=__RequestVerificationToken]').length > 0) {
      postdata["__RequestVerificationToken"] = $('[name=__RequestVerificationToken]').val();
  }
  return postdata;
};
function changeVideo(element) {
    var videoPlayer = document.getElementById('video-slider');
    var currentActive = document.querySelector('.vid-btn.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    element.classList.add('active');
    videoPlayer.src = element.getAttribute('data-src');
  }
   