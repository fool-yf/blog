const OffLightState = require('./OffLightState');
const WeakLightState = require('./WeakLightState');
const StrongLightState = require('./STrongLightState');

class Light {
	constructor() {
		this.offLightState = new OffLightState(this);
		this.weakLightState = new WeakLightState(this);
		this.strongLightState = new StrongLightState(this);

		this.currentState = this.offLightState;
	}

	buttonClick() {
		this.currentState.buttonClick();
	}

	setState(state) {
		this.currentState = state;
	}
}

let light = new Light();

light.buttonClick();
light.buttonClick();
light.buttonClick();
light.buttonClick();