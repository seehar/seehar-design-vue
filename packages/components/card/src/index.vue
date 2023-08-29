<template>
    <button :class="[classString]" :disabled="disabled || loading">
        <span class="bg-primary">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import classNames from '../../../utils/className'
// import './index.scss'

const Props = {
    type: {
        type: String as PropType<string>, // 转为ts类型string
        default: 'default'
    },
    size: {
        type: String as PropType<string>,
        default: 'md'
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    loading: {
        type: Boolean as PropType<boolean>,
        default: false
    }
}

export default defineComponent({
    name: 'ShButton',
    props: Props,
    setup(props) {
        const classString = classNames([
            'we-button',
            `we-button-type-${props.type}`,
            props.disabled ? 'we-button-disabled' : ''
        ])
        return {
            classString
        }
    }
})
</script>
