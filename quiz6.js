function applyCoupon(cart, coupon) {
	cart.items.forEach((item) => {
		item.price -= coupon.discount;
	});
}

const userACart = {
	items: [
		{ name: '키보드', price: 30000 },
		{ name: '마우스', price: 20000 },
	],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

// 1.  실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// 둘다 5000원씩 깍여있음

// 2. 1번의 결과에 대한 이유를 설명해보세요.
// 참조형 데이터의 경우 메모리 주소를 가지고있는데, const userBCart = userACart; 로 인해
// A 에 동일한 메모리 주소를 가르키게됬음, 그래서 같은 배열을 수정하는것이기 때문에

// 3. 
// Json.parse(JSON.stringify(userACart))를 사용해도 되고, 
// const userBCart = { ...userACart }; 를 사용해도 되고,
// 깊은 복사 메서드를 만들어서 복사해도 되고,
// 즉 , 메모리 주소를 복사하는게 아니라 , 똑같은 객체를 메모리에 새로 할당해야함
