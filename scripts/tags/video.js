'use strict';

function video(args) {
  const url = args[0];
  return `<video controls width="100%">
    <source src="${url}" type="video/mp4">       
    您的浏览器不支持 video 标签 
</video>`;
}

hexo.extend.tag.register('video', video); 