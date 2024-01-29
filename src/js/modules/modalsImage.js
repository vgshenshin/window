
const modalsImage = () => {
    const wrapper = document.querySelector('.works'),
        modal = document.createElement('div'),
        bigImage = document.createElement('img');

    modal.classList.add('popup');
    modal.style.cssText = `
        justify-content: center;
        align-items: center;
    `;

    bigImage.style.height = '85vh';

    wrapper.appendChild(modal);
    modal.appendChild(bigImage);

    wrapper.addEventListener('click', (e) => {
        e.preventDefault();


            if(e.target && e.target.classList.contains('preview')) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                
                const path = e.target.parentNode.getAttribute('href')

                bigImage.setAttribute('src', path);
            }

            if(e.target && e.target.matches('div.popup')) {
                modal.style.display = '';
                document.body.style.overflow = '';
            }
    });
}

export default modalsImage;