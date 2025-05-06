import { onMounted, onUnmounted } from 'vue'

export function useClickOutside(targetRef, callback) {
  const listener = (event) => {
    if (targetRef.value && !targetRef.value.contains(event.target)) {
      callback(event)
    }
  }

  onMounted(() => document.addEventListener('click', listener))
  onUnmounted(() => document.removeEventListener('click', listener))
}
