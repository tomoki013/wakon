//スクロールすると出てくるエフェクト
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 150;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('active');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });
  
  // ハンバーガーメニュー
  const menu = document.querySelector('.hambarger');
  const navMenu = document.querySelector('.navmenu');
  const menuText = document.querySelector('.menu_text');
  
  menu.addEventListener('click', () => {
    menu.classList.toggle('active'); // ハンバーガーメニューにactiveが付与されていたら削除、付与されていなかったら付与する
  
    // メニューのテキストを切り替える
    if (menu.classList.contains('active')) { // ハンバーガーメニューにactiveが付与されていた場合350ms後にメニューテキストをcloseに変える
      setTimeout(() => {
        menuText.textContent = 'close';
      }, 350);
      
      // スクロール無効化
      document.body.classList.add('no_scroll');
    } else { // それ以外なら350ms後にメニューテキストをmenuに変える
      setTimeout(() => {
        menuText.textContent = 'menu';
      }, 350);
      
      // スクロール有効化
      document.body.classList.remove('no_scroll');
    }
  
    if (navMenu.classList.contains('active')) { // navmenuにactiveが付与されていたらactiveを削除してinactiveを付与
      navMenu.classList.remove('active');
      navMenu.classList.add('inactive');
  
      setTimeout(() => { // 500ms後にinactiveを削除してnavmenuのdisplayをnoneに
        navMenu.classList.remove('inactive');
        navMenu.style.display = 'none';
      }, 500);
    } else { // それ以外はnavmenuのdisplayをblockにしてinactiveを削除、activeを付与
      navMenu.style.display = 'block';
      navMenu.classList.remove('inactive');
      navMenu.classList.add('active');
    }
});