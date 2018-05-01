<template>
    <div>
        <router-view></router-view>
        <TotalStatus/>
        <TodoList/>
        <Charts/>
    </div>
</template>

<script>
import TotalStatus from './component/total-status'
import TodoList from './component/todo-list'
import Charts from './component/charts'

export default {
    data() {
        return {}
    },
    mounted() {

    },
    components: {
        TotalStatus,
        TodoList,
        Charts
    }
}
</script>
