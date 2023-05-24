class PopUpInfo extends HTMLElement {
    constructor() {
        super();
      
        // Shadow Root 생성
        var shadow = this.attachShadow({ mode: 'open' });

        // Shadow DOM 구조 생성
        var wrapper = document.createElement('span');
        var icon = document.createElement('span');
        var info = document.createElement('span');

        wrapper.setAttribute('class', 'wrapper');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);
        info.setAttribute('class', 'info');

        var text = this.getAttribute('text');
        info.textContent = text;

        var imgUrl;
        if (this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'img/default.png';
        }

        var img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // Shadow DOM 스타일링.
        var style = document.createElement('style');

        style.textContent = `
        .wrapper {
        position: relative;
        }

        .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
        }

        img {
        width: 1.2rem;
        }

        .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
        }`;

        // Shadow DOM을 Shadow Root 에 연결
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        shadow.appendChild(icon);
        shadow.appendChild(info);

        customElements.define('popup-info', PopUpInfo);

        <popup-info src="img/alt.png" decript="Shadow DOM 과 함께 커스텀 엘리먼트를 구현했습니다. 여기에는 <span> 태그와 아이콘이 추가될 예정입니다."></popup-info>
  }
}
