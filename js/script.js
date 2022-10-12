// swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1.29,
	spaceBetween: 20,
	freeMode: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 2.5,
			spaceBetween: 30,

    },
    // 768px以上の場合
    1200: {
      slidesPerView: 2.76,
			spaceBetween: 40,

    },
    // 1920px以上の場合
    1920: {
      slidesPerView: 4.26,
			spaceBetween: 60,

    }
  }
});

// wowjs
new WOW().init();

jQuery(function() {
	// ドロワー
	jQuery('.drawer-icon').on('click', function(e) {
		e.preventDefault();

		jQuery('.drawer-icon').toggleClass('is-active');
		jQuery('.drawer-content').toggleClass('is-active');
		jQuery('.drawer-bg').toggleClass('is-active');

		return false;
	});

	// スムーススクロール
	// #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
		// スムーススクロールの処理を書く
		// .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
		// トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    if ("fixed" !== jQuery(".header").css("position")) {
      position = jQuery(target).offset().top;
    }
    if (0 > position) {
      position = 0;
    }
		// その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });

	// スクロール判定
  jQuery(window).on("scroll", function() {

    if (100 < jQuery(this).scrollTop()) {
      jQuery('.to-top').addClass('is-show');
    } else {
      jQuery('.to-top').removeClass('is-show');
    }
  });

	// アコーディオン
	jQuery('.according-head').click(function() {
		jQuery(this).next().slideToggle();
		jQuery(this).children('.according-icon').toggleClass('is-open');
	});

	// googleform
  let $form = $( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

	// formの入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input' ).on( 'change', function() {
    if(
      $( '#js-form input[type="text"]' ).val() !=="" &&
			$( '#js-form input[name="entry.13396954"]' ).prop( 'checked' ) === true
		 ) {
      // 全て入力された時
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      // 入力されていない時
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
    }
  })

});
