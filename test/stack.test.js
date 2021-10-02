class Stack {
	constructor() {
		this.top = 0;
		this.items = {};
		this.push;
		this.pop;
	}
	get peek() {
		return this.items[this.top];
	}

	push(value) {
		this.top += 1;
		this.items[this.top] = value;
	}

	pop() {
		this.top -= 1;
		this.items[this.top] = '';
	}
}

describe('My Stack', () => {
	let stack;
	beforeEach(() => {
		stack = new Stack();
	});

	it('is created empty', () => {
		const stack = new Stack();

		expect(stack.top).toBe(0);
		expect(stack.items).toEqual({});
	});

	it('can push to the top', () => {
		stack.push('H');
		expect(stack.top).toBe(1);
		expect(stack.peek).toBe('H');
	});

	it('can pop off', () => {
		// Insert element first
		stack.push('T');
		// Pop off the element
		stack.pop();
		expect(stack.top).toBe(0);
		expect(stack.peek).toEqual('');
	});
});
