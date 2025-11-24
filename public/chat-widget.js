(function () {
  const chatBtn = document.createElement('div');
  chatBtn.id = 'chat-widget-button';
  chatBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2563eb;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 28px;
    z-index: 9999;
  `;
  chatBtn.innerHTML = '💬';

  const iframe = document.createElement('iframe');
  iframe.src = '/chat-ui.html';
  iframe.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 350px;
    height: 500px;
    border-radius: 12px;
    border: 1px solid #ddd;
    display: none;
    z-index: 9999;
    background: white;
  `;

  chatBtn.onclick = () => {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  };

  document.body.appendChild(chatBtn);
  document.body.appendChild(iframe);

})();
