class rule {
    constructor() {
        this.ruleList = [];
    }
    addRule(functionRule) {
        this.ruleList.push(functionRule);
    }
    removeRule(functionRule) {
        this.ruleList = this.ruleList.filter(val => !val === functionRule);
    }
    removeRuleNumber(numberRule) {
        this.removeRule(this.ruleList[numberRule]);
    }
    validateData(data) {
        var keyReturn = true;
        this.ruleList.forEach((f) => {
            keyReturn = keyReturn && f(data);
        });
        return keyReturn;
    }
}