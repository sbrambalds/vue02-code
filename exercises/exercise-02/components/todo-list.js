const ToDoList = {
    template: 
        `<div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Todo List</h3>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Add a new task">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Add Task</button>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <input type="checkbox">
                            <span style="text-decoration-line: line-through">An element</span>
                            <button class="btn btn-danger btn-sm float-right">Remove</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
}