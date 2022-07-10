import { computed } from 'vue'

export default function useClass(defaultClasses, additionalClassObject) {
    const classes = computed(() => {
        return {
            ...defaultClasses.reduce((acc, c) => {
                acc[c] = true
                return acc
            }, {}),
            ...additionalClassObject,
        }
    })
    return { classes }
}
