import type { NavigateFunction } from 'react-router-dom'

let navigateFunction: NavigateFunction | null = null

export const setNavigateFunction = (navFunc: NavigateFunction) => {
    navigateFunction = navFunc
}

export const navigate = (path: string, options?: { replace?: boolean }) => {
    if (navigateFunction) {
        navigateFunction(path, options)
    } else {
        console.error('Navigate function is not set.')
    }
}