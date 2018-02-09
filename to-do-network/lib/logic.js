'use strict';

/**
 * Sample transaction
 * @param {org.todo.network.ChangeTask} inTask
 * @transaction
 */
function updateTask(inTask) {
    inTask.task.value = inTask.newValue;
    return getAssetRegistry('org.todo.network.Task')
            .then(function(taskResult) {
                return taskResult.update(inTask.task);
            })
}

/**
 * Sample transaction
 * @param {org.todo.network.ChangeTask} inTask
 * @transaction
 */
function updateTask(inTask) {
    return getAssetRegistry('org.todo.network.Task')
            .then(function(taskResult) {
                return taskResult.remove(inTask.task);
            })
}