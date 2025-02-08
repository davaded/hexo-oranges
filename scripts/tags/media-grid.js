'use strict';

function mediaGrid(args, content) {
  let result = '<div class="media-grid-container">';
  
  // 将内容按视频标签分割
  const regex = /(<video[\s\S]*?<\/video>)/g;
  const parts = content.split(regex);
  
  parts.forEach(part => {
    part = part.trim();
    if (!part) return;
    
    if (part.startsWith('<video')) {
      // 处理视频
      result += `<div class="media-item">${part}</div>`;
    } else {
      // 处理其他内容（图片等）
      part.split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;
        
        if (line.startsWith('![')) {
          result += `<div class="media-item">${line}</div>`;
        }
      });
    }
  });
  
  result += '</div>';
  return result;
}

hexo.extend.tag.register('mgrid', mediaGrid, {ends: true}); 