document.addEventListener("DOMContentLoaded", () => {
  // すべてのカテゴリーリンクを取得
  const categoryLinks = document.querySelectorAll(".side-menu a");
  // すべての記事を取得
  const posts = document.querySelectorAll(".post");

  // 各カテゴリーリンクにクリックイベントを追加
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // リンクのデフォルト動作を無効化

      // クリックされたカテゴリー名を取得
      const selectedCategory = event.target.dataset.category;

      posts.forEach((post) => {
        // 「全て表示」がクリックされた場合、すべての記事を表示
        if (selectedCategory === "all") {
          post.style.display = "block";
          return; // ループを終了して次の記事へ
        }

        const postCategories = post.querySelectorAll(".post-cat a");
        let hasCategory = false;

        postCategories.forEach((cat) => {
          if (cat.dataset.category === selectedCategory) {
            hasCategory = true;
          }
        });

        if (hasCategory) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const pageTopBtn = document.getElementById("js-page-top");

  // スクロールイベント
  window.addEventListener("scroll", () => {
    // ページ上部から一定量スクロールされたらボタンを表示
    if (window.scrollY > 300) {
      pageTopBtn.style.display = "block";
    } else {
      pageTopBtn.style.display = "none";
    }
  });

  // クリックイベント
  pageTopBtn.addEventListener("click", (e) => {
    e.preventDefault(); // リンクのデフォルト動作を無効化

    // スムーズスクロール
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const articleLinks = document.querySelectorAll(".post-cat a");
  const articles = document.querySelectorAll(".diary-contents .post");

  articleLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // リンクのデフォルト動作（ページ遷移）を無効にする

      const selectedCategory = e.target.getAttribute("data-category");

      articles.forEach((article) => {
        const articleCategories = article.querySelectorAll(".post-cat a");
        let hasCategory = false;

        articleCategories.forEach((catLink) => {
          if (catLink.getAttribute("data-category") === selectedCategory) {
            hasCategory = true;
          }
        });

        if (hasCategory) {
          article.style.display = ""; // カテゴリーが一致したら表示
        } else {
          article.style.display = "none"; // 一致しなかったら非表示
        }
      });
    });
  });
});

// function(関数を作る) 関数の名前・自由に付けれる (引数(関数に引き渡す値)) {処理内容(何がしたいのか)}
function drawerButton() {
  //HTMLから必要な要素をJavaScriptに連れてくる
  const dButton = document.querySelector(".drawerButton");
  const dMenu = document.querySelector(".drawerMenu");

  //連れてきた要素にクラスの付け外しをする
  dButton.classList.toggle("active");
  dMenu.classList.toggle("active");
}

// メニューリンクをクリックしたら閉じる処理
document.querySelectorAll(".drawerMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".drawerButton").classList.remove("active");
    document.querySelector(".drawerMenu").classList.remove("active");
  });
});
