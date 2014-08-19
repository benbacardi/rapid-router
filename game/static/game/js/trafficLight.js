'use strict';

var ocargo = ocargo || {};

ocargo.TrafficLight = function(id, data, nodes) {
    this.id = id;
    this.startingState = data.startingState;
    this.state = this.startingState;
    this.startTime = data.startTime;
    this.redDuration = data.redDuration;
    this.greenDuration = data.greenDuration;
    this.currentLightTime = this.startTime;
    this.sourceNode = nodes[data.sourceNode];
    this.controlledNode = nodes[data.controlledNode];
};

ocargo.TrafficLight.prototype.reset = function() {
    this.currentLightTime = this.startTime;
    this.state = this.startingState;
};

ocargo.TrafficLight.prototype.getState = function() {
    return this.state;
};

ocargo.TrafficLight.prototype.incrementTime = function(model) {
    this.currentLightTime++;

    if (this.state === ocargo.TrafficLight.RED && this.currentLightTime >= this.redDuration) {
    	this.state = ocargo.TrafficLight.GREEN;
    	this.currentLightTime = 0;
        this.queueAnimation(model);
    }
    else if (this.state === ocargo.TrafficLight.GREEN && this.currentLightTime >= this.greenDuration) {
    	this.state = ocargo.TrafficLight.RED;
    	this.currentLightTime = 0;
        this.queueAnimation(model);
    }
};

ocargo.TrafficLight.prototype.queueAnimation = function(model) {
    ocargo.animation.appendAnimation({
        type: 'trafficlight',
        id: this.id,
        colour: this.state,
    });
};

ocargo.TrafficLight.RED = 'RED';
ocargo.TrafficLight.GREEN = 'GREEN';