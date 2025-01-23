const Calculator = {
    data() {
        return {
            expression: [],
            stringExpression: '',
            result: '',
            calculated: false
        }
    },
    template:
        `<div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Calculator</h3>
                    <div class="form-group">
                        <input id="display" class="form-control text-right" :value="result" readonly>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button @click.prevent="listExpression" value=1 class="btn btn-secondary mx-1 number">1</button>
                            <button @click.prevent="listExpression" value=2 class="btn btn-secondary mx-1 number">2</button>
                            <button @click.prevent="listExpression" value=3 class="btn btn-secondary mx-1 number">3</button>
                            <button @click.prevent="handleOperatorClick" value="+" class="btn btn-secondary mx-1 operator">+</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button @click.prevent="listExpression" value=4 class="btn btn-secondary mx-1 number">4</button>
                            <button @click.prevent="listExpression" value=5 class="btn btn-secondary mx-1 number">5</button>
                            <button @click.prevent="listExpression" value=6 class="btn btn-secondary mx-1 number">6</button>
                            <button @click.prevent="handleOperatorClick" value="-" class="btn btn-secondary mx-1 operator">-</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button @click.prevent="listExpression" value=7 class="btn btn-secondary mx-1 number">7</button>
                            <button @click.prevent="listExpression" value=8 class="btn btn-secondary mx-1 number">8</button>
                            <button @click.prevent="listExpression" value=9 class="btn btn-secondary mx-1 number">9</button>
                            <button @click.prevent="handleOperatorClick" value="*" class="btn btn-secondary mx-1 operator">*</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button @click.prevent="listExpression" value=0 class="btn btn-secondary mx-1 number">0</button>
                            <button @click.prevent="listExpression" value="." class="btn btn-secondary mx-1">.</button>
                            <button @click.prevent="calculate" value="=" class="btn btn-secondary mx-1">=</button>
                            <button @click.prevent="handleOperatorClick" value="/" class="btn btn-secondary mx-1 operator">/</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <button @click.prevent="clear" class="btn btn-danger btn-block">Cancel</button>
                    </div>
                </div>
            </div>
        </div>`,
        methods: {
            listExpression(event) {
                let value = event.target.value;
                if (this.calculated) {
                    // If calculation has been done, 
                    // start a new expression
                    this.result = value;
                    this.calculated = false; // Reset flag
                } else {
                    this.result += value;
                }
            },
            handleOperatorClick(event) {
                let operator = event.target.value;
                // If the last character is an operator, 
                // replace it with the new operator
                if (/[+*/-]$/.test(this.result)) {
                  this.result = this.result.slice(0, -1) + operator;
                } else {
                  // Otherwise, add the new operator
                  this.result += operator;
                }
                this.calculated = false; // Reset flag
              },
            calculate() {
                try {
                  let evaluatedResult = eval(this.result.
                      replace(/(^|[^0-9])0+(\d+)/g, '$1$2'));
                  if (evaluatedResult === Infinity ||
                      evaluatedResult === -Infinity) {
                    throw new Error('Divide by zero error');
                  }
                  this.result = Number.isFinite(evaluatedResult)
                                ? evaluatedResult : 'Error';
                  this.calculated = true;
                  // Set flag to true after calculation
                } catch (error) {
                  if (error.message === 'Divide by zero error') {
                    this.result = 'Error: Divide by zero';
                  } else {
                    this.result = 'Error';
                  }
                }
              },
            clear() {
                this.result = '';
            }
        }
}