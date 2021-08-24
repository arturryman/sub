const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = cotainer.find(".team__content");
  const textBlock = contentBlock.find(".team__content-block");
  const reqHeight = textBlock.height();

  contentBlock.height(reqHeight);

}

$(".team__title").click(e =>{
  const $this = $(e.currentTarget);

  openItem($this);
})