const Calculator = {
    template:
        `<div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Calculator</h3>
                    <div class="form-group">
                        <input type="text" id="display" class="form-control text-right" readonly>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1">1</button>
                            <button class="btn btn-secondary mx-1">2</button>
                            <button class="btn btn-secondary mx-1">3</button>
                            <button class="btn btn-secondary mx-1">+</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1">4</button>
                            <button class="btn btn-secondary mx-1">5</button>
                            <button class="btn btn-secondary mx-1">6</button>
                            <button class="btn btn-secondary mx-1">-</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1">7</button>
                            <button class="btn btn-secondary mx-1">8</button>
                            <button class="btn btn-secondary mx-1">9</button>
                            <button class="btn btn-secondary mx-1">*</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1">0</button>
                            <button class="btn btn-secondary mx-1">.</button>
                            <button class="btn btn-secondary mx-1">=</button>
                            <button class="btn btn-secondary mx-1">/</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-danger btn-block">Cancel</button>
                    </div>
                </div>
            </div>
        </div>`
}