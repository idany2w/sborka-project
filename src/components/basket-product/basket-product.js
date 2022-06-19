export default {
    basketProductRemove(e){
        const btn = e.target.closest('.basket-product__remove');

        if(!btn) return false;

        const item = btn.closest('.basket-product')
        let height = item.getBoundingClientRect().height;

        item.style.height = `${height}px`;

        setTimeout(() => {
            item.style.opacity = 0;
            item.style.transform = 'translateX(50%)';

            setTimeout(() => {
                item.style.height = '0px';
                item.style.marginBottom = '0px';

                setTimeout(() => {
                    item.remove()
                }, 200);
                
            }, 200);
        }, 100);
    },
    
    basketProductCountChange(e){
        const btn = e.target.closest('.basket-product__count-change');

        if(!btn) return false;

        const count = btn.closest('.basket-product__count') || document;
        const product = count.closest('.basket-product') || document;
        const price = product.dataset.price;
        const currency = product.dataset.currency;
        
        const number = count.querySelector('.basket-product__count-number');

        if(btn.classList.contains('basket-product__count-inc')){
            number.innerText = ++number.innerText;
        }

        if(btn.classList.contains('basket-product__count-dec')){
            number.innerText = --number.innerText;

            if(number.innerText == 0){
                product.querySelector('.basket-product__remove').click()
            }
        }

        let cost = number.innerText * price
        product.querySelector('.basket-product__price').innerText = `${currency} ${cost}`
    },
}